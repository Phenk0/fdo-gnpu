import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import PDFViewer from '../main-container/PDFViewer.tsx';

import {
  AdditionalInformation,
  AnnouncementContainer,
  Date
} from './AnnouncementOld.styles.tsx';
import { usePDFContainer } from '../main-container/usePDFContainer.ts';
import { FaLink } from 'react-icons/fa6';
import ExternalLink from '../../ui/ExternalLink.tsx';

type AnnouncementProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  text?: string;
  component?: ReactNode;
  date?: string;
  pdfUrl?: string;
  linkTo?: string;
  anchorTo?: string;
};
const Announcement = ({
  imageUrl,
  title,
  description,
  text,
  component,
  date,
  pdfUrl,
  linkTo,
  anchorTo
}: AnnouncementProps) => {
  const { width, containerRef } = usePDFContainer();

  return (
    <AnnouncementContainer ref={containerRef}>
      {title && <h2>{title}</h2>}
      {imageUrl && <img src={imageUrl} alt={description} />}
      {pdfUrl && containerRef.current && (
        <PDFViewer file={pdfUrl} width={width} />
      )}
      {text && <p>{text}</p>}
      {component}
      <AdditionalInformation>
        {date && <Date>Опубліковано: {date}</Date>}
        {linkTo && (
          <Link to={linkTo}>
            Докладніше <FaLink size="0.8em" />
          </Link>
        )}
        {anchorTo && <ExternalLink href={anchorTo} text="Докладніше" />}
      </AdditionalInformation>
      <hr />
    </AnnouncementContainer>
  );
};
export default Announcement;
