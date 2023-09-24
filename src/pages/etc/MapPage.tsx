import { FaMapLocationDot } from 'react-icons/fa6';
import MapCard from '../../features/main-container/MapCard.tsx';

function MapPage() {
  return (
    <>
      <h2>
        Ми тут&nbsp;
        <FaMapLocationDot size="1.5em" style={{ verticalAlign: 'bottom' }} />
      </h2>
      <MapCard />
    </>
  );
}

export default MapPage;
