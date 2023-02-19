import { useState } from "react";
import TextInput from "./TextInput.js";
import { StyledFieldset } from "@/styles/StyledFieldset.js";
import { StyledButton } from "@/styles/StyledButton.js";

export default function LocationForm({ selectedQuest }) {
  const [isLocationFormDisplayed, setIsLocationFormDisplayed] = useState(
    selectedQuest?.location ? true : false
  );
  return (
    <>
      <StyledButton
        type="button"
        onClick={() => setIsLocationFormDisplayed(!isLocationFormDisplayed)}
      >
        {isLocationFormDisplayed ? "Close location form" : "Show location form"}
      </StyledButton>
      {isLocationFormDisplayed && (
        <StyledFieldset>
          <legend>Location (optional)</legend>
          <TextInput
            id="location-name"
            name="locationName"
            labelText="Name of location"
            defaultValue={
              selectedQuest ? selectedQuest.location?.locationName : ""
            }
          />
          <TextInput
            id="location-street"
            name="street"
            labelText="Street"
            defaultValue={selectedQuest ? selectedQuest.location?.street : ""}
          />
          <TextInput
            id="location-streetnumber"
            name="streetNumber"
            labelText="Street number"
            defaultValue={
              selectedQuest ? selectedQuest.location?.streetNumber : ""
            }
          />
          <TextInput
            id="location-postal-code"
            name="postalCode"
            labelText="Postal code"
            defaultValue={
              selectedQuest ? selectedQuest.location?.postalCode : ""
            }
          />
          <TextInput
            id="location-place"
            name="place"
            labelText="Place"
            defaultValue={selectedQuest ? selectedQuest.location?.place : ""}
          />
        </StyledFieldset>
      )}
    </>
  );
}
