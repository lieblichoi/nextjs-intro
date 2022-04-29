export default function Home() {
  return (
    <div>
      {/* style jsx로 작성된 css 요소는 코드가 작성된 컴포넌트 내부에서만 작동한다.
          NavBar 안에서 선언된 className인 'active'를 여기 index 컴포넌트에서 사용하더라도
          NavBar 안에서 active에 적용된 css 코드가 적용되지 않는 이유이다.
      */}
      <h1 className="active">Hello</h1>
      <style jsx>{`
      a {
        color: white;
      }
      `}</style>
    </div>
  );
}
