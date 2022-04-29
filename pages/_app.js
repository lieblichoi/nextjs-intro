import NavBar from "../components/NavBar";
// NextJS로 앱을 만들 떄는 globals.css 파일을 import 할 수 없지만, 
// _app.js 즉, Custom <App> 에서는 globals.css 파일의 import가 가능하다.
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      {/* Global Styles */}
      <style jsx global>{`
      a {
        color: white;
      }
      `}</style>
    </>
  );
}
