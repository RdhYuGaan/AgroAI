'use client'

import React, { useEffect, useState } from "react";
import { useLoading } from "../context/loadingContext";

const TopHorizontalLoader = () => {
    const { isLoading } = useLoading(); // Access global loading state
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false); // Controls loader visibility

    useEffect(() => {
        let interval;
        if (isLoading) {
            setVisible(true); // Show the loader
            setProgress(0); // Reset progress
            interval = setInterval(() => {
                setProgress((prev) => (prev < 90 ? prev + 10 : prev)); // Simulate progress
            }, 300); // Increment progress every 300ms
        } else {
            setProgress(100); // Complete progress
            setTimeout(() => {
                setVisible(false); // Hide loader after completion
                setProgress(0); // Reset progress for the next operation
            }, 500); // Delay to show 100% completion
        }

        return () => clearInterval(interval); // Cleanup interval on unmount or stop
    }, [isLoading]);

    // Don't render if loader is not visible
    if (!visible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-2 bg-green-500 z-50">
            <div
                className={`h-full bg-green-500 transition-all duration-300 ease-in-out`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default TopHorizontalLoader;
