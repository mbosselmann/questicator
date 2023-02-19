export default function formatQuestData(questData, locationLongitudeLatitude) {
  return {
    title: questData.title,
    description: questData.description,
    kindOfQuest: questData.kindOfQuest,
    priority: questData.priority,
    location: {
      locationName: questData.locationName,
      street: questData.street,
      streetNumber: questData.streetNumber,
      postalCode: questData.postalCode,
      place: questData.place,
      longitude: locationLongitudeLatitude?.longitude,
      latitude: locationLongitudeLatitude?.latitude,
    },
  };
}
