import React from 'react'
interface Movie {
  id: number;
  original_title: string;
}

interface ResultsProps {
  results: Movie[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h1>{result.original_title}</h1>
          </div>
        )
      })}
    </div>
  )
}
export { Results }