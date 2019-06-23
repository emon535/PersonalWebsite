import React,{Component} from 'react'
import {Navbar, NavbarBrand, NavItem, NavLink,Nav} from 'reactstrap'
import logo from './../images/phoyo_circle.png';


class TopBar extends Component {

    render (){
        return (
            <React.Fragment>
                <Nav pills  color="light" light expand="md">
                <Navbar >
                <NavbarBrand href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                    FAE
                  </NavbarBrand>
                    <NavItem>
                    <NavLink>Link</NavLink>
                    </NavItem>
                  <NavItem>
                  <NavLink>Works</NavLink>
                  </NavItem>
                </Navbar>
                </Nav>
              
            </React.Fragment>
        )
    }
}

export default TopBar;
