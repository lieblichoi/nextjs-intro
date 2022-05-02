import Seo from '../components/Seo';
import { useState, useEffect } from "react"

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(()=>{
    (async() => {
      const {results} = await (await fetch(`/api/movies`)).json();
      setMovies(results)
    })();
  }, [])
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
      {/* style jsx로 작성된 css 요소는 코드가 작성된 컴포넌트 내부에서만 작동한다.
          NavBar 안에서 선언된 className인 'active'를 여기 index 컴포넌트에서 사용하더라도
          NavBar 안에서 active에 적용된 css 코드가 적용되지 않는 이유이다.
      */}
      {/* <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style> */}
    </div>
  );
}
