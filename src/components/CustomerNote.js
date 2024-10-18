import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CustomerNote = () => {
  const notes = [
    'Chúng tôi chỉ làm dịch vụ với chính chủ',
    'Cần có thẻ căn cước chính chủ',
    'Chỉ chuyển khoản thanh toán vào tài khoản chính chủ',
    'Phí sẽ được thay đổi tuỳ vào loại thẻ, thời gian, địa điểm...',
    'Biểu phí chưa bao gồm phí ship 24/7',
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-800">Xin Quý Khách Lưu Ý</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-gray-600 text-center">
            Xin cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của chúng tôi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerNote;