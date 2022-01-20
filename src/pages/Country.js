import { useParams, useNavigate } from 'react-router-dom';

import { useFetch } from '../api';
import {
  BackButton,
  DetailPage,
  DetailImage,
  Details,
  Span,
  DetailSect,
  DetailSectOne,
  DetailCont,
  BorderButton
} from '../Styles';
import { NotFound, ErrorFound } from '../components/NotFound';
import LoadingDots from '../components/Loader';

export default function Country() {
  let params = useParams();
  const { isLoading, isError, isSuccess, data, error } = useFetch(
    'country',
    `https://restcountries.com/v2/name/${params.countryid}`
  );
  let country = isSuccess && data[0];
  const { isSuccess: countriesSuccess, data: countries } = useFetch(
    'countries',
    'https://restcountries.com/v2/all'
  );
  const bord = country?.borders?.map((e) => countries?.find((ele) => ele?.alpha3Code === e));

  let navigate = useNavigate();
  if (isError && error?.message === 'Request failed with status code 404') {
    return <NotFound />;
  }
  if (isError) {
    if (error?.message === 'Request failed with status code 404') {
      return <NotFound />;
    } else {
      return <ErrorFound error={error} />;
    }
  }

  return (
    <DetailCont>
      <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
      {isLoading ? <LoadingDots /> : <></>}
      {isSuccess && (
        <DetailPage>
          <DetailImage src={country?.flag} />
          <Details>
            <h2>{country?.name}</h2>
            <DetailSect>
              <DetailSectOne>
                <p>
                  <Span>Native Name:</Span> {country?.nativeName ? country?.nativeName : 'N/A'}
                </p>
                <p>
                  <Span>Population:</Span> {country?.population ? country?.population : 'N/A'}
                </p>
                <p>
                  <Span>Region:</Span> {country?.region ? country?.region : 'N/A'}
                </p>
                <p>
                  <Span>Sub region:</Span> {country?.subregion ? country?.subregion : 'N/A'}
                </p>
                <p>
                  <Span>Capital:</Span> {country?.capital ? country?.capital : 'N/A'}
                </p>
              </DetailSectOne>
              <DetailSectOne>
                <p>
                  <Span>Top Level Domain:</Span>{' '}
                  {country?.topLevelDomain ? country?.topLevelDomain : 'N/A'}
                </p>
                <p>
                  <Span>Currencies:</Span>{' '}
                  {countriesSuccess && country?.currencies?.length
                    ? country?.currencies?.map((currency, index) => (
                        <span key={index}>
                          {currency.name}
                          {country?.currencies?.length > 1
                            ? ', '
                            : country?.currencies?.length - 1
                            ? null
                            : ' '}{' '}
                        </span>
                      ))
                    : 'N/A'}
                </p>
                <p>
                  <Span>Languages:</Span>{' '}
                  {country?.languages?.length
                    ? country?.languages?.map((language, index) => (
                        <span key={index}>
                          {language.name}
                          {country?.languages?.length > 1
                            ? ', '
                            : country?.languages?.length - 1
                            ? null
                            : ' '}{' '}
                        </span>
                      ))
                    : 'N/A'}
                </p>
                <>
                  <Span>Border Countries:</Span>
                  <div>
                    {bord?.map((ele) => (
                      <BorderButton
                        key={Math.random()}
                        onClick={() => navigate(`/countries/${ele?.name}`)}>
                        {ele?.name}
                      </BorderButton>
                    ))}
                  </div>
                </>
              </DetailSectOne>
            </DetailSect>
          </Details>
        </DetailPage>
      )}
    </DetailCont>
  );
}
