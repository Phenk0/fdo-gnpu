import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
function EducationalSchedule() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>
        Графік освітнього процесу для студентів факультету дошкільної освіти
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Feducational-schedule%2Feducational-schedules-2023-24.pdf?alt=media&token=e7532055-c8b1-49b1-9b93-fccf9a1d7566"
        width={width}
      />
    </div>
  );
}
export default EducationalSchedule;
