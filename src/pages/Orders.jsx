import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { backEndUrl } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('User not authenticated');
      return;
    }

    let userId;

    try {
      const decoded = jwtDecode(token);
      userId = decoded._id;
    } catch (err) {
      console.error('Error decoding token:', err);
      setError('Invalid token');
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backEndUrl}/api/orders/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, [backEndUrl]);

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4 rounded bg-white shadow">
            <p className="font-semibold text-lg">Order ID: {order._id}</p>
            <p className="text-sm text-gray-500 mb-2">Date: {new Date(order.createdAt).toLocaleString()}</p>
            <ul className="list-disc list-inside">
              {order.products.map((item, i) => (
                <li key={i}>
                  {item.product?.name || 'Unknown Product'} × {item.quantity}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-medium">Total: €{order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;


