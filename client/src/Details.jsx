import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  console.log(results);
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel imgUrl={pet.imgUrl} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.registration_date}`}</h2>
        <button
          onClick={() => window.open("https://ktoz.krakow.pl/", "_blank")}
        >
          Adoptuj {pet.name}
        </button>
        <p>{pet.description ? pet.description : "Brak opisu"}</p>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
