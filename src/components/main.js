import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './column/column'
import {
  Grid
} from 'semantic-ui-react'
import initialData from '../data/index'

export default class Main extends Component {
  state = initialData;

  // onDragEnd = result => {
  //   const { destination, source, draggableId, type } = result;

  //   if (!destination) {
  //     return;
  //   }

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   if (type === "column") {
  //     const newColumnOrder = Array.from(this.state.columnOrder);
  //     newColumnOrder.splice(source.index, 1);
  //     newColumnOrder.splice(destination.index, 0, draggableId);

  //     const newState = {
  //       ...this.state,
  //       columnOrder: newColumnOrder,
  //     }
  //     this.setState(newState);
  //     return;
  //   }
  // }

  render() {
    return (
      <div></div>
    )
    // <DragDropContext onDragEnd={this.onDragEnd}>
    //   <Droppable
    //     droppableId="root"
    //     direction="horizontal"
    //     type="column"
    //   >
    //     {(provided) => (
    //       <Grid.Row as={"div"}>
    //         {this.state.columnOrder.map((columnId, index) => {
    //           const column = this.state.columns[columnId];
    //           const articles = column.articleIds.map(articleId => this.state.articles[articleId]);
    //           return (
    //             <Grid.Column key={column.id}>
    //               <div
    //                 {...provided.droppableProps}
    //                 ref={provided.innerRef}
    //               >
    //                 <Column
    //                   column={column}
    //                   articles={articles}
    //                   index={index}
    //                 />
    //               </div>
    //             </Grid.Column>
    //           )
    //         })}
    //         {provided.placeholder}
    //       </Grid.Row>
    //     )}
    //   </Droppable>
    // </DragDropContext>
    // );
  };
}
