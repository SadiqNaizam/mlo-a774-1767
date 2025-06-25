import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormFields from './FormFields';
import LoginButton from './LoginButton';
import LinkActions from './LinkActions';

const LoginCard: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt...');
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-96 bg-card text-card-foreground border-none shadow-lg rounded-lg">
      <CardHeader className="text-center pt-8 pb-6">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-4">
        <form onSubmit={handleLogin}>
          <div className="space-y-6">
            <FormFields />
            <div className="flex flex-col gap-4 pt-1">
               <div className="self-start -mt-2">
                  <LinkActions type="forgot" />
               </div>
              <LoginButton type="submit" isLoading={isLoading}>
                Login
              </LoginButton>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center pb-8 pt-2">
        <LinkActions type="signup" />
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
