import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function StakeholdersPlan() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>План роботи ради стейкхолдерів</h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fstakeholders%2Fplan-stakeholdes.pdf?alt=media"
        width={width}
      />
    </div>
  );
}
export default StakeholdersPlan;
