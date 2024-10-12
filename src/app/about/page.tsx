import { Metadata } from "next";
import AboutLayout from "@/components/Layouts/AboutLayout";
import About from "@/components/Pages/AboutPage";

export const metadata: Metadata = {
  title:
    "SentiMu",
  description: "Sentiment Analysis Dashboard of Public Feedback on UMS",
};

export default function Home() {
  return (
    <>
      <AboutLayout>
        <About />
      </AboutLayout>
    </>
  );
}