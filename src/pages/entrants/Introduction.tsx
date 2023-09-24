import ImageGallery from 'react-image-gallery';
import { PresentationCard } from './Introduction.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';

const presentationTMDO = [
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-1.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-2.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-3.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-4.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-5.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-6.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-7.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-8.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-9.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-10.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-11.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmdo-12.webp?alt=media'
  }
];
const presentationTMFV = [
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-1.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-2.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-3.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-4.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-5.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-6.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-7.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-8.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-9.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-10.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-11.webp?alt=media'
  },
  {
    original:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fenglish-tmfv-12.webp?alt=media'
  }
];
function Introduction() {
  return (
    <>
      <h2>Department of Preschool Education invites you!</h2>

      <PresentationCard>
        <h3>
          EDUCATIONAL AND PROFESSIONAL PROGRAM «Pre-school Education and
          Language and Literature (English)»{' '}
          <ExternalLink href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2FEDUCATIONAL_AND_PROFEIONAL_PROGRAM_%C2%ABPre_school_Education_and_Language.pdf?alt=media" />
        </h3>
      </PresentationCard>

      <PresentationCard>
        <h2>
          Theory and Methodology Preschool Education Department presentation
        </h2>
        <ImageGallery items={presentationTMDO} />
      </PresentationCard>
      <PresentationCard>
        <h2>
          Theories and Methods of Physical Education Department presentation
        </h2>
        <ImageGallery items={presentationTMFV} />
      </PresentationCard>
    </>
  );
}

export default Introduction;
