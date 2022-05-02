// NextJS로 앱을 만들 때, globals.css 파일은 import 할 수 없다.
// Custom <App> 에서만 globals.css 파일의 import가 가능하다.
// 페이지나 컴포넌트 내에 css를 import 하고 싶다면, 반드시 module 이어야한다.
// import "../styles/globals.css";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="About"/>
      <h1>About Us</h1>
    </div>
  );
}
