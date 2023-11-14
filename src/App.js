import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import MoviePage from './pages/moviePage/moviePage'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/MoviePage" element={<MoviePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
