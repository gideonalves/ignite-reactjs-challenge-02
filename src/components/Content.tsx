import { MovieCard } from "../components/MovieCard";
import { Header } from "../components/Header";

import "../styles/content.scss"

interface ContentProps {
  genreTitle: string;
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[];
}

export function Content({ genreTitle, movies }: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <Header title={genreTitle} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}