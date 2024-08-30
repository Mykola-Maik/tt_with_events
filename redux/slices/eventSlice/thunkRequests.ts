import HttpService from "@/services/HttpService/HttpService";
import { Event } from "@/types/entities/Event";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";

export const fetchEvents = createAsyncThunk<Event[]>(
  "eventSlice/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await HttpService.get<Event[]>("/events");
      const formatedEvents = response.data.map((event) => ({
        ...event,
        dateOfEvent: format(event.dateOfEvent, "dd/MM/yyyy"),
      }));
      return formatedEvents;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            error.response?.data || "Failed to fetch events"
          );
        }
      }
      return rejectWithValue("Failed to fetch events");
    }
  }
);

export const fetchEventById = createAsyncThunk<Event, string>(
  "eventSlice/fetchEventById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await HttpService.get<Event>(`/events/${id}`);
      const formatedEvent = {
        ...response.data,
        dateOfEvent: format(response.data.dateOfEvent, "dd/MM/yyyy"),
      };

      return formatedEvent;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            error.response?.data || `Failed to fetch event with id ${id}`
          );
        }
      }
      return rejectWithValue(`Failed to fetch event with id ${id}`);
    }
  }
);

export const deleteEventById = createAsyncThunk<string, string>(
  "eventSlice/deleteEventById",
  async (id, { rejectWithValue }) => {
    try {
      await HttpService.delete(`/events/${id}`);
      return id;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            error.response?.data || `Failed to delete event with id ${id}`
          );
        }
      }
      return rejectWithValue(`Failed to delete event with id ${id}`);
    }
  }
);

export const updateEventById = createAsyncThunk<
  Event,
  { id: string; payload: Partial<Event> }
>(
  "eventSlice/updateEventById",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await HttpService.patch<Event>(`/events/${id}`, payload);
      const formatedEvent = {
        ...response.data,
        dateOfEvent: format(response.data.dateOfEvent, "dd/MM/yyyy"),
      };

      return formatedEvent;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            error.response?.data || `Failed to update event with id ${id}`
          );
        }
      }
      return rejectWithValue(`Failed to update event with id ${id}`);
    }
  }
);

export const createEvent = createAsyncThunk<Event, Partial<Event>>(
  "eventSlice/createEvent",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await HttpService.post<Event>("/events", payload);
      const formatedEvent = {
        ...response.data,
        dateOfEvent: format(response.data.dateOfEvent, "dd/MM/yyyy"),
      };

      return formatedEvent;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(
            error.response?.data || "Failed to create event"
          );
        }
      }
      return rejectWithValue("Failed to create event");
    }
  }
);
