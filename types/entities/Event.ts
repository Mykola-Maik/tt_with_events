export interface AddEvent {
  title: string;
  category: string;
  place: string;
  dateOfEvent: string;
  description: string;
}

export interface Event extends AddEvent {
  id: number;
}
