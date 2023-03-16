import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Routing } from './routes/public/routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing/>
        <h1>Welcome to the Ecommerce Website</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
