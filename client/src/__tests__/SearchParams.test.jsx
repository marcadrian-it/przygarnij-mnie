/* eslint-disable no-undef */
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { expect, test } from "vitest";
import { Provider } from "react-redux";
import store from "../store";
import SearchParams from "../SearchParams";
import { StaticRouter } from "react-router-dom/server";

test("Default search with no parameters", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      pets: [
        {
          id: 1,
          name: "Fluffy",
          animal: "Kot",
          registration_date: "2022-01-01",
          imgUrl: "https://example.com/fluffy.jpg",
        },
        {
          id: 2,
          name: "Buddy",
          animal: "Pies",
          registration_date: "2022-02-01",
          imgUrl: "https://example.com/buddy.jpg",
        },
        {
          id: 3,
          name: "Whiskers",
          animal: "Kot",
          registration_date: "2022-03-01",
          imgUrl: "https://example.com/whiskers.jpg",
        },
        {
          id: 4,
          name: "Max",
          animal: "Pies",
          registration_date: "2022-04-01",
          imgUrl: "https://example.com/max.jpg",
        },
      ],
    })
  );

  render(
    <StaticRouter>
      <Provider store={store}>
        <SearchParams />
      </Provider>
    </StaticRouter>
  );

  expect(fetchMock).toHaveBeenCalledWith(
    "http://localhost:3000/pets?animal=&name=&date="
  );
  fetchMock.resetMocks();
  cleanup();
});
test("Search with specific parameters", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      pets: [
        {
          id: 1,
          name: "Fluffy",
          animal: "Kot",
          registration_date: "2022-01-01",
          imgUrl: "https://example.com/fluffy.jpg",
        },
      ],
    })
  );

  const { getByText, getByLabelText } = render(
    <StaticRouter>
      <Provider store={store}>
        <SearchParams />
      </Provider>
    </StaticRouter>
  );

  const animalInput = getByLabelText("Gatunek zwierzaka:");
  fireEvent.change(animalInput, { target: { value: "Kot" } });

  const nameInput = getByLabelText("Imię zwierzaka:");
  fireEvent.change(nameInput, { target: { value: "Fluffy" } });

  const dateInput = getByLabelText("Zwierzak zarejestrowany po:");
  fireEvent.change(dateInput, { target: { value: "2022-01-01" } });

  const searchButton = getByText("Szukaj");
  fireEvent.click(searchButton);

  await waitFor(() =>
    expect(fetchMock).toHaveBeenLastCalledWith(
      "http://localhost:3000/pets?animal=Kot&name=Fluffy&date=2022-01-01"
    )
  );

  cleanup();
});
