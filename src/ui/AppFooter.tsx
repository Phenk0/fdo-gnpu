import { Footer } from './AppFooter.styles.tsx';

const AppFooter = () => {
  return (
    <Footer>
      <div>
        <a href={'http://gnpu.edu.ua/'} target="_blank" rel="noreferrer">
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo-gnpu.webp?alt=media'
            }
            alt="gnpu logo"
            title="Перейти до офіційного сайту університету"
          />
        </a>
        <a
          href={'https://www.instagram.com/do_gnpu/'}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo-instagram.webp?alt=media'
            }
            alt="instagram logo"
            title="Перейти до нашої сторінки в Instagram"
          />
        </a>
        <a
          href={'https://www.facebook.com/groups/311879512960732'}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo-facebook.webp?alt=media'
            }
            alt="facebook logo"
            title="Перейти до нашої сторінки у Facebook"
          />
        </a>
        <a
          href={'https://youtube.com/@user-zv4ee7yu3z'}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo-youtube.webp?alt=media'
            }
            alt="youtube logo"
            title="Перейти до нашої сторінки у Youtube"
          />
        </a>
        <a href="http://do.gnpu.edu.ua/" target="_blank" rel="noreferrer">
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo.webp?alt=media'
            }
            alt="fdo logo"
            title="Перейти до старого сайту факультету"
          />
        </a>
      </div>
      <p>
        &copy; Copyright by Preschool Education Faculty at GNPU. 2022-2023.
        &nbsp; Created by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://roman-react-webstudio.netlify.app/"
          title="Go to webstudio website"
        >
          &nbsp;Roman Parkhomenko
        </a>
      </p>
    </Footer>
  );
};
export default AppFooter;
