import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["Pies", "Kot"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    name: "",
    registration_date: "",
    animal: "",
  });
  const [animal, setAnimal] = useState("");

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            name: formData.get("name") ?? "",
            animal: formData.get("animal") ?? "",
            registration_date: formData.get("registration_date") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="animal">
          Gatunek zwierzaka:
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="registration_date">
          Zwierzak zarejestrowany po:
          <input
            type="date"
            id="registration_date"
            name="registration_date"
            min="2010-01-01"
            max="2023-12-31"
            defaultValue="2010-01-01"
            placeholder="Data rejestracji"
          />
        </label>

        <label htmlFor="name">
          Imię zwierzaka:
          <input id="name" name="name" />
        </label>

        <button>Wyślij</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
