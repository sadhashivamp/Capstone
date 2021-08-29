import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { User } from './components/User';
import { Builder } from './components/Builder';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import './App.css'

import { ShowCase } from './components/ShowCase';

const App = () => {
    return (
        <div>
            
                <Router>
                
                        <Header />
                        
                    <Route exact path='/home'>
                        <ShowCase />
                    </Route>    
                    <Route exact path='/'>
                        <Home />
                    </Route>
                  
                    <Route path='/user'>
                        <User />
                    </Route>

                    <Route path='/builder'>
                        <Builder />
                    </Route>

                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    
                       
                    
        
                </Router>
            
                
        </div>
    )
}
export default App