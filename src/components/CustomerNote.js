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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerNote;
