import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Login } from './screens/login';
import { Routing } from './routes/routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
        <h1>Welcome to the Ecommerce Website</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
