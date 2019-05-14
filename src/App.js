import React from 'react';
import { hot } from 'react-hot-loader';
import {Button} from 'antd';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button type="primary">Primary</Button>
      </header>
    </div>
  );
}

export default hot(module)(App);
