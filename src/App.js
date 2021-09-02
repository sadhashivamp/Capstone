import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import BidSection from './components/BidSection';
import { User } from './components/User';
import { Builder } from './components/Builder';
import { SignUp } from './components/SignUp';

import './App.css'

// import { ShowCase } from './components/ShowCase';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import ImageSlider from './components/HomeSlider/ImageSlider';


const App = () => {
    return (
        <div>
            <div>
            
                <Router>
                    <Header />
                        
                    {/* <Route exact path='/home'><ShowCase /></Route>     */}
                    <Route exact path='/home' component={Home} />
                    <Route path='/services'><BidSection /></Route>
                    <Route path='/user'><User /></Route>
                    <Route path='/builder'><Builder /></Route>
                    <Route path='/signup'><SignUp /></Route>
                    <ImageSlider />
                    <Testimonials />
                    <Footer />
                </Router>
            
            </div>
        </div>
    )
}
export default App