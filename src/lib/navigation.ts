import { FolderOpen, Home, Lock, Send, Trophy } from "@/components/icons";
import type { Dictionary, NavItem } from "@/types";

export function getNavItems(dict: Dictionary): readonly NavItem[] {
  const d = dict.sidebar;
  return [
    { name: d.home, path: `/`, exact: true, icon: Home },
    {
      name: d.freeDrops,
      path: `/free-drops`,
      exact: false,
      icon: FolderOpen,
      count: 21,
    },
    {
      name: d.vipDrops,
      path: `/vip-drops`,
      exact: false,
      icon: Lock,
    },
    { name: d.wins, path: `/wins`, exact: false, icon: Trophy },
    { name: d.submit, path: `/submit`, exact: false, icon: Send },
  ];
}
