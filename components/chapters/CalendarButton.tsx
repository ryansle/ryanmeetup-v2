"use client";

// Components
import { Button } from "@/components/global";
import { FaCalendarAlt as Calendar } from "react-icons/fa";

const CalendarButton = () => {
  return (
    <Button.Link
      href="/calendar"
      className="mt-6"
      leftIcon={<Calendar />}
      variant="primary"
      size="md"
      fullWidth
      newTab={false}
    >
      Full Calendar of Events
    </Button.Link>
  );
};

export { CalendarButton };
