import React, { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import {
  MdOutlineKeyboardArrowRight,
  MdVisibilityOff,
  MdVisibility, // For showing fields
  MdFilterList,
  MdViewComfy,
  MdCloudUpload,
  MdCloudDownload,
  MdShare,
  MdAdd,
  MdKeyboardArrowDown, // For dropdowns/active states
} from 'react-icons/md';

const Toolbar = () => {
  // State for interactive elements
  const [fieldsHidden, setFieldsHidden] = useState(false);
  const [sortActive, setSortActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [cellViewActive, setCellViewActive] = useState(false); // Assuming cell view can be toggled/active

  // Handlers for click events
  const handleHideFieldsToggle = () => {
    setFieldsHidden(!fieldsHidden);
    console.log(`Fields ${fieldsHidden ? 'shown' : 'hidden'}`);
    // In a real app, this would trigger an action to hide/show actual data columns
  };

  const handleSortToggle = () => {
    setSortActive(!sortActive);
    console.log(`Sort option ${sortActive ? 'deactivated' : 'activated'}`);
    // This would likely open a sort dialog or apply a default sort
  };

  const handleFilterToggle = () => {
    setFilterActive(!filterActive);
    console.log(`Filter option ${filterActive ? 'deactivated' : 'activated'}`);
    // This would likely open a filter sidebar or dialog
  };

  const handleCellViewToggle = () => {
    setCellViewActive(!cellViewActive);
    console.log(`Cell view ${cellViewActive ? 'deactivated' : 'activated'}`);
    // This would likely change the display mode of your data
  };

  const handleImport = () => {
    console.log('Import clicked - Triggering import process/modal...');
    // Add your import logic here (e.g., open file picker, API call)
  };

  const handleExport = () => {
    console.log('Export clicked - Triggering export download...');
    // Add your export logic here (e.g., generate CSV/Excel, trigger download)
  };

  const handleShare = () => {
    console.log('Share clicked - Opening share dialog...');
    // Add your share logic here (e.g., copy link, open social share options)
  };

  const handleNewAction = () => {
    console.log('New Action clicked - Creating new item/record...');
    // Add your new action logic here (e.g., open new form, navigate to create page)
  };

  return (
    <div className="flex items-center justify-between bg-white p-2 border-b border-gray-200 shadow-sm">
      {/* Left section: Toolbar options */}
      <div className="flex items-center space-x-6">
        {/* Tool bar (fixed text) */}
        <div className="flex items-center text-black-700">
          <span className="font-medium">Tool bar</span>
          <MdOutlineKeyboardArrowRight className="ml-1 text-xl" />
        </div>

        {/* Hide Fields / Show Fields Toggle */}
        <div
          className={`flex items-center cursor-pointer px-3 py-1 rounded-md transition-colors duration-200
            ${fieldsHidden ? 'bg-gray-100 text-black-900' : 'text-black-700 hover:bg-gray-50'}`}
          onClick={handleHideFieldsToggle}
        >
          {fieldsHidden ? <MdVisibility className="mr-1 text-lg" /> : <MdVisibilityOff className="mr-1 text-lg" />}
          <span>{fieldsHidden ? 'Show Fields' : 'Hide Fields'}</span>
        </div>

        {/* Sort Toggle */}
        <div
          className={`flex items-center cursor-pointer px-3 py-1 rounded-md transition-colors duration-200
            ${sortActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
          onClick={handleSortToggle}
        >
         <BiSortAlt2 className='size-5 text-black'/>
          <span>Sort</span>
        </div>

        {/* Filter Toggle */}
        <div
          className={`flex items-center cursor-pointer px-3 py-1 rounded-md transition-colors duration-200
            ${filterActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-black-700 hover:bg-gray-50'}`}
          onClick={handleFilterToggle}
        >
          <MdFilterList className="mr-1 text-lg" />
          <span>Filter</span>
          {filterActive && <MdKeyboardArrowDown className="ml-1 text-lg" />} {/* Optional indicator */}
        </div>

        {/* Cell view Toggle */}
        <div
          className={`flex items-center cursor-pointer px-3 py-1 rounded-md transition-colors duration-200
            ${cellViewActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-black-700 hover:bg-gray-50'}`}
          onClick={handleCellViewToggle}
        >
          <MdViewComfy className="mr-1 text-lg" />
          <span>Cell view</span>
        </div>
      </div>

      {/* Right section: Action buttons */}
      <div className="flex items-center space-x-3">
        <button
          className="flex items-center px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          onClick={handleImport}
        >
          <MdCloudUpload className="mr-2 text-lg" />
          Import
        </button>

        <button
          className="flex items-center px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          onClick={handleExport}
        >
          <MdCloudDownload className="mr-2 text-lg" />
          Export
        </button>

        <button
          className="flex items-center px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          onClick={handleShare}
        >
          <MdShare className="mr-2 text-lg" />
          Share
        </button>

        <button
          className="flex items-center px-3 py-1 bg-green-700 text-white rounded-md shadow-sm
                     hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          onClick={handleNewAction}
        >
          <MdAdd className="mr-2 text-lg" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;