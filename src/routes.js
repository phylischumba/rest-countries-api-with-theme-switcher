import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Country from './pages/Country';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/countries" element={<HomePage />} />
        <Route path="/countries/:countryid" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
