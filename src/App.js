import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
