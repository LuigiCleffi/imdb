import Card from '@/components/Card';
import React from 'react'

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
}

interface ResultsProps {
  results: Movie[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => {
        return (
          <Card key={result.id} result={result} />
        )
      })}
    </div>
  )
}
export { Results }