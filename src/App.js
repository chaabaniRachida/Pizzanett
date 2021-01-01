import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Routes from './config/Routes';


function App() {
  return (
   <div>
        <GlobalStyle />
        <div className='App'>
          <Routes />
        </div>
    </div>
  );
}

export default App;