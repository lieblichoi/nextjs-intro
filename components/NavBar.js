import Link from "next/link";
import { useRouter } from "next/router";
// module.css import
// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          className={router.pathname === '/' ? 'active' : ''}
        // module.css 적용법 - 1
          // className={`${styles.link} ${
          //   router.pathname === "/" ? styles.active : ""
          // }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={router.pathname === '/about' ? 'active' : ''}
        // module.css 적용법 - 2
          // className={[
          //   styles.link,
          //   router.pathname === "/about" ? styles.active : "",
          // ].join(" ")}
        >
          About
        </a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
