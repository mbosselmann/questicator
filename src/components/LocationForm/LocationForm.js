import TextInput from "../TextInput/TextInput.js";
import { StyledFieldset } from "../../styles/StyledFieldset.js";

export default function LocationForm({ location }) {
  return (
    <StyledFieldset>
      <legend>Location (optional)</legend>
      <TextInput
        id="location-name"
        name="locationName"
        labelText="Name of location"
        defaultValue={location ? location.locationName : ""}
      />
      <TextInput
        id="location-street"
        name="street"
        labelText="Street"
        defaultValue={location ? location.street : ""}
      />
      <TextInput
        id="location-streetnumber"
        name="streetNumber"
        labelText="Street number"
        defaultValue={location ? location.streetNumber : ""}
      />
      <TextInput
        id="location-postal-code"
        name="postalCode"
        labelText="Postal code"
        defaultValue={location ? location.postalCode : ""}
      />
      <TextInput
        id="location-place"
        name="place"
        labelText="Place"
        defaultValue={location ? location.place : ""}
      />
    </StyledFieldset>
  );
}
