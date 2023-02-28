import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from "./components/NavBar/NavBar" 



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={NavBar}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
