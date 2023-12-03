'use client';
import TypewriterComponent from "typewriter-effect";

export default function TypewriterTitle() {
    return (
        <TypewriterComponent
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("🚀 Supercharged Productivity.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("🤖 AI-Powered Insights.")
                    .start();
            }}
        />
    );
}