import { useParams } from 'react-router-dom';
import { getCountry } from '../getCountry';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function Country() {
  const { isSuccess, data } = useQuery('countries', async () => {
    const { data } = await axios('https://restcountries.com/v2/all');
    return data;
  });
  let params = useParams();
  let country = isSuccess && getCountry(params.countryid, data);
  console.log(params.countryid);

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {country.name}</h2>
      <p>
        {country.name}: {country.number}
      </p>
      <p>Due Date: {country.due}</p>
    </main>
  );
}
