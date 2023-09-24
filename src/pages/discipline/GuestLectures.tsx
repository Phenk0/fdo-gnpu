import ImageGallery from 'react-image-gallery';
import konovalchuk2022 from '../../data/guest-lecture-images.json';
import announcementList from '../../data/announcements-list.json';
import AnnouncementShort from '../../features/announcements/AnnouncementShort.tsx';
function GuestLectures() {
  const lavrinenkoGuestLecture2023 = [
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-1.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-1s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-2.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-2s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-3.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fguest-lectures%2Fguest-lecture-20230214-3s.webp?alt=media'
    }
  ];
  const guestLectureList = announcementList.filter(({ type }) =>
    type.includes('guest-lecture')
  );
  return (
    <>
      <h2>ГОСТЬОВІ ЛЕКЦІЇ</h2>
      {guestLectureList.map((guestLecture) => (
        <AnnouncementShort announcement={guestLecture} key={guestLecture.id} />
      ))}
      <h2>
        Гостьова лекція
        <br />
        Лавриненко Юлії Володимирівни
      </h2>
      <p>
        <b>10 лютого 2023 року</b> в режимі онлайн в Глухівському НПУ
        ім.О.Довженка відбулася гостьова лекція для здобувачів вищої освіти
        спеціальності 012 Дошкільна освіта ОС «Бакалавр», яку прочитала
        вихователь-методист Глухівського дошкільного навчального закладу
        (ясла-садок) «Ромашка» Лавриненко Юлія Володимирівна. Зміст лекції
        охоплював важливі проблеми сучасної дошкільної освіти, а саме
        використання дистанційного навчання в освітньому процесі. Значну увагу
        Юлія Володимирівна приділила висвітленню досвіду реалізації
        дистанційного навчання в Глухівському дошкільному навчальному закладі
        (ясла-садку) «Ромашка».
      </p>
      <ImageGallery items={lavrinenkoGuestLecture2023} />
      <hr />
      <h2>
        Гостьова лекція
        <br />
        Коновальчука Івана Івановича
      </h2>
      <p>
        5 грудня 2022 року для здобувачів вищої освіти спеціальності 012
        Дошкільна освіта (ОС «Бакалавр» і «Магістр»){' '}
        <b>Коновальчук Іван Іванович</b>, доктор педагогічних наук, доцент,
        завідувач кафедри дошкільної освіти та педагогічних інновацій
        Житомирського державного університету імені Івана Франка провів гостьову
        лекцію в онлайн форматі на тему:{' '}
        <b>
          «Досвід реалізації україно-італійських проєктів з інклюзивної освіти в
          Житомирському державному університеті імені Івана Франка»
        </b>
        . Лекція висвітлювала багаторічний досвід співпраці кафедри дошкільної
        освіти та педагогічних інновацій ЖДУ ім. І. Франка з італійськими
        колегами, які ґрунтовно вивчають проблеми навчання здобувачів з
        особливими освітніми потребами. Заняття було пізнавальним, цікавим і
        динамічним. Інтерес до теми лекції викликав низку запитань до
        І.І. Коновальчука.
      </p>
      <ImageGallery items={konovalchuk2022} />
    </>
  );
}
export default GuestLectures;
