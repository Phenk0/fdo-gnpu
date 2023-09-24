import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';

function InternationalPlan() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>
        План міжнародної діяльності факультету дошкільної освіти на 2022-2023
        навчальний рік
      </h2>
      <PDFViewer
        file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flaboratory%2Finternational-plan-2022_2023.pdf?alt=media"
        width={width}
      />
    </div>
  );
}

export default InternationalPlan;
