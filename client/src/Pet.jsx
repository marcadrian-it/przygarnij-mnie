import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, imgUrl, registration_date, id } = props;

  let hero = imgUrl;

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${registration_date}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
