import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Article from './article'
import {
  Segment, Header, Item
} from 'semantic-ui-react'

const Container = ({children}, props) => <div ref={props.innerRef}>{children}</div>;

export default class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.index} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} innerRef={provided.innerRef}>
            <Header as='h2' attached='top' {...provided.dragHandleProps}>
              {this.props.column.title}
            </Header>
            <Segment attached>
              <Item.Group divided>
                {this.props.articles.map((article, index) => <Article key={index} article={article} index={index} /> )}
              </Item.Group>
            </Segment>
          </Container>
        )}
      </Draggable>
    )
  }
}
