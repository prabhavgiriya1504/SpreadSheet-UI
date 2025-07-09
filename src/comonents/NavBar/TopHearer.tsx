import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Bell } from 'lucide-react';

const TopHeader: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [notificationCount, setNotificationCount] = useState<number>(2);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log('Search value:', event.target.value);
  };

  const handleBellClick = () => {
    console.log('Notification bell clicked!');
    setNotificationCount(0);
    alert('Notifications clicked! Count reset to zero.');
  };

  const handleProfileClick = () => {
    console.log('User profile clicked!');
    alert('User profile clicked!');
  };

  const handleBreadcrumbClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
    alert(`Navigating to ${path}.`);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b shadow-sm">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
        <div className="w-5 h-4 border-solid border-gray-950 bg-green-400 rounded-sm">
          <div className="mt-0.5 ml-0.5 w-2.5 h-3 bg-yellow-50 rounded-sm"></div>
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
          className="font-semibold text-black cursor-pointer"
          onClick={() => handleBreadcrumbClick('/workspace/folder2/spreadsheet3')}
        >
          Spreadsheet 3
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search within sheet"
          value={searchValue}
          onChange={handleSearchChange}
          className="px-2 py-1 border rounded-md text-sm outline-none focus:ring-1 focus:ring-gray-400"
        />

        <div
          className="relative cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={handleBellClick}
        >
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-green-600 text-white rounded-full px-1 min-w-[16px] text-center">
              {notificationCount}
            </span>
          )}
        </div>

        <div
          className="flex items-center space-x-1 cursor-pointer p-0.5 rounded-md hover:bg-gray-100 transition-colors"
          onClick={handleProfileClick}
        >
          <img
            src="https://i.pravatar.cc/30?img=3"
            alt="John Doe"
            className="w-7 h-7 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 flex flex-col leading-none">
            <span>Prabhav Giriya</span>
            <small>prab@giriya...</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
