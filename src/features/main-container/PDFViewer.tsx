import { Document, Page } from 'react-pdf';
import { PDFDocumentProxy } from 'pdfjs-dist';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState } from 'react';
import { PDFContainer } from './PDFViewer.styles.tsx';

type PDFViewerProps = {
  file: string;
  width: number;
};

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/'
};

function PDFViewer({ file, width }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <PDFContainer>
      <Document
        file={file}
        options={options}
        onLoadSuccess={onDocumentLoadSuccess as () => void}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={width}
          />
        ))}
      </Document>
    </PDFContainer>
  );
}

export default PDFViewer;
