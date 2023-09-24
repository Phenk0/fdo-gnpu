import { lazy, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter,
  Navigate
} from 'react-router-dom';

// import LazySuspense from './ui/LazySuspense.tsx';

import About from './routes/about.routes.tsx';
// import Home from './pages/home/Home.tsx';
import Discipline from './routes/discipline.routes';
import Entrants from './routes/entrants.routes';
import Student from './routes/student.routes';
import Science from './routes/science.routes';
import Postgraduate from './routes/postgraduate.routes';
import Uncategorized from './routes/uncategorized.routes.tsx';

import AppLayout from './ui/AppLayout.tsx';

import GlobalStyles from './styles/GlobalStyles.ts';
import { pdfjs } from 'react-pdf';
import 'react-image-gallery/styles/css/image-gallery.css';
import DynamicNews from './pages/announcements/DynamicNews.tsx';
import LazySuspense from './ui/LazySuspense.tsx';

const Home = lazy(() => import('./pages/home/Home.tsx'));

const Page404 = lazy(() => import('./ui/Page404.tsx'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={AppLayout}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route
            path="home"
            element={
              <LazySuspense>
                <Home />
              </LazySuspense>
            }
          />
          <Route path="home/:id" Component={DynamicNews} />
          <Route path="about/*" Component={About} />
          <Route path="discipline/*" Component={Discipline} />
          <Route path="science/*" Component={Science} />
          <Route path="student/*" Component={Student} />
          <Route path="postgraduate/*" Component={Postgraduate} />
          <Route path="entrants/*" Component={Entrants} />
          <Route path="etc/*" Component={Uncategorized} />

          <Route
            path="/*"
            element={
              <LazySuspense>
                <Page404 />
              </LazySuspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
