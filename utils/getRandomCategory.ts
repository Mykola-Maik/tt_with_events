import { Category } from "@/enums";

export function getRandomCategory(categories: Category[]) {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
