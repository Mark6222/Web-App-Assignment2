import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import ActorPage from "./pages/actorPage";
import ActorsPage from "./pages/actorsPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TvShowsPage from "./pages/tvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import LoginPage from "./pages/loginPage";
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";
import MoviesContextProvider from "./contexts/moviesContext";
import SignUpPage from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

        <SiteHeader />
        <AuthContextProvider>
          <MoviesContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
                <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
                <Route path="/tvShow/tvShows" element={<TvShowsPage />} />
                <Route path="/movies/actors" element={<ActorsPage />} />
                <Route path="/actors/:name" element={<ActorPage />} />
                <Route path="/tvShow/:id" element={<TvShowDetailsPage />} />
                <Route path="/movies/popular" element={<PopularMoviesPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/signup" element={ <SignUpPage /> } />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);