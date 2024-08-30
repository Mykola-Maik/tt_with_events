import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventState } from "@/types/redux/slices/eventSlice/eventTypes";
import {
  createEvent,
  deleteEventById,
  fetchEventById,
  fetchEvents,
  updateEventById,
} from "./thunkRequests";
import { Event } from "@/types/entities/Event";

const initialState: EventState = {
  events: [],
  currentEvent: null,
  isLoading: false,
  error: null,
};

export const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    clearCurrentEvent(state) {
      state.currentEvent = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      fetchEvents.fulfilled,
      (state, action: PayloadAction<Event[]>) => {
        state.isLoading = false;
        state.events = action.payload;
      }
    );

    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchEventById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      fetchEventById.fulfilled,
      (state, action: PayloadAction<Event>) => {
        state.isLoading = false;
        state.currentEvent = action.payload;
      }
    );

    builder.addCase(fetchEventById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(deleteEventById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      deleteEventById.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.events = state.events.filter(
          (event) => event.id !== Number(action.payload)
        );
      }
    );

    builder.addCase(deleteEventById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(updateEventById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      updateEventById.fulfilled,
      (state, action: PayloadAction<Event>) => {
        state.isLoading = false;
        const index = state.events.findIndex(
          (event) => event.id === action.payload.id
        );
        if (index !== -1) {
          state.events[index] = { ...state.events[index], ...action.payload };
        }
        if (state.currentEvent?.id === action.payload.id) {
          state.currentEvent = { ...state.currentEvent, ...action.payload };
        }
      }
    );

    builder.addCase(updateEventById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(createEvent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(
      createEvent.fulfilled,
      (state, action: PayloadAction<Event>) => {
        state.isLoading = false;
        state.events.push(action.payload);
      }
    );

    builder.addCase(createEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearCurrentEvent } = eventSlice.actions;

export default eventSlice.reducer;
