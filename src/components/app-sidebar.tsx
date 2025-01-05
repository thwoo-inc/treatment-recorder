import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Clock, FileText, Home } from 'lucide-react';
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'ホーム',
    url: '/',
    icon: Home,
  },
  {
    title: '過去の治療',
    url: '/treatments',
    icon: Clock,
  },
  {
    title: '治療テンプレート',
    url: '/treatment-templates',
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>治療記録デモ</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon className="size-8" />
                    <span className="text-xl">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
