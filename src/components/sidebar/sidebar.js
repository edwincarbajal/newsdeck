import React, { Component } from 'react'
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}
