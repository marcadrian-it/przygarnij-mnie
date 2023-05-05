import { useSelector } from "react-redux";
import Pet from "./Pet";
const Results = () => {
  const pets = useSelector((state) => state.search.pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Nie Znaleziono Wyników</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              registration_date={pet.registration_date}
              imgUrl={pet.imgUrl}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
export default Results;
