import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Article from '../article'
import {
  Segment, Header, Item
} from 'semantic-ui-react'
import './column.css';

export default class Column extends Component {
  render() {
    return (
      <Draggable type="column" direction="horizontal" draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div className="Column"  {...provided.draggableProps} ref={provided.innerRef}>
            <Header as='h2' attached='top' {...provided.dragHandleProps}>
              {this.props.column.title}
            </Header>
            <Segment attached>
              <Item.Group divided>
                {this.props.articles.map((article, index) => <Article key={index} article={article} index={index} />)}
              </Item.Group>
            </Segment>
          </div>
        )}
      </Draggable>
    )
  }
}
