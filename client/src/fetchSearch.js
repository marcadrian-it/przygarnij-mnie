async function fetchSearch({ animal, name, registration_date }) {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const res = await fetch(
    `${API_BASE_URL}/pets?animal=${animal}&name=${name}&date=${registration_date}`
  );

  if (!res.ok)
    throw new Error(
      `pet search not okay: ${animal}, ${name}, ${registration_date}`
    );

  return res.json();
}

export default fetchSearch;
