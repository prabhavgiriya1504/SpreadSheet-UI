import React, { useState } from 'react';

const TableFooter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All Orders');

  // Function to handle click on a tab
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    console.log(`Tab clicked: ${tabName}`);
  };

  const tabs: string[] = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="w-full flex text-sm bg-[#e6f4ea] border-t border-[#d0e9d6] absolute bottom-0">
      {/* Alignment space for the first column */}
      <div className="w-7"></div>

      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === tab
              ? 'bg-[#d7ecd7] border-r border-[#d0e9d6] text-[#288a44] font-medium'
              : 'text-[#616161]'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}

      {/* '+' button remains static */}
      <div className="px-4 py-2 text-[#616161] font-semibold cursor-pointer">+</div>
    </div>
  );
};

export default TableFooter;
