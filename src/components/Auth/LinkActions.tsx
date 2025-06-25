import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinkActionsProps {
  type: 'forgot' | 'signup';
  className?: string;
}

const LinkActions: React.FC<LinkActionsProps> = ({ type, className }) => {
  if (type === 'forgot') {
    return (
      <Button
        variant="link"
        className={cn(
          "p-0 h-auto text-xs text-muted-foreground font-medium hover:text-primary no-underline hover:no-underline",
          className
        )}
      >
        Forgot Password
      </Button>
    );
  }

  if (type === 'signup') {
    return (
      <p className={cn("text-center text-sm text-muted-foreground", className)}>
        Don't have an account?{' '}
        <Button
          variant="link"
          className="p-0 h-auto text-sm text-primary font-medium no-underline hover:no-underline"
        >
          SignUp
        </Button>
      </p>
    );
  }

  return null;
};

export default LinkActions;
