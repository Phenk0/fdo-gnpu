import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function CareerGuidance() {
  const { width, containerRef } = usePDFContainer();

  return (
    <div ref={containerRef}>
      <h2>
        ПЛАН профорієнтаційної роботи факультету дошкільної освіти на 2023 рік
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fproforientation%2Fproforientation-plan.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default CareerGuidance;
