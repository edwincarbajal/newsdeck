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
                <div>
                  {this.state.columnOrder.map((columnId, index) => {
                    const column = this.state.columns[columnId];
                    const articles = column.articleIds.map(articleId => this.state.articles[articleId]);

                    return(
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        key={column.id}
                      >
                        <Grid.Column>
                          <Column
                            column={column}
                            articles={articles}
                            index={index}
                          />
                        </Grid.Column>
                      </div>
            )})}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    );
  };
}
