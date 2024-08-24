import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Head from './Head'; 

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/portfolio' element={<Head/>} />
      </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
