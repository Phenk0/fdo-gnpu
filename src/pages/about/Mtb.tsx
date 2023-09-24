import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function Mtb() {
  const { width, containerRef } = usePDFContainer();
  return (
    <>
      <h2>Матеріальна база</h2>
      <ReactPlayer
        width="100%"
        height="auto"
        controls
        light={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fmaterial-base-thumbnail.webp?alt=media"
            alt="Thumbnail"
          />
        }
        url="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fmaterial-base.mp4?alt=media"
      />
      <hr />
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-11.jpg?alt=media&token=d2be3549-7781-40cc-8352-9b62eff44163',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-11.jpg?alt=media&token=d2be3549-7781-40cc-8352-9b62eff44163'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-14.jpg?alt=media&token=a93b5fa7-f391-4c40-9206-e02a73642969',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-14.jpg?alt=media&token=a93b5fa7-f391-4c40-9206-e02a73642969'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-17.jpg?alt=media&token=55a5046c-fdfd-45c0-9217-7e90d79606e7',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-17.jpg?alt=media&token=55a5046c-fdfd-45c0-9217-7e90d79606e7'
          }
        ]}
      />
      <hr />
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-18.jpg?alt=media&token=950cdf32-c007-4b12-8e64-a48de05f5ac5',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-18.jpg?alt=media&token=950cdf32-c007-4b12-8e64-a48de05f5ac5'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-20.jpg?alt=media&token=d26d5c8a-ee49-48b5-b7b3-12bedc6cdf1a',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-20.jpg?alt=media&token=d26d5c8a-ee49-48b5-b7b3-12bedc6cdf1a'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-22.jpg?alt=media&token=fb995e08-c636-4874-8295-e17ede846cac',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-22.jpg?alt=media&token=fb995e08-c636-4874-8295-e17ede846cac'
          }
        ]}
      />
      <hr />
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-24.jpg?alt=media&token=9e0e2aae-74e2-4b42-a92d-cc4433bd392c',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-24.jpg?alt=media&token=9e0e2aae-74e2-4b42-a92d-cc4433bd392c'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-25.jpg?alt=media&token=6e5bf861-353d-441b-ac76-a36f3964f0f0',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-25.jpg?alt=media&token=6e5bf861-353d-441b-ac76-a36f3964f0f0'
          }
        ]}
      />
      <hr />
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-27.jpg?alt=media&token=2cd18cf6-15f0-45c2-a3f2-8caa9d0a575e',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-27.jpg?alt=media&token=2cd18cf6-15f0-45c2-a3f2-8caa9d0a575e'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-29.jpg?alt=media&token=4ce320e0-78ee-4d2c-b4dd-b4e174fb8301',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-29.jpg?alt=media&token=4ce320e0-78ee-4d2c-b4dd-b4e174fb8301'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-31.jpg?alt=media&token=581888f5-ef70-4cd7-a3cb-06118ebad6ef',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-31.jpg?alt=media&token=581888f5-ef70-4cd7-a3cb-06118ebad6ef'
          }
        ]}
      />
      <hr />
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-33.jpg?alt=media&token=a4d55123-c195-4df6-a658-418ccec482a8',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-33.jpg?alt=media&token=a4d55123-c195-4df6-a658-418ccec482a8'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-37.jpg?alt=media&token=c49db619-a973-41bf-8b0a-441f82e0e249',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-37.jpg?alt=media&token=c49db619-a973-41bf-8b0a-441f82e0e249'
          },
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-40.jpg?alt=media&token=07ad20d1-9385-4bf6-831b-8090a5b1ab14',
            thumbnail:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fphoto_2023-02-24_01-20-40.jpg?alt=media&token=07ad20d1-9385-4bf6-831b-8090a5b1ab14'
          }
        ]}
      />
      <hr />
      <div ref={containerRef}>
        <PDFViewer
          file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fmaterial-base%2Fcertificate-UTalk.pdf?alt=media&token=55395b6c-3768-490c-a8bc-335c711a7037"
          width={width}
        />
      </div>
    </>
  );
}

export default Mtb;
