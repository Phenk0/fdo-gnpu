import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import AnnounceDate from './AnnounceDate.tsx';

import {
  AdditionalInformation,
  AnnouncementContainer,
  WrapAndHide,
  MainInformation,
  PDFContainer
} from './AnnouncementShort.styles.tsx';
import PDFViewer from '../main-container/PDFViewer.tsx';
import { usePDFContainer } from '../main-container/usePDFContainer.ts';
import ExternalLink from '../../ui/ExternalLink.tsx';
import { FaArrowRight } from 'react-icons/fa6';

type AnnouncementShortProps = {
  announcement: {
    shortCut?: string;
    imagesList: { original: string; thumbnail?: string }[];
    title?: string;
    text: string[];
    component?: string;
    date?: string;
    pdfUrl?: string;
    linkTo?: string;
    anchorTo?: string;
  };
};
function AnnouncementShort({ announcement }: AnnouncementShortProps) {
  const { width, containerRef } = usePDFContainer();
  const { shortCut, imagesList, title, text, date, pdfUrl, linkTo, anchorTo } =
    announcement;

  return (
    <AnnouncementContainer ref={containerRef}>
      {title && <h2 style={{ margin: '1rem 0' }}>{title}</h2>}
      {(shortCut && <p>{shortCut}</p>) ||
        (text[0] && (
          <MainInformation>
            <WrapAndHide>
              {text[0] &&
                text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </WrapAndHide>
          </MainInformation>
        ))}
      {(pdfUrl && (
        <PDFContainer>
          <PDFViewer file={pdfUrl} width={width * 1.05} />
        </PDFContainer>
      )) ||
        (imagesList[0]?.original && (
          <ImageGallery
            items={[imagesList[0]]}
            showPlayButton={false}
            showThumbnails={false}
          />
        ))}
      <hr />
      <AdditionalInformation>
        {linkTo && (
          <Link to={linkTo} style={{ float: 'left' }}>
            Докладніше{' '}
            <FaArrowRight size="1.2em" style={{ verticalAlign: 'bottom' }} />
          </Link>
        )}
        {anchorTo && <ExternalLink href={anchorTo} text="Докладніше" />}
        {date && <AnnounceDate date={date} />}
      </AdditionalInformation>
    </AnnouncementContainer>
  );
}
export default AnnouncementShort;
