import { useRouter } from "next/router.js";
import { useQuests, useQuestsDispatch } from "@/context.js";
import getLongitudeLatitude from "@/lib/services/getLongitudeLatitude.js";

import LocationForm from "@/components/LocationForm/index.js";
import { StyledButton } from "@/styles/StyledButton.js";
import { StyledForm } from "@/styles/StyledForm.js";
import { StyledTitle } from "@/styles/StyledTitle.js";

export default function EditLocation() {
  const { quests } = useQuests();
  const dispatch = useQuestsDispatch();

  const router = useRouter();
  const { id } = router.query;

  const selectedQuest = quests.find((quest) => quest.id === id);

  if (!selectedQuest) {
    return null;
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedLocationData = Object.fromEntries(formData);
    const locationLongitudeLatitude = await getLongitudeLatitude(
      updatedLocationData
    );

    const updatedQuest = {
      ...selectedQuest,
      location: { ...updatedLocationData, ...locationLongitudeLatitude },
    };
    dispatch({ type: "editQuest", updatedQuest });
    router.back();
  }

  return (
    <>
      <StyledTitle id="edit-location">Edit location</StyledTitle>
      <StyledForm onSubmit={onSubmit} aria-labelledby="edit-location">
        <LocationForm location={selectedQuest.location} />
        <StyledButton type="submit">Save location</StyledButton>
      </StyledForm>
    </>
  );
}
