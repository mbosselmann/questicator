export default async function getLatitudeLongitudeFromUrl(location) {
  const { locationName, street, streetNumber, postalCode, place } = location;
  const url = `https://nominatim.openstreetmap.org/search.php?q=${locationName}+${street}+${streetNumber}+${postalCode}+${place}&format=jsonv2&limit=1`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    if (data.length === 1) {
      return {
        longitude: Number(data[0].lon),
        latitude: Number(data[0].lat),
      };
    } else {
      console.log(
        "No result from nominatim. Map will not be displayed for location:",
        location
      );
    }
  }
}
