import MovieList from "@/components/movie-list";
import { getTrendingMovies } from "@/constants/api-endpoints";

const Home = async () => {
  const res = await fetch(getTrendingMovies({ page: 1 }), {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.success === false) {
    throw new Error("Failed to fetch data");
  }
  return <MovieList data={data} />;
};

export default Home;
