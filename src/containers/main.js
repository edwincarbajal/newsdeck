import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../components/column'
import {
  Grid
} from 'semantic-ui-react'
import initialData from '../data/index'

const axios = require('axios');
export default class Main extends Component {
  state = initialData;

  componentDidMount() {
    axios.get(`http://150.136.114.158:8080/api/news/results`, {
      topic: "trump",
      pageNumber: 1,
      paginationLength: 10
    })
    .then((response) => {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if(type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      }
      this.setState(newState);
      return;
    }
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
                <div style={{ display: '-webkit-inline-box' }}>
                  {this.state.columnOrder.map((columnId, index) => {
                    console.log(columnId)
                    const column = this.state.columns[columnId];
                    const articles = column.articleIds.map(articleId => this.state.articles[articleId]);
                    return(
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          key={index}
                          style={{ width: 400 }}
                        >
                            <Column
                              column={column}
                              articles={articles}
                              index={index}
                            />
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
