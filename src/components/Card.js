import styled from 'styled-components';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 12px;
  margin: 48px auto 0;
  width: 200px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: left;
`;
export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  font-family: 'Nunito Sans', sans-serif;
`;
export const ImageFlag = styled.img`
  width: 100%;
  height: 100px;
`;
export const CountryInfo = styled.div`
  padding: 0 20px;
`;
export const CountryName = styled.p`
  font-weight: 800;
  font-size: 18px;
`;
export const CountryPopulation = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
