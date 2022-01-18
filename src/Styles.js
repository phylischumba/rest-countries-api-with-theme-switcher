import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${(props) => props.theme.body};
  position: fixed;
  font-weight: 600;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 12px;
  margin: 48px auto 0;
  width: 230px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: left;
  background: ${(props) => props.theme.elements};
`;
export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  font-family: 'Nunito Sans', sans-serif;
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) and (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1100px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Home = styled.section`
  padding: 20px;
  position: relative;
  top: 60px;
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

export const ThemeButton = styled.button`
  background: inherit;
  border: none;
  font-size: 15px;
  position: fixed;
  right: 10px;
  top: 5px;
  color: inherit;
  z-index: 1;
`;
export const BackButton = styled.button`
  background: inherit;
  color: inherit;
  border: none;
  padding: 5px;
  width: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const DetailPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DetailImage = styled.img`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Details = styled.section`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Span = styled.span`
  font-weight: 800;
`;
export const DetailSect = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
`;
export const DetailSectOne = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
export const DetailCont = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 2.5rem;
  flex-direction: column;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.input};
  color: inherit;
  padding: 10px;
  width: 200px;
`;

export const Main = styled('div')`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

export const DropDownContainer = styled('div')``;

export const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: inherit;
  background: inherit;
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 200px;
`;

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${(props) => props.theme.body};
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
`;
