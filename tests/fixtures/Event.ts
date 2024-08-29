import { categories } from "@/constants";
import { getRandomCategory } from "@/utils";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";

let id = 0;

export const EventFixture = () => ({
  id: id++,
  title: faker.lorem.words(3),
  category: getRandomCategory(categories),
  place: faker.location.city(),
  dateOfEvent: format(faker.date.future(), "dd/MM/yyyy"),
  description: faker.lorem.paragraph(),
});
