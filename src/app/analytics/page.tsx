import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Pages/AnalyticsPage";

export const metadata: Metadata = {
  title:
    "SentiMu",
  description: "Sentiment Analysis Dashboard of Public Feedback on UMS",
};

export default function Home() {
  return (
    <div className="overflow-y-hidden">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}