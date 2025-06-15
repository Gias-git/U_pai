"use client";
import { usePathname } from "next/navigation";
import Breadcrumb_navigation from "./Breadcrumb_navigation";


const Breadcrumb = () => {
  const pathname = usePathname(); // e.g. "/medicine/antimicrobial"
  const pathParts = pathname.split("/").filter((part) => part); // ["medicine", "antimicrobial"]

  const items = [
    { label: "Home", href: "/" },
    ...pathParts.map((part, index) => {
      const href = "/" + pathParts.slice(0, index + 1).join("/");
      const label = part.replace(/-/g, " ");
      return {
        label: label.charAt(0).toUpperCase() + label.slice(1),
        href: index === pathParts.length - 1 ? undefined : href, // disable link for last
      };
    }),
  ];

  return (
    <div className="">
      <Breadcrumb_navigation items={items} />
      {/* Your page content */}
    </div>
  );
};

export default Breadcrumb;
