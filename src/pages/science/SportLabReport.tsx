import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';

function SportLabReport() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>
        Звіт про діяльність у 2022 році Науково-дослідної лабораторії:
        Інноваційні спортивно-педагогічні технології
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flaboratory%2Fsport-lab-report-2022.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default SportLabReport;
