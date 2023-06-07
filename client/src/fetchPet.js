const fetchPet = async ({ queryKey }) => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const id = queryKey[1];
  const apiRes = await fetch(`${API_BASE_URL}/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
