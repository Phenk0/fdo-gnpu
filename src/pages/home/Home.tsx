import announcementsList from '../../data/announcements-list.json';
import { AnnouncementsContainer } from './Home.styles.tsx';
import { lazy } from 'react';
import LazySuspense from '../../ui/LazySuspense.tsx';

const AnnouncementShort = lazy(
  () => import('../../features/announcements/AnnouncementShort.tsx')
);
const AboutFaculty = lazy(() => import('../about/AboutFaculty.tsx'));
function Home() {
  const thirtyDaysAgo = new Date().getTime() - 2592000000;
  const newsList = announcementsList.filter(({ type }) =>
    type.includes('news')
  );
  const lastMonthNewsList = newsList.filter(
    ({ date }) => new Date(date).getTime() > thirtyDaysAgo
  );
  const last5NewsList = newsList.slice(0, 5);
  const newToPublishList =
    lastMonthNewsList.length >= 5 ? lastMonthNewsList : last5NewsList;

  return (
    <>
      <h2 style={{ marginTop: '1rem' }}>ОСТАННІ НОВИНИ</h2>
      <AnnouncementsContainer>
        {newToPublishList.map((announcement) => (
          <LazySuspense key={announcement.id}>
            <AnnouncementShort announcement={announcement} />
          </LazySuspense>
        ))}
      </AnnouncementsContainer>
      <LazySuspense>
        <AboutFaculty />
      </LazySuspense>
    </>
  );
}

export default Home;
