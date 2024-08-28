import { faker } from "@faker-js/faker";
import { format } from "date-fns";

let id = 0;

export const EventFixture = () => ({
  id: id++,
  title: faker.lorem.words(3),
  category: faker.word.words(),
  place: faker.location.city(),
  dateOfEvent: format(faker.date.future(), "dd/MM/yyyy"),
  description: faker.lorem.paragraph(),
});
