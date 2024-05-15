"use client";
import styles from "../styles/NavBar.module.css";

interface NavBarProps {
  currentPage: string;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  const navLink = () => {
    if (currentPage == "About") {
      return <a href="/">Home</a>;
    } else {
      return <a href="/about">About</a>;
    }
  };

  return (
    <div>
      <h1 className={styles.title}>SNAP!</h1>
      <div>
        <nav className={styles.navLink} data-testid="page-link">
          {navLink()}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
