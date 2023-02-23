import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Categories from '../pages/Categories/Categories';
import Profile from '../pages/Profile/Profile';
import Quizz from '../pages/Quizz/Quizz';
import Results from '../pages/Results/Results';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/quizz' element={<Quizz />} />
            <Route path='/results' element={<Results />} />
        </Routes>
    );
};

export default Router;