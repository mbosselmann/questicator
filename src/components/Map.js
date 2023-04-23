import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { StyledLink } from "@/styles/StyledLink.js";

const StyledMapContainer = styled(MapContainer)`
  height: 17rem;
  border: 10px solid var(--highlighted);
  border-radius: 15px;
`;

const StyledPopup = styled(Popup)`
  & div .leaflet-popup-content {
    display: grid;
  }

  & div .leaflet-popup-content > * {
    margin: 0.3rem;
  }
`;

export default function Map({ location, questId }) {
  return (
    <StyledMapContainer
      center={[location.latitude + 0.0025, location.longitude]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.latitude, location.longitude]}>
        <StyledPopup>
          <h3>{location.locationName}</h3>
          <p>{`${location.street} ${location.streetNumber}`}</p>
          <p>{`${location.postalCode} ${location.place}`}</p>
          <StyledLink
            href={`${questId}/edit-location`}
            style={{ color: "#ffffff" }}
          >
            Edit location
          </StyledLink>
        </StyledPopup>
      </Marker>
    </StyledMapContainer>
  );
}
