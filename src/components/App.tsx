import { Route, Routes } from 'react-router-dom';
import '../styles/index.scss';
import { Link } from 'react-router-dom';
import MainPageLazy from './MainPage/MainPageLazy';
import AboutPageLazy from './AboutPage/AboutPageLazy';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Link to={'/'}>home</Link>
      <Link to={'/about'}>about</Link>
      <button onClick={toggleTheme}>toggle</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
