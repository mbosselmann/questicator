export default async function getLongitudeLatitude(location) {
  const { locationName, street, streetNumber, postalCode, place } = location;
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${locationName}+${street}+${streetNumber}+${postalCode}+${place}&format=jsonv2&limit=1`
    );

    if (!response.ok) {
      throw new Error("Search request for location failed.");
    }

    const data = await response.json();
    if (data.length === 0) {
      const responseWithoutLocationName = await fetch(
        `https://nominatim.openstreetmap.org/search.php?q=${street}+${streetNumber}+${postalCode}+${place}&format=jsonv2&limit=1`
      );
      const dataWithoutLocationName = await responseWithoutLocationName.json();
      console.log(dataWithoutLocationName);
      return {
        longitude: Number(dataWithoutLocationName[0].lon),
        latitude: Number(dataWithoutLocationName[0].lat),
      };
    } else {
      return { longitude: Number(data[0].lon), latitude: Number(data[0].lat) };
    }
  } catch (error) {
    console.error(error);
  }
}
