import React, { Component } from 'react'
import Tag from '../tags/Tag'
import './Recommendation.css'

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["food", "corona", "music", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things"]
        }
    }

    renderTags = () => {
        return this.state.items.map((tagName, i) => <Tag handleChoosingTopic={this.props.handleChoosingTopic} key={i} tagName={tagName}></Tag>);
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
