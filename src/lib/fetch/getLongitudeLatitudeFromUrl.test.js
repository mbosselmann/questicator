import getLatitudeLongitudeFromUrl from "./getLongitudeLatitudeFromUrl.js";

beforeEach(() => {
  fetch.resetMocks();
});

test("returns longitude and latitude for valid location", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        lon: 11.558,
        lat: 48.14,
      },
    ])
  );

  const location = {
    locationName: "Flughafen Hamburg",
    street: "Flughafenstraße",
    streetNumber: "1-3",
    postalCode: "22335",
    place: "Hamburg",
  };
  const result = await getLatitudeLongitudeFromUrl(location);

  expect(result).toEqual({
    longitude: 11.558,
    latitude: 48.14,
  });
});
