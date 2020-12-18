import React from 'react';
import Layout from './src/components/Layouts';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
