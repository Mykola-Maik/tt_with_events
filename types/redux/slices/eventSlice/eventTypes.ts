import { Event } from "@/types/entities/Event";

export interface EventState {
  events: Event[];
  currentEvent?: Event | null;
  isLoading: boolean;
  error: string | null;
}
