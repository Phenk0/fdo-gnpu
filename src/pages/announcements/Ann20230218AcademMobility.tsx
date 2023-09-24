import ImageGallery from 'react-image-gallery';
import { AnnouncementWithFloatImageGallery } from './DifferentAnnosElements.styles.tsx';

function Ann20230218AcademMobility() {
  return (
    <AnnouncementWithFloatImageGallery>
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-18-academ-mobility%2F2023-02-18-academ-mobility-1.webp?alt=media'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-18-academ-mobility%2F2023-02-18-academ-mobility-2.webp?alt=media'
          }
        ]}
        showPlayButton={false}
      />
      <p>
        Відповідно до двостороннього Договору про співпрацю з реалізації програм
        внутрішньої академічної мобільності учасниками освітнього процесу,
        укладеного між Глухівським національним педагогічним університетом імені
        Олександра Довженка і Національним університетом «Чернігівський
        колегіум» імені Т.Г.Шевченка, з <time>16 лютого</time> розпочалася
        реалізація програми внутрішньої академічної мобільності здобувачів вищої
        освіти – студента факультету дошкільної освіти, 3 курсу Коноплі Арсена
        Ігоровича, та студентки факультету дошкільної освіти, 3 курсу Трясій
        Віталіни Андріївни які навчаються за освітньо-професійною програмою
        Дошкільна освіта та мова і література (англійська) зі спеціальності 012
        Дошкільна освіта.
      </p>
      <p>
        Це чудова можливість опанувати цікавими навчальними курсами одночасно у
        двох закладах вищої освіти.
      </p>
    </AnnouncementWithFloatImageGallery>
  );
}
export default Ann20230218AcademMobility;
