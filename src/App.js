import {BrowserRouter, Routes , Route} from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
