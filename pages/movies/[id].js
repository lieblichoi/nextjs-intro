import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4>
        {/* 홈페이지에서 카드를 클릭해서 [id].js에 들어올 경우에만
            router.query.title이 표시된다.
            시크릿 모드로 해당 URL을 입력 후 다이렉트로 접속하게 되면 
            링크를 클릭하여 state를 넘겨주는 과정이 없기 때문에 Loading... 문구가 표시된다.
                */}
        {router.query.title || 'Loading...'}
      </h4>
    </div>
  );
}
