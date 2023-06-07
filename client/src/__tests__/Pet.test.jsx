import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Pet from "../Pet.jsx";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.png");
  pet.unmount();
});

test("displays a non-default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet imgUrl="https://res.cloudinary.com/dmzmqvehw/image/upload/v1683142251/bs11yaw23iozabx9txga.jpg" />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("bs11yaw23iozabx9txga.jpg");
  pet.unmount();
});
