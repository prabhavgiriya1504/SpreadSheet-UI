import React, { useState } from 'react';
import { Bell } from 'lucide-react'; // Assuming you have lucide-react installed

const TopHeader = () => {
  // State for search input
  const [searchValue, setSearchValue] = useState('');
  // State for notification count
  const [notificationCount, setNotificationCount] = useState(2); // Initial count from your example

  // Handler for search input changes
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log('Search value:', event.target.value);
    // In a real app, you'd trigger a search function here, possibly debounced
  };

  // Handler for notification bell click
  const handleBellClick = () => {
    console.log('Notification bell clicked!');
    // This could toggle a notification dropdown/modal
    // For demonstration, let's clear notifications on click
    setNotificationCount(0);
    alert('Notifications clicked! Count reset to zero.');
  };

  // Handler for user profile click
  const handleProfileClick = () => {
    console.log('User profile clicked!');
    // This could open a user dropdown menu, navigate to profile page, or logout options
    alert('User profile clicked!');
  };

  // Handler for breadcrumb clicks (simulated navigation)
  const handleBreadcrumbClick = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, you'd use a router, e.g., history.push(path) or navigate(path)
    alert(`Navigating to ${path}.`);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b shadow-sm">
      {/* Left side directory */}
      <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
        <div className="w-5 h-4 border-solid border-gray-950 bg-green-400 rounded-sm">
          <div className='mt-0.5 ml-0.5 w-2.5 h-3 bg-yellow-50 rounded-sm'></div>
        </div>
        <span
          className="cursor-pointer hover:text-black hover:underline"
          onClick={() => handleBreadcrumbClick('/workspace')}
        >
          Workspace
        </span>
        <span>&gt;</span>
        <span
          className="cursor-pointer hover:text-black hover:underline"
          onClick={() => handleBreadcrumbClick('/workspace/folder2')}
        >
          Folder 2
        </span>
        <span>&gt;</span>
        <span
          className="font-semibold text-black cursor-pointer" // This might not be clickable if it's the current page
          onClick={() => handleBreadcrumbClick('/workspace/folder2/spreadsheet3')}
        >
          Spreadsheet 3
        </span>
      </div>

      {/* Right: Search, Bell Icon, Profile */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search within sheet"
          value={searchValue} // Controlled component
          onChange={handleSearchChange} // Handle input changes
          className="px-2 py-1 border rounded-md text-sm outline-none focus:ring-1 focus:ring-gray-400"
        />

        {/* Notification Bell with badge */}
        <div
          className="relative cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={handleBellClick}
        >
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && ( // Conditionally render badge
            <span className="absolute -top-1 -right-1 text-xs bg-green-600 text-white rounded-full px-1 min-w-[16px] text-center">
              {notificationCount}
            </span>
          )}
        </div>

        {/* User Avatar */}
        <div
          className="flex items-center space-x-1 cursor-pointer p-.5 rounded-md hover:bg-gray-100 transition-colors"
          onClick={handleProfileClick}
        >
          <img
            src="https://i.pravatar.cc/30?img=3" // you can replace this with an actual avatar
            alt="John Doe"
            className="w-7 h-7 rounded-full"
          />
          
          <span className="text-sm font-medium text-gray-700 flex flex-col leading-none"><span>John Doe</span><small>john.doe...</small></span>
          
        </div>
      </div>
    </div>
  );
};

export default TopHeader;