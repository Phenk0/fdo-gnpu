import { Circle, LayerGroup, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { HighMapContainer } from './MapCard.styles.tsx';
const MapCard = () => {
  const position: LatLngExpression = [51.67905228941651, 33.91565530243458];
  return (
    <>
      <HighMapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <LayerGroup>
          <Circle
            center={position}
            pathOptions={{ color: 'var(--color-secondary)' }}
            radius={75}
          >
            <Popup>Ми тут!</Popup>
          </Circle>
        </LayerGroup>
      </HighMapContainer>
    </>
  );
};
export default MapCard;
