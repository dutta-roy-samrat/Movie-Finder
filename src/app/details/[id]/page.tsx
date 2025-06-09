import { getMovieDetail } from "@/constants/api-endpoints";
import MovieDetail from "@/components/movie-detail";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(getMovieDetail(id), {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  if (data.success === false) {
    throw new Error("Failed to fetch data");
  }
  return {
    title: data.title,
    description: data.overview,
  };
};

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(getMovieDetail(id), {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  if (data.success === false) {
    throw new Error("Failed to fetch data");
  }
  return <MovieDetail data={data} />;
};

export default DetailsPage;
