import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPetsAsync, updateRequestParams } from "./searchSlice";
import Results from "./Results";

const ANIMALS = ["Pies", "Kot"];

const SearchParams = () => {
  const dispatch = useDispatch();

  // Get the request params and pets from the Redux store
  const { requestParams, pets } = useSelector((state) => state.search);

  const [animal, setAnimal] = useState(requestParams.animal);

  // Fetch search results only on first load
  useEffect(() => {
    dispatch(fetchPetsAsync(requestParams));
  }, [dispatch, requestParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRequestParams = {
      name: formData.get("name") ?? "",
      animal: formData.get("animal") ?? "",
      registration_date: formData.get("registration_date") ?? "",
    };
    dispatch(updateRequestParams(newRequestParams));
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSearch}>
        <label htmlFor="animal">
          Gatunek zwierzaka:
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option value="">--Wybierz gatunek--</option>
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
            min="2015-01-01"
            max="2023-12-31"
            defaultValue="2015-01-01"
            placeholder="Data rejestracji"
          />
        </label>

        <label htmlFor="name">
          Imię zwierzaka:
          <input type="text" id="name" name="name" placeholder="Imię" />
        </label>

        <button type="submit">Szukaj</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
