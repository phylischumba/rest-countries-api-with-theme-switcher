import { useParams, useNavigate } from 'react-router-dom';
import { getCountry } from '../getCountry';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BackButton } from '../Styles';

export default function Country() {
  const { isSuccess, data } = useQuery('countries', async () => {
    const { data } = await axios('https://restcountries.com/v2/all');
    return data;
  });
  let params = useParams();
  let country = isSuccess && getCountry(params.countryid, data);
  let navigate = useNavigate();

  return (
    <main style={{ padding: '3rem' }}>
      <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
      <h2>Total Due: {country.name}</h2>
      <p>
        {country.name}: {country.number}
      </p>
      <p>Due Date: {country.due}</p>
    </main>
  );
}
