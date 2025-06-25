import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A simple layout component that centers its children in the middle of the screen.
 * It applies a full-screen height and uses flexbox for alignment.
 * The background color is inherited from the body, as defined in `src/index.css`.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
