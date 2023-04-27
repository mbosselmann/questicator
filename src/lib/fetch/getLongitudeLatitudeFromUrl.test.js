import getLatitudeLongitudeFromUrl from "./getLongitudeLatitudeFromUrl.js";

beforeEach(() => {
  fetch.resetMocks();
});

test("returns longitude and latitude for valid location", async () => {
  fetch.mockResponseOnce((request) =>
    request.url ===
    "https://nominatim.openstreetmap.org/search.php?q=Flughafen%20Hamburg+Flughafenstra%C3%9Fe+1-3+22335+Hamburg&format=jsonv2&limit=1"
      ? Promise.resolve(
          JSON.stringify([
            {
              lon: 11.558,
              lat: 48.14,
            },
          ])
        )
      : Promise.reject(`Invalid URL: ${request.url}`)
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
