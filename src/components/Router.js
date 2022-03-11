import { BrowserRouter, HashRouter as Redirect, Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from 'routes/Auth'
import Home from 'routes/Home'
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation />}
            <Routes>w
                {isLoggedIn ? (
                    <>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                    </>
                ) : (
                    <Route path='/' element={<Auth />} />
                )}
                <Route path='/*' element={<Navigate replace to='/'/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;