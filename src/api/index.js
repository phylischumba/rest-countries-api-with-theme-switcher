import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = (queryName, url) => {
  const fetched = useQuery(queryName, async () => {
    const { data } = await axios(url);
    return data;
  });
  return fetched;
};
