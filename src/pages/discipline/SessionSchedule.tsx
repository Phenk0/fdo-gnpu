import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function ExamsSchedule() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>Розклад заліково-екзаменаційної сесії</h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fexamination-schedule%2Fexams-schedule.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default ExamsSchedule;
