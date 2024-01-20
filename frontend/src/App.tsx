import { Home } from './pages/home'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import { MovieDetails } from './pages/movie-details';
import { PageNotFound } from './pages/page-not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
