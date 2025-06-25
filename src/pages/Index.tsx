import React from 'react';
import LoginCard from '@/components/Auth/LoginCard';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * IndexPage component serving as the main login page for the application.
 * It uses the `MainAppLayout` to create a full-screen, centered container
 * and renders the `LoginCard` as the main content.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
