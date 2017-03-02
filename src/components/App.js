import React from 'react';

// import '../styles/App.css';

const App = (props) => (
  <div>
    <h1>Menu NavBar</h1>
    <h2>Layout</h2>
    <div>
      {props.children}
    </div>
  </div>
)

export default App;
