import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const LoginButton = React.forwardRef<HTMLButtonElement, LoginButtonProps>(
  ({ className, children, isLoading, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-10 text-base font-medium",
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </Button>
    );
  }
);

LoginButton.displayName = 'LoginButton';

export default LoginButton;
