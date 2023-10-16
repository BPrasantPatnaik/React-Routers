import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Footer from '../components/Footer'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import User from '../components/User';
import Github from '../components/Github';

function Template() {
    return (
        <>
            <Router>
                <Fragment>
                    <Navbar />
                    <Routes path="/"> 
                        <Route path="" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="user/:userid" element={<User />} />
                        <Route path="Github/:username" element={<Github />} />
                    </Routes>
                    <Footer />
                </Fragment>

            </Router>
        </>
    )
}

export default Template