import React, { Component } from 'react'
import Article from './article'
import {
  Segment, Header, Item
} from 'semantic-ui-react'

export default class Column extends Component {
  render() {
    return (
      <>
        <Header as='h2' attached='top'>
          {this.props.column.title}
        </Header>
        <Segment attached>
          <Item>
            {this.props.articles.map(article => <Article key={article.id} article={article} /> )}
          </Item>
        </Segment>
      </>
    )
  }
}
