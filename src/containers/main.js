import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../components/column'
import {
  Grid
} from 'semantic-ui-react'

import initialData from '../data/index'

export default class Main extends Component {
  state = initialData;

  onDragEnd = result => {
    // TODO: reoder our column
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Grid.Column>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const articles = column.articleIds.map(articleId => this.state.articles[articleId]);

                return(
                  <Column
                    {...provided.droppableProps}
                    innerRef={provided.innerRef}
                    key={column.id}
                    column={column}
                    articles={articles}
                    index={index}
                  />)
              })}
              {provided.placeholder}
            </Grid.Column>
          )}
        </Droppable>
      </DragDropContext>
    );
  };
}
