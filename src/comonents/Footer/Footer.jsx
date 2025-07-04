// components/TableFooter.jsx
import React, { useState } from 'react';

const TableFooter = () => {
  // State to keep track of the active tab. Initialize with 'All Orders' as default.
  const [activeTab, setActiveTab] = useState('All Orders');

  // Function to handle click on a tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`Tab clicked: ${tabName}`); // Optional: log which tab was clicked
  };

  return (
    <div className="w-full flex text-sm bg-[#e6f4ea] border-t border-[#d0e9d6] absolute bottom-0">
      {/* This div seems to be for alignment with the table's first column, so keep it */}
      <div className='w-7'></div>

      <div
        className={`px-4 py-2 cursor-pointer ${
          activeTab === 'All Orders'
            ? 'bg-[#d7ecd7] border-r border-[#d0e9d6] text-[#288a44] font-medium'
            : 'text-[#616161]'
        }`}
        onClick={() => handleTabClick('All Orders')}
      >
        All Orders
      </div>

      <div
        className={`px-4 py-2 cursor-pointer ${
          activeTab === 'Pending'
            ? 'bg-[#d7ecd7] border-r border-[#d0e9d6] text-[#288a44] font-medium' // Assuming same active style
            : 'text-[#616161]'
        }`}
        onClick={() => handleTabClick('Pending')}
      >
        Pending
      </div>

      <div
        className={`px-4 py-2 cursor-pointer ${
          activeTab === 'Reviewed'
            ? 'bg-[#d7ecd7] border-r border-[#d0e9d6] text-[#288a44] font-medium' // Assuming same active style
            : 'text-[#616161]'
        }`}
        onClick={() => handleTabClick('Reviewed')}
      >
        Reviewed
      </div>

      <div
        className={`px-4 py-2 cursor-pointer ${
          activeTab === 'Arrived'
            ? 'bg-[#d7ecd7] border-r border-[#d0e9d6] text-[#288a44] font-medium' // Assuming same active style
            : 'text-[#616161]'
        }`}
        onClick={() => handleTabClick('Arrived')}
      >
        Arrived
      </div>

      {/* The '+' div remains static */}
      <div className="px-4 py-2 text-[#616161] font-semibold cursor-pointer">+</div>
    </div>
  );
};

export default TableFooter;