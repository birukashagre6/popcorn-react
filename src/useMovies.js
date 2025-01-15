import { useState, useEffect } from "react";

const Key = "c6c667c8";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${Key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error(
              "Something went wrong while fetching check your internet connection"
            );
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("No movies found");
          }

          setMovies(data.Search);
          setError("");
        } catch (error) {
          if (error.name !== "AbortError") {
            console.log(error.message);
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }

        if (query.length < 3) {
          setError("");
          setMovies([]);
          return;
        }
      }

      /* handleCloseMovie(); */
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
