import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';

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
                    {/* <Link className="links" to='/'>Home</Link> */}
                    <Button ><Link className="links" to='/'>Home</Link></Button>
                    
                </div>

                <nav className='navbar'>
                    <ul>
                    <Button className="links" aria-controls='menu' onClick={handleOpenMenu} type="submit">Log In</Button>
                        {/* <Link className="links" to='/login'>Login</Link>
                        <Link className="links" to='/signup'>SignUp</Link> */}
                        <Button className="links" type="submit"><Link className="links" to='/signup'>SignUp</Link></Button>
                    </ul>
                    <Menu style={{ marginTop:'-300px', marginLeft:"1350px" }} id='menu' onClose={handleOpenMenu} anchorEL={anchorEL} open={Boolean(anchorEL)} >
                    <MenuItem onClick={handleMenuClose}><Link className="links" to='/user'>User</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}><Link className="links" to='/builder'>Builder</Link></MenuItem>
                </Menu>
                </nav>
            </header>
        </div>
    )
}
