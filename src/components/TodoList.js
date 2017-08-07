import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todos';

export class TodoList extends Component {

  render () {
    let ElseStyle = {
      fontFamily:"cursive",
      fontSize:40,
      textAlign: 'center'
    };
    let center = {
      margin: '0px auto',
      textAlign: 'center',
      width: 500
    }
    if(this.props.todos.length>0) {
      const theTodos = this.props.todos.map(todo => {
        console.log('yo',todo.title)
        return (<div className="row" key={todo.id}>
        <div className="col s12">
          <div className="card green darken-1">
            <div className="card-content white-text">
              <span className="card-title">{todo.title}</span>
            </div>
            <div className="card-action">
              <button className="btn btn-danger" onClick={() => this.props.actions.removeFromList(todo)}>Did that</button>
            </div>
          </div>
        </div>
      </div>)
      })
      return (
        <div className="container" style={center}>
            {theTodos}
        </div>
      )
    } else {
      return (
        <div className="container" style={ElseStyle}>
          <h3>List some todos, pussy</h3>
        </div>
      )
    }
  }
}

function mapStateToProps(state, props) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
