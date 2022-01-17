import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Country from './pages/Country';
import Navbar from './components/Navbar';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:countryid" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
