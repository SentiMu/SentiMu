import { Metadata } from "next";
import NoHeaderLayout from "@/components/Layouts/NoHeaderLayout";
import About from "@/components/Pages/AboutPage";

export const metadata: Metadata = {
  title:
    "SentiMu",
  description: "Sentiment Analysis Dashboard of Public Feedback on UMS",
};

export default function Home() {
  return (
    <>
      <NoHeaderLayout>
        <About />
      </NoHeaderLayout>
    </>
  );
}