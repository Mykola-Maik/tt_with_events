"use client";
import { Box, List as MuiList, Button, SelectChangeEvent } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Event } from "@/types/entities/Event";
import { Dropdown, EventListItem, GlobalLoader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { addServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { ServiceModalName, SortBy } from "@/enums";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories, sortByList } from "@/constants";
import { parse } from "date-fns";
import { EventState } from "@/types/redux/slices/eventSlice/eventTypes";
import { fetchEvents } from "@/redux/slices/eventSlice";
import { AppDispatch } from "@/redux/store";

export default function List() {
  const [sortBy, setSortBy] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { events, isLoading, error } = useSelector(
    (state: { eventSlice: EventState }) => state.eventSlice
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const sortedEvents = useMemo(() => {
    let outputEvents = [...events];

    if (selectedCategory) {
      outputEvents = outputEvents.filter(
        (event) => event.category === selectedCategory
      );
    }

    if (sortBy) {
      outputEvents = outputEvents.sort((a: Event, b: Event): number => {
        switch (sortBy) {
          case SortBy.Name:
            return a.title.localeCompare(b.title);
          case SortBy.Date:
            const dateA = parse(a.dateOfEvent, "dd/MM/yyyy", new Date());
            const dateB = parse(b.dateOfEvent, "dd/MM/yyyy", new Date());

            return dateA.getTime() - dateB.getTime();
          case SortBy.Place:
            return a.place.localeCompare(b.place);
          case SortBy.Category:
            return a.category.localeCompare(b.category);
          default:
            return 0;
        }
      });
    }

    return outputEvents;
  }, [sortBy, selectedCategory, events]);

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());
    const { sortBy: querySortBy, selectedCategory: queryselectedCategory } =
      query;

    if (querySortBy) setSortBy(querySortBy);
    if (queryselectedCategory) setSelectedCategory(queryselectedCategory);
  }, [searchParams]);

  useEffect(() => {
    const query: { [key: string]: string } = {};
    if (sortBy) query.sortBy = sortBy;
    if (selectedCategory) query.selectedCategory = selectedCategory;

    router.replace(`${pathname}?${new URLSearchParams(query).toString()}`);
  }, [sortBy, selectedCategory]);

  const addEventHandler = () => {
    dispatch(
      addServiceModal({
        type: ServiceModalName.AddEvent,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const handleSort = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value);
  };

  const handleOrder = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const handleClear = () => {
    setSortBy("");
    setSelectedCategory("");
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        py: 3,
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          width: 1,
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            gap: "24px",
            width: "30%",
          }}
        >
          <Dropdown
            name="sortBy"
            label="Sort by"
            placeholder="Sort by"
            value={sortBy}
            options={sortByList}
            onChange={handleSort}
            sx={{ width: "130px" }}
          />

          <Dropdown
            name="filterBy"
            label="Category"
            placeholder="Select category"
            value={selectedCategory}
            options={categories}
            onChange={handleOrder}
            sx={{ width: "200px" }}
          />

          <Button
            onClick={handleClear}
            sx={{ textTransform: "none", alignSelf: "flex-end" }}
          >
            Clear
          </Button>
        </Box>
        <Button
          variant="outlined"
          onClick={addEventHandler}
          sx={{ textTransform: "none", width: "10%" }}
        >
          + Add
        </Button>
      </Box>

      {isLoading && <GlobalLoader isOpen={isLoading} />}

      <MuiList
        sx={{
          overflow: "auto",
          border: "1px solid #D0D5DD",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          p: 3,
          width: 1,
          height: "500px",
        }}
      >
        {sortedEvents.map((event) => (
          <EventListItem key={event.id} event={event} />
        ))}
      </MuiList>
    </Box>
  );
}
