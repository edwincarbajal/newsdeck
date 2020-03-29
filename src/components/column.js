import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Article from './article'
import {
  Segment, Header, Item
} from 'semantic-ui-react'

export default class Column extends Component {
  render() {
    return (
      <Draggable type="column" draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <Header as='h2' attached='top'
              {...provided.dragHandleProps}
              style={{ minHeight: 84 }}
            >
              {this.props.column.title}
            </Header>
            <Segment attached style={{ overflowY: 'scroll', height: '100%' }}>
              <div style={{ display: 'block' }}>
                <Item.Group divided>
                  {this.props.articles.map((article, index) => <Article key={index} article={article} index={index} /> )}
                </Item.Group>
              </div>
            </Segment>
          </div>
        )}
      </Draggable>
    )
  }
}
