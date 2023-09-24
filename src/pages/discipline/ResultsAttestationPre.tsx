import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function PreAttestation() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>Результати проміжної атестації здобувачів освіти</h2>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Frelults-preatestation-012.pdf?alt=media"
        width={width}
      />
      <hr />
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Frelults-preatestation-014.pdf?alt=media"
        width={width}
      />
    </div>
  );
}
export default PreAttestation;
