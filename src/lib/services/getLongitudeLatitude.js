import getLatitudeLongitudeFromUrl from "../fetch/getLongitudeLatitudeFromUrl.js";

export default async function getLongitudeLatitude(location) {
  return (
    (await getLatitudeLongitudeFromUrl(location)) ||
    (await getLatitudeLongitudeFromUrl({ ...location, locationName: "" }))
  );
}
