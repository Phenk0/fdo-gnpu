import { useParams } from 'react-router-dom';

import ReactImageGallery from 'react-image-gallery';

import Page404 from '../../ui/Page404.tsx';
import AnnounceDate from './AnnounceDate.tsx';

import {
  AdditionalInformation,
  AnnouncementContainer,
  PDFContainer
} from './DynamicAnnouncement.styles.tsx';

import announcementsList from '../../data/announcements-list.json';
import { usePDFContainer } from '../main-container/usePDFContainer.ts';
import PDFViewer from '../main-container/PDFViewer.tsx';
import GoBackButton from '../../ui/GoBackButton.tsx';

type DynamicAnnouncementProps = {
  annoType?: string;
};
function DynamicAnnouncement({ annoType = '' }: DynamicAnnouncementProps) {
  const { width, containerRef } = usePDFContainer();
  const { id } = useParams();
  const announcements = announcementsList.filter(({ type }) =>
    type.includes(annoType)
  );
  const announcement = announcements.find(({ linkTo }) => linkTo === id);
  if (!announcement) {
    return <Page404 />;
  }
  const { shortCut, imagesList, title, text, component, date, pdfUrl } =
    announcement;

  return (
    <>
      <GoBackButton position="start" />
      <AnnouncementContainer ref={containerRef}>
        {title && <h2>{title}</h2>}
        {shortCut && <p>{shortCut}</p>}
        {imagesList[0]?.original && (
          <ReactImageGallery
            items={imagesList}
            showPlayButton={false}
            showBullets={imagesList.length > 1}
          />
        )}
        {text[0] &&
          text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {pdfUrl && (
          <PDFContainer>
            <PDFViewer file={pdfUrl} width={width * 1.05} />
          </PDFContainer>
        )}
        {component && <div dangerouslySetInnerHTML={{ __html: component }} />}
        <hr />
        <AdditionalInformation>
          {date && <AnnounceDate date={date} />}
        </AdditionalInformation>
      </AnnouncementContainer>
      <GoBackButton position="end" />
    </>
  );
}
export default DynamicAnnouncement;
