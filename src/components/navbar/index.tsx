import Link from "next/link";

import MovieFilterProvider from "@/context/movie-filter";
import NavbarRightSection from "@/components/navbar/right-section";
import FilterSection from "@/components/navbar/filter/section";

import styles from "./main.module.css";

const Navbar = () => {
  return (
    <MovieFilterProvider>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.navLogoLink}>
            MovieFinder
          </Link>
          <NavbarRightSection/>
        </div>
        <FilterSection />
      </div>
    </MovieFilterProvider>
  );
};

export default Navbar;
