export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7704401ac0mshd45ea7c5d1e40a7p156f59jsn47b4cf464515',
		'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_EXERCISESDB_KEY
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7704401ac0mshd45ea7c5d1e40a7p156f59jsn47b4cf464515',
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};