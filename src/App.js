import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Counter from './components/counter'


function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <h1>Counter</h1>
      </AppBar>

      <section>
        <Counter />
      </section>
    </div>
  );
}

export default App;
