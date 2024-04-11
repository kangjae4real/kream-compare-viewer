"use client";

import { QueryClient, QueryClientProvider as QueryProvider, QueryClientProviderProps } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function QueryClientProvider({ children, ...props }: Omit<QueryClientProviderProps, "client">) {
  return (
    <QueryProvider client={queryClient} {...props}>
      {children}
    </QueryProvider>
  );
}
