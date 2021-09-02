import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
// import logo from '../assets/logo.png'
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';


export const Header = () => {
    const[anchorEL, setAnchorEL] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEL(e.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEL(null);
    }
    return (
        
        <div>
         
            <header className="header">
                <div>
                    <img src="https://s3.amazonaws.com/designmantic-logos/logos/2021/Sep/medium-7490-612f1ab76b900.png" alt="" />
                    <Button 
                        variant="contained" 
                        size='medium' 
                        color="primary" 
                        className="links"
                       
                        ><Link className="links-text" to='/home'>Home</Link>
                    </Button>
                    
                </div>

                <nav className='navbar'>
                    <ul>

                    <Button 
                        variant="contained" 
                        size='medium' 
                        color="primary" 
                        className="links" 
                        ><Link className="links-text" to='/services'>BidSection</Link>
                        </Button>

                        <Button 
                        variant="contained" 
                        size='medium' 
                        color="primary" 
                        className="links" 
                        aria-controls='menu' 
                        onClick={handleOpenMenu} 
                        type="submit"
                        endIcon={<KeyboardArrowDownSharpIcon />}
                        ><Link className="links-text" to='/login'>Log In</Link>
                        </Button>

                        <Button 
                        variant="contained" 
                        size='medium' 
                        color="primary"
                     
                        className="links" 
                        aria-controls='menu' 
                        type="submit"
                        ><Link className="links-text" to='/signup'>SignUp</Link>
                        </Button>
                    </ul>
                    
                    <Menu 
                        style={{ marginTop:'-300px', 
                            marginLeft:"1270px",
                            
                            }}
                        id='menu' 
                        onClose={handleOpenMenu} 
                        anchorEL={anchorEL} 
                        open={Boolean(anchorEL)} 
                    >
                    <MenuItem 
                        onClick={handleMenuClose}
                        ><Link className="link1" to='/user'>User</Link>
                    </MenuItem>
                    <MenuItem 
                        onClick={handleMenuClose}
                        ><Link className="link1" to='/builder'>Builder</Link>
                    </MenuItem>
                </Menu>
                </nav>
            </header>
            

        </div>
  
    )
}
