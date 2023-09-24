import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function SemiAttestation() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>Результати семестрової атестації здобувачів освіти</h2>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2F%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%20%D0%B0%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%86%D1%96%D1%97%20%D0%94%D0%9E.pdf?alt=media&token=c88e9e3e-7b21-41c7-bcc2-586d2d5fe71c"
        width={width}
      />
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Frelults-preatestation-012.pdf?alt=media"
        width={width}
      />
      <hr />
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2F%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%20%D0%B0%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%86%D1%96%D1%97%20%D0%A4%D0%9A.pdf?alt=media&token=0bb7c8d1-fce3-4206-b327-d6173dfdd166"
        width={width}
      />
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Frelults-preatestation-014.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default SemiAttestation;
