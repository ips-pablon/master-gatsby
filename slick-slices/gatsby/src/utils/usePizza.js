import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create some state to hold our order
  // const [order, setOrder] = useState([]); // We got rid of this line we because we moved useState provider
  // Now access both our state and updater function (setOrder) via context
  const [order, setOrder] = useContext(OrderContext);

  // 2. Make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to a serverless function when they check out.=
  // TODO:

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
