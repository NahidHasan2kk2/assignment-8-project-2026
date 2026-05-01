'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ children, href }) => {
 const path = usePathname();
 const isActive = path === href;
 return <Link href={href} className={`${isActive ? 'border-b-4 border-b-blue-600' : ''} btn bg-base-300`}>{children}</Link>
};

export default Navlink;