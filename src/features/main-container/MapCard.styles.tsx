import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const HighMapContainer = styled(MapContainer)`
  width: 100%;
  height: calc(65vh - 4rem);
  box-shadow: 0 0 18px -8px black;

  a {
    color: var(--color-secondary) !important;
    text-shadow: var(--text-shadow);
  }
`;
