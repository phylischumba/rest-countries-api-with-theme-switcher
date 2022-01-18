/* eslint-disable no-unused-vars */
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
  ListItem
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
    'European Union',
    'European Free Trade Association',
    'Caribbean Community',
    'Pacific Alliance',
    'African Union',
    'Union of South American Nations',
    'Eurasian Economic Union',
    'Arab League',
    'Association of Southeast Asian Nations',
    'Central American Integration System',
    'Central European Free Trade Agreement',
    'North American Free Trade Agreement',
    'South Asian Association for Regional Cooperation'
  ];
  // const [filteredData, setFilteredData] = useState(data);
  const [query, setQuery] = useState(null);
  const handleSearchChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredData =
    query !== null
      ? data.filter((el) => {
          el.name.toLowerCase().includes(query);
        })
      : data;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);
  const options = ['Mangoes', 'Apples', 'Oranges'];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  console.log(selectedOption);

  return (
    <Home>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                {regions.map((option) => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </div>

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
