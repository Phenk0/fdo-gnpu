import ImageGallery from 'react-image-gallery';

function Announcement20230203ForumArsen() {
  const images = [
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-1.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-1s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-2.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-2s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-3.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F2023-02-03-forum%2Fforum-arsen-3s.webp?alt=media'
    }
  ];
  return (
    <>
      <h2>Форум змінотворців працює!</h2>
      <p>
        28 січня, <b>Арсен КОНОПЛЯ</b> - студент 32-ДО групи факультету
        дошкільної освіти долучився до обласного <b>Форуму змінотворців</b> за
        підтримки журналу
        <b>"Цукр"</b> та <b>ГО "Місто розумних"</b>. Спікерами цього заходу
        були:
      </p>
      <ul>
        <li>
          Шеф-редактор української регіональної суспільної телерадіокомпанії,
          філії Національної суспільної телерадіокомпанії України "Суспільне
          Суми" - <b>Крамченков Андрій Борисович</b>, тема виступу: "Як зробити
          свої проєкти помітними для журналістів?";
        </li>
        <li>
          Керівник Агенції регіонального розвитку Сумської області -{' '}
          <b>Стариков Григорій Миколайович</b>, тема виступу: "Чому молодь -
          ключовий гравець у розвитку регіону?";
        </li>
        <li>
          Виконавча директорка організації "Тепле місто" -{' '}
          <b>Тужанська Росана Іванівна</b>, тема виступу : "Як змінити темп
          життя міста? Досвід платформи ініціатив "Тепле місто" з
          Івано-Франківська".
        </li>
      </ul>
      <p>
        Нетворкінг та обмін досвідом дозволяє зрозуміти, що <b>Змінотворцем</b>
        <i>(Change Maker)</i> може бути кожен, хто докладає зусиль для
        імплементації найдієвіших кейсів розвитку власної громади.
      </p>
      <ImageGallery items={images} />
    </>
  );
}
export default Announcement20230203ForumArsen;
