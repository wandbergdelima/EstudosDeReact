import './App.css';
import React, { Component } from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Formulario from './formulario/Formulario.jsx';
import imagens from './assets/imagens.jsx';

function App() {
  return (
    <div>
      <Header />

      <Formulario />

      <Footer />
      <div>
        <img src={`<imagens />`} alt="lobo" />
      </div>
    </div>
  );
};

export default App;
// export default App;


// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

