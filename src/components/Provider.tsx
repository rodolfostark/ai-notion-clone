'use client'
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProviderProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Provider({ children }: ProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}