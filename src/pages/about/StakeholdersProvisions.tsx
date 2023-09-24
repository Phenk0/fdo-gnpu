import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function StakeholdersProvisions() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>Положення про раду стейкхолдерів</h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fstakeholders%2Fprovisions-gnpu-vs-stakeholdes.pdf?alt=media"
        width={width}
      />
    </div>
  );
}
export default StakeholdersProvisions;
