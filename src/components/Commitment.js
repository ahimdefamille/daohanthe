import React from 'react';
import { Check } from 'lucide-react';

const Commitment = () => {
  const commitments = [
    'Chi phí dịch vụ chỉ từ 1.3%',
    'Nhanh chóng, uy tín, bảo mật',
    'Không bị tính phí trong vòng 45 ngày',
    'Giảm phí 0,2% khi làm trước 3-5 ngày',
    'Giảm phí 0,2% nếu khách gửi thẻ',
    'Phục vụ tại nhà 24/7 sau 15 phút alo'
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Chúng Tôi Cam Kết</h2>
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