import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Admin Calendar | Sempoi",
  description: "Admin Calendar",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
