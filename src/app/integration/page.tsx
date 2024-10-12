import { Metadata } from "next";
import AboutLayout from "@/components/Layouts/AboutLayout";
import { Integration } from "@/components/Integration/Integration";

export const metadata: Metadata = {
    title:
        "SentiMu",
    description: "Sentiment Analysis Dashboard of Public Feedback on UMS",
};

export default function Home() {
    return (
        <>
            <AboutLayout>
                <h1 className="text-4xl font-bold text-left text-boxdark mx-auto max-w-242.5">Integration</h1>
                <p className="text-lg text-left text-bodydark2 mx-auto max-w-242.5">
                    SentiMu integration status with other platforms.
                    Lets contribute to the project and make it more powerful.
                </p>
                <Integration />

                <h2 className="text-2xl font-bold text-left text-boxdark mx-auto max-w-242.5">Contributors</h2>
                <p className="text-lg text-left text-bodydark2 mx-auto max-w-242.5">
                    Thanks to all the contributors who have helped us in building this project.
                </p>

            </AboutLayout>
        </>
    );
}