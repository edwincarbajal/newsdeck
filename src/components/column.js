import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Article from './article'
import {
  Segment, Header, Item
} from 'semantic-ui-react'

export default class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div>
            <Header as='h2' attached='top'>
              {this.props.column.title}
            </Header>
            <Segment attached>
              <Item.Group divided>
                {this.props.articles.map((article, id) => <Article key={id} article={article} /> )}
              </Item.Group>
            </Segment>
          </div>
        )}
      </Draggable>
    )
  }
}
