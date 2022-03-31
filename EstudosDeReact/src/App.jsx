import './App.css';
import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Formulario from './Formulario.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Formulario />

        <Footer />

      </div>
    );
  };
}

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

