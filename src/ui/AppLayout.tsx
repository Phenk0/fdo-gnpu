import { lazy, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MenuToggle from '../features/navigation/MenuToggle.tsx';
import Drawer from '../features/navigation/Drawer.tsx';

import ScrollUpBtn from './ScrollUpBtn.tsx';
import AsideContainer from './AsideContainer.tsx';
import AppHeader from './AppHeader.tsx';

import { MainContentContainer, PageContainer } from './AppLayout.styles.tsx';
import Spinner from './Spinner.tsx';

const GlobalFooter = lazy(() => import('./AppFooter.tsx'));

const AppLayout = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenuHandler = () => setMenu(!menu);

  const menuCloseHandler = () => setMenu(false);
  return (
    <>
      <AppHeader />
      <MainContentContainer>
        <PageContainer>
          <Outlet />
        </PageContainer>
        <AsideContainer />
      </MainContentContainer>
      <Suspense fallback={<Spinner />}>
        <GlobalFooter />
      </Suspense>

      <Drawer isOpen={menu} onClose={menuCloseHandler} />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />
      <ScrollUpBtn />
    </>
  );
};

export default AppLayout;
