import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todos';

import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.addToList(this.state.value);
  }

  render() {
    let btnStyle = {
      float:"right"
    };
    let input = {
      width: 400,
      textAlign: 'center'
    }
    let row = {
      margin: '0px auto',
      width: 400
    }
    return (
    <div className="App">
    <Header />
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row" style={row}>
            <div className="input-field col s12" style={input}>
              <input id="textarea1" className="materialize-textarea" onChange={this.handleChange} value={this.state.value} placeholder="New To Do"/>
              <button className="btn green" style={btnStyle}>To Do</button>
            </div>
          </div>
        </form>
      </div>
      <TodoList />
      <Footer />
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App);
