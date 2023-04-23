import { render, screen } from "@testing-library/react";
import LocationForm from "./index.js";

test("renders location form with a legend, five inputs and labels", () => {
  render(<LocationForm />);

  const legend = screen.getByRole("group", { name: "Location (optional)" });
  expect(legend).toBeInTheDocument();

  const nameOfLocationInput = screen.getByLabelText("Name of location");
  expect(nameOfLocationInput).toBeInTheDocument();

  const streetInput = screen.getByLabelText("Street");
  expect(streetInput).toBeInTheDocument();

  const streetNumberInput = screen.getByLabelText("Street number");
  expect(streetNumberInput).toBeInTheDocument();

  const postalCodeInput = screen.getByLabelText("Postal code");
  expect(postalCodeInput).toBeInTheDocument();

  const placeInput = screen.getByLabelText("Place");
  expect(placeInput).toBeInTheDocument();
});

test("renders location form with default values", () => {
  const exampleLocation = {
    locationName: "Hamburger Wollfabrik GmbH",
    street: "Brandshofer Deich",
    streetNumber: "48",
    postalCode: "20539",
    place: "Hamburg",
    latitude: 53.53876439555081,
    longitude: 10.030403098307378,
  };

  render(<LocationForm location={exampleLocation} />);

  const nameOfLocationInput = screen.getByLabelText("Name of location");
  expect(nameOfLocationInput).toHaveValue("Hamburger Wollfabrik GmbH");

  const streetInput = screen.getByLabelText("Street");
  expect(streetInput).toHaveValue("Brandshofer Deich");

  const streetNumberInput = screen.getByLabelText("Street number");
  expect(streetNumberInput).toHaveValue("48");

  const postalCodeInput = screen.getByLabelText("Postal code");
  expect(postalCodeInput).toHaveValue("20539");

  const placeInput = screen.getByLabelText("Place");
  expect(placeInput).toHaveValue("Hamburg");
});
