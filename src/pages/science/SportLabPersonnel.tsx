import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';

function SportLabPersonnel() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>
        Професорсько-викладацький склад Науково-дослідної лабораторії:
        Інноваційні спортивно-педагогічні технології
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flaboratory%2Fsport-lab-personnel.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default SportLabPersonnel;
