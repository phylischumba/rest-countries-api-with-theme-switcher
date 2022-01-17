import {
  CardWrapper,
  HomeWrapper,
  ImageFlag,
  CountryName,
  CountryInfo,
  CountryPopulation
} from '../Styles';
import LoadingDots from '../components/Loader';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorFound, NotFound } from '../components/NotFound';

const HomePage = () => {
  const { isLoading, isError, isSuccess, data, error } = useQuery('countries', async () => {
    const { data } = await axios('https://restcountries.com/v2/all');
    return data;
  });

  if (isError) {
    if (error?.message === 'Request failed with status code 404') {
      return <NotFound />;
    } else {
      return <ErrorFound error={error} />;
    }
  }
  let navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/countries/${name}`);
  };

  return (
    <HomeWrapper>
      {isLoading ? <LoadingDots /> : <></>}
      {isSuccess ? (
        data.map((country) => (
          <CardWrapper key={country?.name} onClick={() => handleClick(country?.name)}>
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
