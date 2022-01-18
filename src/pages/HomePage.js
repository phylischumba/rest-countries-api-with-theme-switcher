import {
  CardWrapper,
  HomeWrapper,
  ImageFlag,
  CountryName,
  CountryInfo,
  CountryPopulation,
  Home,
  Input,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  HomeHeader
} from '../Styles';
import LoadingDots from '../components/Loader';
import { useFetch } from '../api';
import { useNavigate } from 'react-router-dom';
import { ErrorFound, NotFound } from '../components/NotFound';
import React, { useState } from 'react';

const HomePage = () => {
  const { isLoading, isError, isSuccess, data, error } = useFetch(
    'countries',
    'https://restcountries.com/v2/all'
  );

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
  // eslint-disable-next-line no-unused-vars
  const regions = [
    'Asia',
    'Europe',
    'Africa',
    'Oceania',
    'Americas',
    'Polar',
    'Antarctic Ocean',
    'Antarctic'
  ];
  // const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState(null);
  const handleSearchChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const filteredData =
    query !== null || selectedOption !== null
      ? query
        ? data.filter((el) => el.name.toLowerCase().includes(query))
        : selectedOption === 'All'
        ? data
        : data.filter((el) => el.region.toLowerCase() === selectedOption.toLowerCase())
      : data;

  return (
    <Home>
      <HomeHeader>
        <Input
          onChange={handleSearchChange}
          placeholder="Type to search for a country"
          name="query"
          defaultValue={query}
        />
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption ? selectedOption : 'Filter by region'}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem onClick={onOptionClicked('All')} key={Math.random()}>
                  All
                </ListItem>
                {regions.map((option) => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </HomeHeader>

      <HomeWrapper>
        {isLoading ? <LoadingDots /> : <></>}
        {isSuccess ? (
          filteredData?.map((country) => (
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
    </Home>
  );
};

export default HomePage;
