import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function Rating() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>Рейтинг успішності</h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Frating%2Frating-09-2023.pdf?alt=media&token=d7e06077-a1b3-4bd4-a02c-e161fe7e10a4"
        width={width}
      />
    </div>
  );
}

export default Rating;
