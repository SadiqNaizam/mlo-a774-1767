import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormFields: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="text-sm text-muted-foreground font-medium">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          className="border-0 border-b border-input rounded-none px-0.5 h-9 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-sm text-muted-foreground font-medium">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          className="border-0 border-b border-input rounded-none px-0.5 h-9 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>
    </div>
  );
};

export default FormFields;
