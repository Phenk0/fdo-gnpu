import Announcement from '../../features/announcements/AnnouncementOld.tsx';
import ImageGallery from 'react-image-gallery';

const Extracurricular = () => (
  <>
    <h2>ПОЗАНАВЧАЛЬНА РОБОТА</h2>
    <Announcement
      title="Життя в університеті триває!! Якщо немає снігу, то є лід! Вперед на ковзанах!"
      text="Студенти факультету дошкільної освіти  удосконалюють навички катання на ковзанах!"
      component={
        <ImageGallery
          items={[
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Fextracurricular%2Fice_skates.webp?alt=media'
            }
          ]}
          showPlayButton={false}
        />
      }
      date="03 лютого 2023 року"
    />
    <Announcement
      title=""
      pdfUrl="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Flocal-government%2Flocal-government-plan.pdf?alt=media"
      date="29 січня 2022 року"
    />
  </>
);

export default Extracurricular;
