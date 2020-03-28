import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../components/column'

import initialData from '../data/index'

export default class Main extends Component {
  state = initialData;

  onDragEnd = result => {
    // TODO: reoder our column
  }

  render() {
    return this.state.columnOrder.map((columnId, index) => {
      const column = this.state.columns[columnId];
      const articles = column.articleIds.map(articleId => this.state.articles[articleId]);

      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {() => (
              <Column
                key={column.id}
                column={column}
                articles={articles}
                index={index}
              />
            )}
          </Droppable>
        </DragDropContext>
      );
    });
  }
}
