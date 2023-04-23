import { render, screen } from "@testing-library/react";
import QuestList from "./index.js";

jest.mock("../../context.js", () => ({
  useQuestsDispatch: () => {
    const dispatch = jest.fn();
    return dispatch;
  },
}));

const exampleQuests = [
  {
    id: "d3fa0144-cbdd-4845-b215-e9c6c155e68e",
    title: "Find the golden wolf",
    description: "Maybe there is also a treasure waiting for me?",
    labels: [
      { id: "05bec04c-b139-4424-a253-ee554db94bdf", name: "discovery" },
      { id: "eac02276-6a5b-40bc-9a38-3861ac379606", name: "low-priority" },
    ],
    isDone: true,
    location: {
      locationName: "Elbphilharmonie Hamburg",
      street: "Platz der Deutschen Einheit",
      streetNumber: "1",
      postalCode: "20457",
      place: "Hamburg",
      latitude: 53.54141893739151,
      longitude: 9.984184442472383,
    },
    notes: [
      "Or may it be better to solve another quest first?",
      "I hope I can handle this!",
      "Try this out!",
    ],
    dateSelected:
      "Thu Dec 11 2023 15:16:49 GMT+0200 (Central European Summer Time)",
    dateFinished:
      "Thu Dec 11 2022 15:16:49 GMT+0200 (Central European Summer Time)",
  },
  {
    id: "aa32416f-8e03-4325-bc8b-399f7a80512a",
    title: "Find the fairy floof!",
    description: "This one could be a tricky adventure.",
    labels: [
      { id: "f4625ed5-b8df-464e-8b91-f813b81c1c72", name: "practice" },
      { id: "da450c86-8675-4351-be63-476725c38981", name: "none" },
    ],
    isDone: false,
    location: {
      locationName: "Hamburger Wollfabrik GmbH",
      street: "Brandshofer Deich",
      streetNumber: "48",
      postalCode: "20539",
      place: "Hamburg",
      latitude: 53.53876439555081,
      longitude: 10.030403098307378,
    },
  },
  {
    id: "784fdeed-87cf-486c-b5be-744559b0585f",
    title: "Build a castle!",
    description: "This is a very interesting quest!",
    labels: [
      { id: "bf0548eb-c1ce-4281-bb97-054b4327fa23", name: "discovery" },
      { id: "a8062775-70a5-4888-b7ae-c81f425ffede", name: "high-priority" },
    ],
    isDone: false,
    location: {
      locationName: "Elbphilharmonie Hamburg",
      street: "Platz der Deutschen Einheit",
      streetNumber: "1",
      postalCode: "20457",
      place: "Hamburg",
      latitude: 53.54141893739151,
      longitude: 9.984184442472383,
    },

    notes: ["Amazing!"],
  },
  {
    id: "1",
    title: "Learn how to be the greatest wizard in the world!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iusto accusamus mollitia asperiores praesentium officia, quas aliquid quia corrupti, in excepturi velit magni illum alias eveniet odit placeat maiores voluptates.",
    labels: [
      { id: "1", name: "practice" },
      { id: "2", name: "high-priority" },
    ],
    isDone: false,
    location: {
      locationName: "Flughafen Hamburg",
      street: "Flughafenstraße",
      streetNumber: "1-3",
      postalCode: "22335",
      place: "Hamburg",
      latitude: 53.6287337,
      longitude: 10.0064612,
    },

    notes: [
      "This might be a hard quest and may take longer than I think to solve.",
    ],
  },
];

test("renders quest list with three quests", () => {
  render(<QuestList quests={exampleQuests} chosenQuestIds={[]} />);

  const quests = screen.getAllByRole("article");
  expect(quests).toHaveLength(4);
});
