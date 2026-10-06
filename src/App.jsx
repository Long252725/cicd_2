import React, { useState } from 'react';
import { calculateTotal } from './utils/math';

export default function App() {
  const [price] = useState(20000);
  const [shippingFee] = useState(30000);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Giỏ hàng của bạn</h1>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Tiền sản phẩm:</span>
            <span>{price.toLocaleString()} VNĐ</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Phí vận chuyển:</span>
            <span>{shippingFee.toLocaleString()} VNĐ</span>
          </div>
        </div>

        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
          <span className="font-semibold text-blue-800">Tổng thanh toán:</span>
          <span className="font-bold text-xl text-blue-600">
            {calculateTotal(price, shippingFee).toLocaleString()} VNĐ
          </span>
        </div>
        
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
          Thanh toán ngay
        </button>
      </div>
    </div>
  );
}