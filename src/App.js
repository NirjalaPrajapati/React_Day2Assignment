// import "./App.css";
// import NumberGuessingGame from "./Guessinggame.jsx";
// // import TodoApp from "./Assignment3.jsx";

// // import ClickCounter from "../src/Assignment1.jsx";
// // import Count from "./Assignment2.jsx";
// // import ArrayList from "./Text.jsx";
// // import ClassParent from './Class.jsx';
// // import Comp from './component.jsx';
// // import DisplayDataComp from './cw.jsx';
// // import Main from './Main.jsx';
// // import Header from './Header.jsx';
// // import Sidenav from './Sidenav.jsx';
// // import Footer from './Footer.jsx';
// // import MainContent from './Maincontent.jsx';
// // import './assignment.css';
// // import UseStateWithObject from "./UseStateWithObject.jsx";
// function App() {
//   return (
//     <div className="App">
//       {/* <Main/> */}
//       {/* <ClassParent/> */}
//       {/* <Comp/> */}
//       {/* <DisplayDataComp/> */}
//       {/* <Header title="Header"/>
//       <div className= "Mid">
//         <Sidenav title="Side Nav"/>
//         <MainContent title="Main Content"/>
//       </div>
//       <Footer title="Footer"/> */}
//       {/* <UseStateWithObject /> */}
//       {/* <ClickCounter title="counter" /> */}
//       {/* <Count/> */}
//       {/* <TodoApp/> */}
//       <NumberGuessingGame/>
//     </div>
//   );
// }
// export default App;
import './App.css';
import BaseComponent from './BaseComponent';
// import NumberGuessingGame from './Guessgame';

function App() {
  return (
    <div className="App">
      {/* <NumberGuessingGame/> */}
      <BaseComponent/>
    </div>
  );
}

export default App;