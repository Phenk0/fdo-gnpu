import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';

function InternationalReport() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>
        Звіт про міжнародну діяльність факультету дошкільної освіти за 2022 рік
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flaboratory%2Finternational-report-2022.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default InternationalReport;
