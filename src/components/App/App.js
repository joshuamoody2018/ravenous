import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component{
  
  render(){
    return (
      <div class='App'>
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}

export default App;