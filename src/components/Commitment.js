import React from 'react';
import { Check } from 'lucide-react';

const Commitment = () => {
  const commitments = [
    'Rút toàn bộ số tiền trong thẻ',
    'Phí cạnh tranh chỉ từ 1,4%',
    'Quy trình nhanh gọn, nhận tiền ngay sau khi cà thẻ',
    'Phục vụ tận nơi theo địa chỉ bạn yêu cầu',
    'Dịch vụ hỗ trợ hàng tháng',
    'Miễn lãi đến 45 ngày',
    'An toàn - Bảo mật thông tin khách hàng'
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Dịch Vụ Của Chúng Tôi Đảm Bảo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">{commitment}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;