'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();

export default function RootUserClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <QueryClientProvider client={queryClient}>
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
    // </QueryClientProvider>
  );
}
