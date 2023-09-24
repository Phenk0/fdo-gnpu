import ImageGallery from 'react-image-gallery';

function Ann20230214MasterGraduate() {
  const images = [
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-1.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-1s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-2.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-2s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-3.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-3s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-4.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-4s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-5.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-5s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-6.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-14-master-graduate%2Fann-20230214-master-graduate-6s.webp?alt=media'
    }
  ];
  return (
    <>
      <h2>ВИПУСК МАГІСТРІВ ВІДБУВСЯ! МИ НЕЗЛАМНІ, БО ЄДИНІ!</h2>
      <p>
        10 лютого 2023 року відбулося вручення дипломів магістра випускникам
        факультету дошкільної освіти з спеціальностей 012 Дошкільна освіта та
        014 Середня освіта (Фізична культура) Глухівського НПУ ім.О.Довженка.
      </p>

      <p>
        Всупереч військовій агресії, відключенням світла, обстрілам і пандемії
        вони здолали шлях до омріяного диплому. Війна змусила цінувати кожну
        мить, оберігати тих, хто поряд, прагнути і здобувати перемогу. Ми
        впевнені, що наші випускники гордо нестимуть звання «довженківець»,
        долаючи перепони на своєму шляху. Бажаємо вам бути сильними, мужніми,
        творчими і професійними! Спрямовуйте свої зусилля на відновлення
        України. Сили Вашім крилам!
      </p>
      <ImageGallery items={images} />
    </>
  );
}
export default Ann20230214MasterGraduate;
