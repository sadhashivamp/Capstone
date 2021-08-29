import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { User } from './components/User';
// import { SignUp } from './components/SignUp';
import './App.css'
import { Builder } from './components/Builder';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
// import { ShowCase } from './components/ShowCase';

const App = () => {
    return (
        <div>
            
                <Router>
                    
                        <Header />
                        {/* <ShowCase /> */}
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