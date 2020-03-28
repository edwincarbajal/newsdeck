import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../components/column'

import initialData from '../data/index'

export default class Main extends Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const articles = column.articleIds.map(articleId => this.state.articles[articleId]);

      return <Column key={column.id} column={column} articles={articles}/>;
    });
  }
}
