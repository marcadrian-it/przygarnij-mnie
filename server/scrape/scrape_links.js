const puppeteer = require("puppeteer");
const fs = require("fs");

// Specify the animal types as an array
const animalTypes = ["Psy", "Koty"];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Loop through each animal type and scrape its adoption page
  for (const animalType of animalTypes) {
    const baseUrl = `http://www.schronisko.krakow.pl/Adopcje/ZWIERZAKI_DO_ADOPCJI/${animalType}/`;
    const maxPage = 12; // Maximum number of pages to scrape
    let dataArray = [];

    for (let pageIdx = 0; pageIdx < maxPage; pageIdx++) {
      const url = `${baseUrl}?p=${pageIdx}`;
      await page.goto(url);

      // Wait for the specified element to be loaded
      await page.waitForSelector("div.default_description");

      // Extract the text content of all elements with the specified class
      const hrefArray = await page.$$eval(
        "div.default_description a.news_short_more",
        (elArray) => {
          return elArray.map((el) => el.getAttribute("href"));
        }
      );

      // Append the array to the relevant file
      dataArray.push(...hrefArray);
    }

    // Write the array to a file with the animal type
    fs.appendFile(`${animalType}_links.txt`, dataArray.join("\n"), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`${animalType} data saved to file!`);
    });
  }

  await browser.close();
})();
