export function getCountry(name, data) {
  return data?.find((country) => country?.name === name);
}
