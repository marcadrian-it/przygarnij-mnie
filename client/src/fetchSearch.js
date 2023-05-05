async function fetchSearch({ animal, name, registration_date }) {
  const res = await fetch(
    `https://przygarnij-mnie.herokuapp.com/pets?animal=${animal}&name=${name}&date=${registration_date}`
  );

  if (!res.ok)
    throw new Error(
      `pet search not okay: ${animal}, ${name}, ${registration_date}`
    );

  return res.json();
}

export default fetchSearch;
