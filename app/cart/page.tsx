'use client';
import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState('');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-pink-400 mb-4">Your Cart</h2>

      {toast && (
        <div className="bg-green-600 text-white px-4 py-2 mb-4 rounded text-center shadow">
          {toast}
        </div>
      )}

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex gap-4 items-center bg-gray-800 p-4 rounded-lg shadow justify-between">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                  <div>
                    <h3 className="text-lg font-semibold text-pink-300">{item.title}</h3>
                    <p className="text-sm text-gray-300">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          updateQuantity(item.id, item.quantity - 1);
                          showToast('Quantity decreased');
                        }}
                        className="px-2 bg-pink-500 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => {
                          updateQuantity(item.id, item.quantity + 1);
                          showToast('Quantity increased');
                        }}
                        className="px-2 bg-pink-500 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    showToast('Item removed');
                  }}
                  className="text-sm text-red-400 hover:text-red-600 underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="mb-2 text-lg text-pink-200 font-medium">Total Items: {totalItems}</p>
            <p className="mb-4 text-lg text-green-300 font-semibold">Total: ${totalCost.toFixed(2)}</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white text-black p-6 rounded shadow-xl w-[300px] text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Checkout</h3>
            <p className="mb-6 text-sm">
              Are you sure you want to place the order for {totalItems} item(s) totaling ${totalCost.toFixed(2)}?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  window.location.href = '/confirmation';
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}