import './App.css';
import WallPage from './WallPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/WallPage' element={<WallPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
