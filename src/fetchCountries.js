export const fetchCountries = async searchText => {
  if (typeof searchText !== 'string' || !searchText.trim()) {
    throw new Error(`Incorrect params passed: ${searchText}`);
  }

  const fields = [
    'name.official',
    'capital',
    'population',
    'flags.svg',
    'languages',
  ];

  const params = new URLSearchParams({
    fields: fields.join(','),
  });

  try {
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${searchText}?${params}`
    );
    return resp.json();
  } catch (err) {
    console.error(`Error happened while fetching countries`, err);
    throw err;
  }
};
