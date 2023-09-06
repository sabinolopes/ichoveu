const token = import.meta.env.VITE_TOKEN;

export async function searchCities(term) {
  const apiUrl = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.length === 0) window.alert('Nenhuma cidade encontrada');

  return data;
}

export async function getWeatherByCity(cityURL) {
  const apiUrl = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const { current, location } = data;

  const newData = {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    url: cityURL,
  };

  return newData;
}
