/* eslint-disable react/prop-types */
import styled from 'styled-components';

const NotfoundPage = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const NotFound = () => {
  return (
    <NotfoundPage>
      <p>No data found</p>
    </NotfoundPage>
  );
};
export const ErrorFound = ({ error }) => {
  return (
    <NotfoundPage>
      <p>{error?.message ? error?.message : 'Network error found'}</p>
    </NotfoundPage>
  );
};
