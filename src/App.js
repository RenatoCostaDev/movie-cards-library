import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data'
import './App.scss'

function App() {
  return (
  <div className="page">
    <Header />
    <MovieList movies={movies}/>
  </div>  
  );
}

export default App;
