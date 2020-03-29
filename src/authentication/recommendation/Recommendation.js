import React, { Component } from 'react'
import Tag from '../tags/Tag'
import './Recommendation.css'

class Recommendation extends Component {
    constructor(props) {
        super(props);
    }

    renderTags = () => {
        return this.props.tags.map((tagName, i) => <Tag handleChoosingTopic={this.props.handleChoosingTopic} key={i} tagName={tagName}></Tag>);
    }

    render() {

        return (
            <div className="Container">
                {this.renderTags()}
            </div>
        );
    }
}

export default Recommendation
