import { Category } from "@/enums";

export const getImageByCategory = (category: Category): string => {
  switch (category) {
    case Category.Meetings:
      return "meeting";
    case Category.Weddings:
      return "wedding";
    case Category.Birthdays:
      return "birthday";
    case Category.Travels:
      return "travel";
    case Category.Interviews:
      return "interview";
    case Category.Appointments:
      return "appointment";
    case Category.Sport:
      return "sport";
    case Category.Other:
    default:
      return "other";
  }
};
