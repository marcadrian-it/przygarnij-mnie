const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const paths = fs.readFileSync("Koty_links.txt", "utf-8").split("\n");
  const data = [];

  for (const path of paths) {
    const url = `http://www.schronisko.krakow.pl/Adopcje/ZWIERZAKI_DO_ADOPCJI/Koty${path}`;
    await page.goto(url);

    // Wait for the specified element to be loaded
    await page.waitForSelector("div.default_description");

    // Extract the text content
    const paragraphs = await page.$$eval("div.default_description p", (els) =>
      els.map((el) => el.textContent.trim()).filter(Boolean)
    );

    // Extract the image URL
    const imgUrl = await page.$eval(
      "div.animal_big_foto img",
      (img) => img.src
    );

    const [name, id, registration_date, species, size] = paragraphs;

    const description = paragraphs.slice(5).join("\n").trim();

    data.push({
      name,
      id,
      registration_date,
      species,
      size,
      description,
      imgUrl,
    });
    console.log({
      name,
      id,
      registration_date,
      species,
      size,
      description,
      imgUrl,
    });
  }

  // Write the data to a JSON file
  fs.writeFile("Kotki.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Data saved to file!");
  });

  await browser.close();
})();
