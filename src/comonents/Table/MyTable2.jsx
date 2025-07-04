import React, { useState } from 'react';

// This component represents a single row in your table
const TableRow = ({ item, focusedCell, setFocusedCell }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'In-process':
        return 'bg-[#FFF3D6] text-[#85640B]';
      case 'Need to start':
        return 'bg-[#E2E8F0] text-[#475569]';
      case 'Complete':
        return 'bg-[#D3F2E2] text-[#0A6E3D]';
      case 'Blocked':
        return 'bg-[#FFE1DE] text-[#C22219]';
      default:
        return '';
    }
  };

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-[#EF4D44]';
      case 'Medium':
        return 'text-[#C29210]';
      case 'Low':
        return 'text-[#1A8CFF]';
      default:
        return '';
    }
  };

  // Function to handle cell clicks
  const handleCellClick = (e, cellId) => {
    setFocusedCell({ rowId: item.id, cellId: cellId });
    const rect = e.currentTarget.getBoundingClientRect();
    console.log(`Clicked Cell (Row ID: ${item.id}, Cell ID: ${cellId}):`);
    console.log(`  Top: ${rect.top}, Left: ${rect.left}`);
    console.log(`  Right: ${rect.right}, Bottom: ${rect.bottom}`);
    console.log(`  Width: ${rect.width}, Height: ${rect.height}`);
    console.log('---');
  };

  // Helper to check if a cell is focused
  const isCellFocused = (cellId) =>
    focusedCell && focusedCell.rowId === item.id && focusedCell.cellId === cellId;

  return (
    <div className="flex text-sm h-[36px]">
      <div
        className={`px-2 py-1 text-center bg-gray-50 border-r border-[#eeeeee] text-[#757575] font-medium w-[50px]
          ${isCellFocused('id') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '30px', minWidth: '30px', maxWidth: '30px' }}
        onClick={(e) => handleCellClick(e, 'id')}
      >
        {item.id}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-left border border-[#f6f6f6]
          ${isCellFocused('taskName') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '303px', minWidth: '30px', maxWidth: '300px' }}
        onClick={(e) => handleCellClick(e, 'taskName')}
      >
        {item.taskName}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-right border ${item.id === 2 ? 'border-[2px] border-[#6C8B70] shadow-[0_0_0_2px_rgba(0,128,0,0.2)] z-10 bg-white' : 'border-[#f6f6f6]'}
          ${isCellFocused('startDate') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '152px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'startDate')}
      >
        {item.startDate}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer flex items-center justify-center text-center border border-[#f6f6f6]
          ${isCellFocused('status') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '153px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'status')}
      >
        {item.status && (
          <span className={`font-medium py-1 px-2 text-xs rounded-2xl justify-center ${getStatusClasses(item.status)}`}>
            {item.status}
          </span>
        )}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-left border border-[#f6f6f6]
          ${isCellFocused('assignedTo') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '153px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'assignedTo')}
      >
        {item.assignedTo}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-left border border-[#f6f6f6]
          ${isCellFocused('link') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '150px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'link')}
      >
        {item.link && <span className="underline">{item.link}</span>}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-left border border-[#f6f6f6]
          ${isCellFocused('reporter') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '154px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'reporter')}
      >
        {item.reporter}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer flex items-center justify-center text-center border border-[#f6f6f6]
          ${isCellFocused('priority') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '149px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'priority')}
      >
        {item.priority && (
          <span className={`font-semibold ${getPriorityClasses(item.priority)}`}>
            {item.priority}
          </span>
        )}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-right border border-[#f6f6f6]
          ${isCellFocused('dueDate') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '150px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'dueDate')}
      >
        {item.dueDate}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer text-right border border-[#f6f6f6]
          ${isCellFocused('budget') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{ width: '150px', minWidth: '30px', maxWidth: '150px' }}
        onClick={(e) => handleCellClick(e, 'budget')}
      >
        {item.budget && (
          <span>
            {item.budget.toLocaleString('en-IN')}
            <span className="text-[#AFAFAF] mx-1">₹</span>
          </span>
        )}
      </div>
      <div
        className={`px-2 py-1 truncate overflow-hidden box-border cursor-pointer flex items-center justify-center text-center border border-[#f6f6f6]
          ${isCellFocused('actions') ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
        style={{
          width: '150px',
          minWidth: '30px',
          maxWidth: '150px',
          borderStyle: 'solid dashed',
          borderColor: 'rgb(246, 246, 246) rgb(203, 203, 203)',
          borderLeftWidth: '2px',
          borderRightWidth: '2px',
        }}
        onClick={(e) => handleCellClick(e, 'actions')}
      >
        {item.id === 1 && <span className="italic text-sm text-white">...</span>}
      </div>
    </div>
  );
};

// This is your main component that will render the table
const MyTable = () => {
  // State to keep track of the currently focused cell
  // It will store an object like { rowId: 2, cellId: 'startDate' }
  const [focusedCell, setFocusedCell] = useState(null);

  const data = [
    {
      id: 1,
      taskName: 'Launch social media campaign for product',
      startDate: '15-11-2024',
      status: 'In-process',
      assignedTo: 'Aisha Patel',
      link: 'www.aishapatel.com',
      reporter: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-11-2024',
      budget: 6200000,
    },
    {
      id: 2,
      taskName: 'Update press kit for company redesign',
      startDate: '28-10-2024',
      status: 'Need to start',
      assignedTo: 'Irfan Khan',
      link: 'www.irfankhan.com',
      reporter: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      budget: 3500000,
    },
    {
      id: 3,
      taskName: 'Finalize user testing feedback for application',
      startDate: '05-12-2024',
      status: 'In-process',
      assignedTo: 'Mark Johnson',
      link: 'www.markjohnson.com',
      reporter: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      budget: 4750000,
    },
    {
      id: 4,
      taskName: 'Design financial report for Q4',
      startDate: '10-01-2025',
      status: 'Complete',
      assignedTo: 'Emily Green',
      link: 'www.emilygreen.com',
      reporter: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      budget: 5900000,
    },
    {
      id: 5,
      taskName: 'Prepare financial report for Q4',
      startDate: '25-01-2025',
      status: 'Blocked',
      assignedTo: 'Jessica Brown',
      link: 'www.jessicabrown.com',
      reporter: 'Kevin Smith',
      priority: 'Low',
      dueDate: '30-01-2025',
      budget: 2800000,
    },
    // Dynamically generate blank entries up to ID 100
    ...Array.from({ length: 95 }, (_, index) => ({
      // Start ID from 6 (since 1-5 are already defined)
      id: index + 6,
      taskName: '',
      startDate: '',
      status: '',
      assignedTo: '',
      link: '',
      reporter: '',
      priority: '',
      dueDate: '',
      budget: '',
    })),
  ];

  return (
    <div
      tabIndex="0"
      className="w-full max-h-[calc(100vh-180px)] overflow-y-scroll scrollbar-hide will-change-transform"
    >
      {data.map((item) => (
        <TableRow
          key={item.id}
          item={item}
          focusedCell={focusedCell}
          setFocusedCell={setFocusedCell}
        />
      ))}
    </div>
  );
};

export default MyTable;