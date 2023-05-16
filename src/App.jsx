import './App.css';
import React from 'react';
import{ Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CountriesList from './pages/CountriesList';
import Country from "./pages/Country";
import { useTheme } from '@mui/material';

function App() {
  const theme = useTheme();

  return (
    <div className="App" style={{ fontFamily: theme.typography.fontFamily }}>
      <NavBar />
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/countries" element={<CountriesList />}/>
        <Route path="/countries/:id" element={<Country />}/>
      </Routes>
    </div>
  );
}

export default App;
