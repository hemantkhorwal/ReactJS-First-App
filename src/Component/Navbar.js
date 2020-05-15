import React, { Component } from 'react'
import './navbar.css'
import { Link, BrowserRouter } from 'react-router-dom'

class Navbar extends Component {

    state = {
        nav_bar_class : '',
    }

    toggleNavbar = () => {
        if ( this.state.nav_bar_class === '') {
            this.setState({
                nav_bar_class : 'show',

            })
        } else{
            this.setState({
                nav_bar_class : '',
            })
        }
    }
    render () {
        let nav_bar_class  = `topnav-right ${this.state.nav_bar_class}`
        console.log( nav_bar_class)
        return (
            <div class="topnav">
                <p className="brand-logo">Brand Logo</p>
                <div class={nav_bar_class}>
                <BrowserRouter>
                    <Link to="#1"><span>Item 1</span></Link>
                    <Link to="#2"><span>Item 2</span></Link>
                    <Link to="#3"><span>Item 3</span></Link>
                </BrowserRouter>
                </div>
                <p id="nav-toggle" onClick={ this.toggleNavbar}>&#9776;</p>
            </div> 
        )
    }
}

export default Navbar
