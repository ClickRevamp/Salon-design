'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';

interface NavHashLinkProps {
  href: string;
  anchor: string;
  children: ReactNode;
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

export default function NavHashLink({ 
  href, 
  anchor, 
  children, 
  className,
  ...props 
}: NavHashLinkProps) {
  const pathname = usePathname();
  const locale = useLocale();
  
  const handleClick = (e: React.MouseEvent) => {
    // Check if we're already on the target page
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const targetPath = href === '/' ? '/' : href;
    
    if (currentPath === targetPath) {
      // We're on the same page, prevent navigation and scroll instead
      e.preventDefault();
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    // Otherwise, let the Link handle navigation to href#anchor
  };

  return (
    <Link
      href={`${href}#${anchor}`}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
