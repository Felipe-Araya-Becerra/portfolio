import Link from "next/link";
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light " >
        <section className="container  border-bottom border-bottom-dark mb-3" >
          <ul className="navbar-nav mr-auto  " >
            <li className="nav-item ">
              <Link href="/" className="nav-link ">Home</Link>
            </li>
            {/* <li className="nav-item ">
              <Link href="/About"  className="nav-link ">About</Link>
            </li>
            <li className="nav-item ">
              <Link href="/Proyects" className="nav-link ">Proyects</Link>
            </li> */}
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
