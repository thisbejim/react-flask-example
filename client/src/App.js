import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { test } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.test();
  }
  render() {
    const state = this.props.state;
    const dispatch = this.props.dispatch;
    let elements;
    // pass state and dispatch to child component props
    if(this.props.children) {
      elements = React.cloneElement(this.props.children, { state, dispatch })
    }
    return (
      <span>
        {elements}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({ state });

// connect to store
export const AppContainer = connect(
  mapStateToProps,
  {
    test,
  },
)(App);

export const Home = (props) => {
  return (
    <span>
      <h2>Home</h2>
    </span>
  );
}
