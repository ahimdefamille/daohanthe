import React from 'react';

const PricingTable = function() {
  const pricingData = [
    { range: 'Dưới 10 triệu', priceA: '2%', priceB: '2%' },
    { range: 'Thẻ Visa, Master', priceA: '1.70%', priceB: '1.80%' },
    { range: 'Thẻ JCB', priceA: '2.20%', priceB: '2.50%' },
    { range: '300 triệu trở lên', priceA: 'Liên hệ', priceB: 'Liên hệ' },
    { range: 'Một số dòng thẻ đặc biệt khác', priceA: 'Liên hệ', priceB: 'Liên hệ' },
  ];

  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-orange-500 text-white">
            {/* Apply a fixed width to the first column */}
            <th className="border border-orange-600 p-3 text-left" style={{ width: '30%' }}>Số tiền - Loại thẻ</th>
            <th className="border border-orange-600 p-3 text-center">Rút</th>
            <th className="border border-orange-600 p-3 text-center">Đáo</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map(function(row, index) {
            return (
              <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white hover:bg-orange-100 transition-colors'}>
                {/* Apply the same width style to the first column cells */}
                <td className="border border-orange-200 p-3" style={{ width: '40%' }}>{row.range}</td>
                <td className="border border-orange-200 p-3 text-center font-semibold text-orange-700">{row.priceA}</td>
                <td className="border border-orange-200 p-3 text-center font-semibold text-orange-700">{row.priceB}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
