import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';
import { FaCartArrowDown } from 'react-icons/fa';
import { throws } from 'assert';

export default class NavBar extends Component {
    state = {
        NavBarOpen: false,
        css:'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path:'/',
                text:'home'
            },{
                id: 2,
                path:'/about',
                text:'about'
            }
        ]
    };
    navBarHandler = () => {
     this.state.NavBarOpen?this.setState({NavBarOpen:false, 
        css:"collapse navbar-collapse"})
        : this.setState({
            NavBarOpen: true,
            css: "collapse navbar-collapse show"
        });      
    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm 
            bg-light navbar-light">

                <Link to="/" className="navbar-brand">
                    <img src={logo} alt = "logo" />
                </Link>

                <button className="navbar-toggler" 
                type="button" onClick={this.navBarHandler} >
                <span className = "navbar-toggler-icon" />    
                </button>
            <div className={this.state.css}>
                <ul className = "navbar-nav mx-auto">
                    {
                        this.state.links.map(link => {
                            return (
                                <li key={link.id} className ="nav-item">
                                <Link to={link.path} className="nav-link 
                                text-capitalize">
                                    {link.text}
                                </Link>   
                            </li>
                            )
                        })
                    }
                    <li className = "nav-item ml-sm-5">
                        <FaCartArrowDown className="cart-icon snipcart-checkout" />
                    </li>
                </ul>    
            </div>
        </nav>
        );
    }
}