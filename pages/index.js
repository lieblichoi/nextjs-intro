import Seo from '../components/Seo';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    // 일반적인 사용법
    // router.push(`/movies/${id}`)

    // 원하는 URL만 노출, URL에 담아서 넘겨주는 state는 마스킹
    // router.push(
    //   {
    //     pathname: `/movies/${id}`,
    //     query: {
    //       title,
    //     },
    //   },
    //   // 위의 정보들은 마스킹하고 아래의 URL로만 보여지게 한다.
    //   `/movies/${id}`,
    // );

    // Catch All URL
    router.push(`/movies/${title}/${id}`)
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              // 일반적인 사용법
              // href={`/movies/${movie.id}`}
              
              // Link로도 위의 router.push와 같은 방법으로
              // URL을 통해 state를 넘겨주고 마스킹까지 할 수 있다.
              // href={{
              //   pathname: `/movies/${movie.id}`,
              //   query: {
              //     title: movie.original_title,
              //   },
              // }}
              // as={`/movies/${movie.id}`}

              // Catch All URL
              href={`/movies/${movie.original_title}/${movie.id}`} 
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
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

// SSR을 사용할지 말지는 선택 사항
// 일단 로딩 화면을 보여주고 API가 호출되고나서 화면을 보여줄지
// 로딩 없이 API로부터 받은 정보가 모두 받아지고 난 후에 페이지를 보여줄 것인지
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
