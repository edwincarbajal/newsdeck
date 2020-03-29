import React, { Component } from 'react'
import Tag from '../tags/Tag'
import { Container } from 'semantic-ui-react'
import './Recommendation.css'

export default class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["food", "corona", "music", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things", "food", "corona", "music", "Trump", "Crytocurrencies and stuff", "new things"]
        }
    }

    onHover

    renderTags = () => {
        return this.state.items.map(tagName => <Tag tagName={tagName}></Tag>);
    }

    render() {
        return (
            <div className="Container">
                {this.renderTags()}
            </div>
        )
    }
}
