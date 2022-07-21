import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { NavigationBar } from '../components/ui/Navigation/NavigationBar';
import { SearchMovies } from '../components/Search/SearchMovies';
import { Login } from '../components/Login/Login';
import { WishList } from '../components/WatchList/WishList';
import { MovieList } from '../components/Movies/MovieList';
// import your route components too

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavigationBar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/home'} element={<Home />} />
				<Route path={'/search'} element={<SearchMovies />} />
				<Route path={'/list'} element={<WishList />} />
				<Route path={'/movies'} element={<MovieList />} />
				<Route path={'/login'} element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};
