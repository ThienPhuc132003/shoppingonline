//CLI: npm install axios --save
import axios from 'axios';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }
  render() {
    return (
      <MyProvider>
      <BrowserRouter>
      <Main>
      <div>
        <h2>Customer page</h2>
        <p>{this.state.message}</p>
      </div>
      </Main>
      </BrowserRouter>
      </MyProvider>
    );
  }
  componentDidMount() {
    axios.get('/hello').then((res) => {
      const result = res.data;
      this.setState({ message: result.message });
    });
  }
}
export default App;