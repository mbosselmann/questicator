import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const StyledMapContainer = styled(MapContainer)`
  height: 15rem;
  border: 10px solid var(--highlighted);
  border-radius: 15px;
`;

export default function Map({ location }) {
  return (
    <StyledMapContainer
      center={[location.latitude + 0.002, location.longitude]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>
          <h3>{location.locationName}</h3>
          <p>{`${location.street} ${location.streetNumber}`}</p>
          <p>{`${location.postalCode} ${location.place}`}</p>
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
}
