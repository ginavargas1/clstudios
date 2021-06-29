import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Crystal Lakes Studio</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
