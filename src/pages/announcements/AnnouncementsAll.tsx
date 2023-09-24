import Announcement from '../../features/announcements/AnnouncementOld.tsx';
import Announcement20230129PostgraduateReport from './Announcement20230129PostgraduateReport.tsx';
// import GuestLectures from "../discipline/guest-lectures/guest-lectures.component";
import Announcement20230203ForumArsen from './Announcement20230203ForumArsen.tsx';
import Announcement20230207BaseOfGraduatesComponent from './Announcement20230207BaseOfGraduates.tsx';
import Announcement20230210Lecture from './Announcement20230210Lecture.tsx';
import Ann20230214MasterGraduate from './Ann20230214MasterGraduate.tsx';

import Ann20230218AcademMobility from './Ann20230218AcademMobility.tsx';
import announcementsList from '../../data/announcements-list.json';
import AnnouncementShort from '../../features/announcements/AnnouncementShort.tsx';
import { AnnouncementsContainer } from '../home/Home.styles.tsx';
import Ann20230315CongratulationsZahorodniaL from './Ann20230315CongratulationsZahorodniaL.tsx';

function Announcements() {
  return (
    <>
      <h2>НОВИНИ ФАКУЛЬТЕТУ</h2>
      <AnnouncementsContainer>
        {announcementsList.map((announcement) => (
          <AnnouncementShort
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </AnnouncementsContainer>
      <Ann20230315CongratulationsZahorodniaL />
      <Announcement
        component={<Ann20230218AcademMobility />}
        title="Реалізуємо угоду про внутрішню академічну мобільність!"
        date="17 лютого 2023 року"
      />
      <Announcement
        component={<Ann20230214MasterGraduate />}
        date="14 лютого 2023 року"
      />
      <Announcement20230210Lecture />
      <Announcement
        component={<Announcement20230207BaseOfGraduatesComponent />}
        date="07 лютого 2023 року"
      />
      <Announcement
        component={<Announcement20230203ForumArsen />}
        date="03 лютого 2023 року"
      />
      <Announcement
        component={<Announcement20230129PostgraduateReport />}
        date={'29 січня 2023 року'}
      />

      <Announcement
        title="Підготовка до складання НМТ-2023"
        description="Дистанційні підготовчі курси"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2Fannouncement-courses-28-01-23.webp?alt=media"
        date="28 січня 2023 року"
        linkTo="/entrants/news"
      />
      <Announcement
        pdfUrl="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2Fannouncement-conference-22-01-23.pdf?alt=media"
        date="22 січня 2023 року"
      />
      {/*<Announcement*/}
      {/*  component={<GuestLectures />}*/}
      {/*  date={"22 січня 2023 року"}*/}
      {/*  linkTo={"/discipline/guest-lectures"}*/}
      {/*/>*/}
      <Announcement
        description="Здорова дитина 2023"
        imageUrl="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2Fannouncement-healthy_child_2023.webp?alt=media"
        date="11 січня 2023 року"
      />
    </>
  );
}
export default Announcements;
