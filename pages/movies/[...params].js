import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({params}) {
  const router = useRouter();
  // catch all URL
  // const [title, id] = router.query.params;
  // 하지만, 위 상태로 시크릿 모드로 해당 URL에 접근하면 오류가 난다.
  // 해당 페이지가 서버에서 pre-render 되기 때문!

  // 아래와 같이 작성해주면 CSR 형식으로 렌더링을 해주기 때문에 오류가 나지 않는다.
  // const [title, id] = router.query.params || [];
  // 그러나 HTML 코드에서 title, id의 어떠한 정보도 찾을 수 없다 => 검색엔진 취약
  // 유저에게 로딩 단계를 보여주지 않고, SEO에 최적화되게 만들고 싶다면 53번째 줄의
  // getServerSideProps를 이용하면 된다. 
  // 55번째 줄의 getServerSideProps 함수를 이용한 코드
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title}/>
      <h4>
        {/* 홈페이지에서 카드를 클릭해서 [id].js에 들어올 경우에만
            router.query.title이 표시된다.
            시크릿 모드로 해당 URL을 입력 후 다이렉트로 접속하게 되면 
            링크를 클릭하여 state를 넘겨주는 과정이 없기 때문에 Loading... 문구가 표시된다.
            {router.query.title || 'Loading...'}
                */}
        {/* catch all URL 
            하지만, 시크릿 모드로 해당 URL에 접근하면 오류가 난다.
            해당 페이지가 서버에서 pre-render 되기 때문!
        */}
        {title}
      </h4>
    </div>
  );
}

// export function getServerSideProps(ctx) {
//   // 터미널에 찍힌 콘솔을 보면,
//   // ...
//   // query: { params: [ 'Uncharted', '335787' ] },
//   // resolvedUrl: '/movies/Uncharted/335787',
//   // params: { params: [ 'Uncharted', '335787' ] },
//   // ...
//   // 위와 같이 NextJS에서 제공하는 server side context를 확인할 수 있다.
//   console.log(ctx);
//   return {
//     props: {

//     },
//   }
// }

export function getServerSideProps({params: {params}}) {
  return {
    props: {
      params
    },
  }
}