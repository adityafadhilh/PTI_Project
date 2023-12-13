const getMusics = async (id) => {
  const request = await fetch(`https://pti-backend-0f1a0610119f.herokuapp.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return requestJson.results;
};

export default getMusics;
