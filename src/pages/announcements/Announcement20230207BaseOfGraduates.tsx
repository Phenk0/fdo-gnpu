import ImageGallery from 'react-image-gallery';

function Announcement20230207BaseOfGraduates() {
  const images = [
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2Fannouncement20230207-base-of-graduates.webp?alt=media'
    }
  ];
  return (
    <>
      <h2>Шановні випускники!</h2>
      <p>
        <b>
          Шановні випускники факультету дошкільної освіти Глухівського
          національного педагогічного університету імені Олександра Довженка
          усіх років і форм навчання!
        </b>
      </p>
      <p>
        <b>
          З нагоди 150-річниці університету з метою створення бази даних,
          організації зустрічей, підтримання контактів, обміну досвідом
          пропонуємо створити спілку випускників.
        </b>
      </p>
      <p>
        <b>
          З цією метою просимо надіслати інформацію про себе (Прізвище, ім’я,
          роки навчання, місце роботи, посада, контактні телефони та електронна
          пошта) на адресу:{' '}
          <a href="mailto:kulisinna69@gmail.com">kulisinna69@gmail.com</a>
        </b>
      </p>
      <p>
        <b>
          Будемо вдячні всім, хто відгукнеться на пропозицію! Сподіваємося на
          плідну співпрацю!
        </b>
      </p>
      <ImageGallery items={images} showPlayButton={false} />
    </>
  );
}
export default Announcement20230207BaseOfGraduates;
