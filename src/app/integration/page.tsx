import { Metadata } from "next";
import NoHeaderLayout from "@/components/Layouts/NoHeaderLayout";
import { Integration } from "@/components/Integration/Integration";

export const metadata: Metadata = {
    title:
        "SentiMu",
    description: "Sentiment Analysis Dashboard of Public Feedback on UMS",
};

export default function Home() {
    return (
        <>
            <NoHeaderLayout>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col mx-auto max-w-242.5 w-full">
                        <h1 className="text-4xl font-bold text-start text-boxdark">Integration</h1>
                        <p className="text-lg text-start text-body mb-3">
                            SentiMu integration status with other platforms.
                            Lets contribute to the project and make it more powerful.
                        </p>
                        <Integration />
                    </div>

                    <div className="flex flex-col mx-auto max-w-242.5 w-full">
                        <h2 className="text-2xl font-bold text-left text-boxdark">Contributors</h2>
                        <p className="text-lg text-left text-bodydark2">
                            Thanks to all the contributors who have helped us in building this project.
                        </p>
                    </div>
                </div>
            </NoHeaderLayout>
        </>
    );
}