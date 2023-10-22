import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={styles.navHome}>
          <Link className={styles.linkHome} to="/">
            Home
          </Link>
          <Link className={styles.linkMovies} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
