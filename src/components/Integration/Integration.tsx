"use client";

import React, { forwardRef, useRef } from "react";
import { Icons } from "@/assets/Assets";
import { AnimatedBeam } from "./AnimatedBeam";
import { cn } from "@/utils/data";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function Integration({
    className,
}: {
    className?: string;
}) {
    const container = useRef<HTMLDivElement>(null);
    const x = useRef<HTMLDivElement>(null);
    const maps = useRef<HTMLDivElement>(null);
    const tiktok = useRef<HTMLDivElement>(null);
    const instagram = useRef<HTMLDivElement>(null);
    const telegram = useRef<HTMLDivElement>(null);
    const sentimu = useRef<HTMLDivElement>(null);
    const user = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 mx-auto max-w-242.5 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark",
                className,
            )}
            ref={container}
        >
            <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={x}>
                        <Icons.x />
                    </Circle>
                    <Circle ref={maps}>
                        <Icons.maps />
                    </Circle>
                    <Circle ref={tiktok}>
                        <Icons.tiktok />
                    </Circle>
                    <Circle ref={instagram}>
                        <Icons.instagram />
                    </Circle>
                    <Circle ref={telegram}>
                        <Icons.telegram />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={sentimu} className="size-16">
                        <Icons.sentimu />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={user}>
                        <Icons.user />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={container}
                fromRef={x}
                toRef={x}
            />
            <AnimatedBeam
                containerRef={container}
                fromRef={maps}
                toRef={sentimu}
            />
            <AnimatedBeam
                containerRef={container}
                fromRef={tiktok}
                toRef={tiktok}
            />
            <AnimatedBeam
                containerRef={container}
                fromRef={instagram}
                toRef={instagram}
            />
            <AnimatedBeam
                containerRef={container}
                fromRef={telegram}
                toRef={telegram}
            />
            <AnimatedBeam
                containerRef={container}
                fromRef={sentimu}
                toRef={user}
            />
        </div>
    );
}