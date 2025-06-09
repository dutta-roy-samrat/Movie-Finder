"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import NavSearch from "@/components/navbar/search";
import FilterButton from "@/components/navbar/filter/button";

import styles from "./main.module.css";

const NavbarRightSection = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isFavoritesPage = pathname === "/favorites";

  if (!isHomePage && isFavoritesPage) {
    return null;
  }

  return (
    <div className={styles.rightSectionContainer}>
      {isHomePage && (
        <>
          <div className={styles.searchContainer}>
            <NavSearch />
          </div>
          <div className={styles.filterButtonContainer}>
            <FilterButton />
          </div>
        </>
      )}
      {!isFavoritesPage && (
        <Link href="/favorites" className={styles.favoritesButtonStyles}>
          Favorites
        </Link>
      )}
    </div>
  );
};

export default NavbarRightSection;
