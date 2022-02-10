import Main from "./components/Main";
import {Header} from "./components/Header";
import './App.css';
import HomePage from "./pages/HomePage";
import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom';
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";


function App() {

    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />}/>
                    <Route path="/country/:name" element={<Details/>}/>
                    <Route path="*" element={<HomePage countries={countries} setCountries={setCountries} />}/>
                </Routes>
            </Main>

        </>
    );
}

export default App;
