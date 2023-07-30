import { Results } from "@/infra/components/Results";

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";

  const params = genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"

  const res = await fetch(`https://api.themoviedb.org/3/${params}?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Something went wrong while fetching the data')
  }
  const data = await res.json();

  const results = data.results

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
