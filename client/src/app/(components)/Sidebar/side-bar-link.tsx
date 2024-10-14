import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { cn } from "@/app/utils/classnames";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-3 transition-colors hover:bg-blue-100 hover:text-blue-500",
          {
            "justify-center py-4": isCollapsed, // 사이드 접힌 경우
            "justify-start px-8 py-4": !isCollapsed,
            "bg-blue-200 text-white": isActive,
          },
        )}
      >
        <Icon className="h-6 w-6 !text-gray-700" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SidebarLink;
