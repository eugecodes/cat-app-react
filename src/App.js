//import logo from './logo.svg';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext'
import Main from './Main'
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Main />
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
