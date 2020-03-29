import React, { Component } from 'react'
import './Tag.css'

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = { chosen: false, hover: false };
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    toggleChosen = () => {
        this.props.handleChoosingTopic({ chosen: !this.state.chosen, tagName: this.props.tagName })
        this.setState({ chosen: !this.state.chosen })
    }


    render() {
        var linkStyle;
        if (this.state.hover) {
            linkStyle = { backgroundColor: 'rgba(0, 0, 0, 0.15)', cursor: 'pointer' }
        } else {
            linkStyle = { backgroundColor: 'rgba(0, 0, 0, 0.05)' }
        }

        if (this.state.chosen) {
            linkStyle = { backgroundColor: 'rgba(12, 242, 143, .2)', cursor: 'pointer' }
        }

        return (
            <div style={linkStyle} onClick={this.toggleChosen} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="TagContainer">
                <div className="TagLead">
                    <svg height="30" width="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="rgb(30, 27, 29)" />
                        <path d="M10.78 21h1.73l.73-3.2h2.24l-.74 3.2h1.76l.72-3.2h3.3v-1.6H17.6l.54-2.4H21v-1.6h-2.5l.72-3.2h-1.73l-.73 3.2h-2.24l.74-3.2H13.5l-.73 3.2H9.5v1.6h2.93l-.56 2.4H9v1.6h2.52l-.74 3.2zm2.83-4.8l.54-2.4h2.24l-.54 2.4H13.6z" fill="#fff"></path>
                    </svg>
                </div>
                {this.props.tagName}
            </div>
        )
    }
}
