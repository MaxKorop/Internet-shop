import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../Routes';

const AppRouter = () => {
    const isAuth = true;
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path}  Component={Component} exact />
            })}
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path}  Component={Component} exact />
            })}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
}

export default AppRouter;
