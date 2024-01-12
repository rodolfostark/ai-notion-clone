'use client';
import React from "react";
import TypewriterComponent from "typewriter-effect";

type Props = {}

// To-do: render emojis in typewriter for chrome
export default function TypewriterTitle(props: Props) {
    return (
        <TypewriterComponent
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("Supercharged Productivity.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("AI-Powered Insights.")
                    .start();
            }}
        />
    );
}