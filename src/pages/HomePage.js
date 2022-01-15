import {
  CardWrapper,
  HomeWrapper,
  ImageFlag,
  CountryName,
  CountryInfo,
  CountryPopulation
} from '../components/Card';
import { useQuery } from 'react-query';
import axios from 'axios';

const HomePage = () => {
  const { isLoading, isError, isSuccess, data, error } = useQuery('countries', async () => {
    const { data } = await axios('https://restcountries.com/v2/all');
    return data;
  });

  console.log(isLoading, isError, data, error?.message);

  if (isError && error?.message === 'Request failed with status code 404') {
    return <p>404 Error</p>;
  }

  return (
    <HomeWrapper>
      {isLoading ? <p>Loading...</p> : <></>}
      {isSuccess ? (
        data.map((country) => (
          <CardWrapper key={country?.name}>
            <ImageFlag src={country?.flag} alt={`${country?.name}'s flag`} />
            <CountryInfo>
              <CountryName>{country?.name}</CountryName>
              <p>
                <CountryPopulation>Population:</CountryPopulation> {country?.population}
              </p>
              <p>
                <CountryPopulation>Region:</CountryPopulation> {country?.region}
              </p>
              <p>
                <CountryPopulation>Capital:</CountryPopulation> {country?.capital}
              </p>
            </CountryInfo>
          </CardWrapper>
        ))
      ) : (
        <></>
      )}
    </HomeWrapper>
  );
};

export default HomePage;
