import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="font-sans">
      <Outlet />
    </div>
  );
};

export default RootLayout;
