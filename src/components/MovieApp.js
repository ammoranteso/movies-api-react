import React from 'react';
import { AppRouter } from '../router/AppRouter';
import { interceptor } from '../utils/interceptors';

export const MovieApp = () => {
  interceptor();
  return (
    <>
      <AppRouter />
    </>
  );
};
