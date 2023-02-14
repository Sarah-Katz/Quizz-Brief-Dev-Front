import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Profile from '../pages/Profile/Profile';
import ProfileModif from '../pages/ProfileModif/ProfileModif';
import Quizz from '../pages/Quizz/Quizz';
import Results from '../pages/Results/Results';
import Categories from '../pages/Categories/Categories';

const Routeur = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/categorie' element={<Categories />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profileModif' element={<ProfileModif />} />
                    <Route path='/quizz' element={<Quizz />} />
                    <Route path='/results' element={<Results />} />
                </Routes>
            </Router>
        </>
    );
};

export default Routeur;