export function getCountry(name, data) {
  return data?.find((country) => country?.alpha3Code === name);
}
