/** @type {import('next').NextConfig} */

const API_KEYS = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  // redirect 는 말 그대로 원래 URL로 접속하면 다른 URL로 URL 자체가 바뀐다.
  // 유저가 다른 페이지로 이동되었다는 것을 인지 가능
  async redirects() {
    return [
      // 일반적인 redirect
      // source로 접속하면 destination으로 redirect
      // {
      //   source: '/form', 
      //   destination: '/link', 
      //   permanent: false 
      // }
      
      // :id를 가지는 링크도 redirect 가능
      // {
      //   source: '/old-blog/:path', 
      //   destination: '/new-blog/:path', 
      //   permanent: false 
      // }

      // :id를 가지는 링크도 redirect 가능
      // * 을 붙이면 뒤에 오는 모든 주소를 catch 가능
      // {
      //   source: '/old-blog/:path*', 
      //   destination: '/new-blog/:path*', 
      //   permanent: false 
      // }
    ];
  },
  // rewrites 는 다른 페이지로 이동시키기는 하지만 redirect와 다르게 URL이 바뀌지 않는다.
  // 유저가 처음 접속한 페이지와 다른 페이지로 이동되었다는 사실 인지 불가   
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}`
      }
    ]
  }
};

module.exports = nextConfig;
