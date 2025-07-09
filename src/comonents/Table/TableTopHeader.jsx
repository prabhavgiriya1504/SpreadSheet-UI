import { FaBriefcase } from "react-icons/fa";

const TableHeaderRow = () => {
  return (
    <div className="flex sticky top-0 z-10 bg-white">
      <div className="px-2 py-1 text-lg text-[#BCBCBC] bg-gray-100 border border-[#eeeeee] text-center" style={{ width: '30px' }}>#</div>

      {/* Job Request Column */}
      <div className="relative flex items-center justify-between px-2 py-1 text-sm font-semibold text-gray-700 border border-[#eeeeee] truncate" style={{ width: '300px', minWidth: '50px', backgroundColor: 'rgb(243, 243, 243)' }}>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>
            <FaBriefcase className="text-gray-500" />
          </span>
          <span>Job Request</span>
        </div>
        <span className="cursor-pointer">
          <svg className="text-[#bcbcbc] text-lg" viewBox="0 0 24 24" height="1em" width="1em">
            <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </span>
        <div className="absolute top-0 right-0 h-full w-2 cursor-col-resize" />
      </div>

      {/* Repeating Columns */}
      {[
        { label: 'Submitted', bg: 'rgb(243, 243, 243)' },
        { label: 'Status', icon: 'check-circle', bg: 'rgb(243, 243, 243)' },
        { label: 'Submitter', bg: 'rgb(243, 243, 243)' },
        { label: 'URL', icon: 'globe', bg: 'rgb(243, 243, 243)' },
        { label: 'Assigned', bg: 'rgb(210, 224, 212)' },
        { label: 'Priority', bg: 'rgb(234, 227, 252)' },
        { label: 'Due Date', bg: 'rgb(234, 227, 252)' },
        { label: 'Est. Value', bg: 'rgb(255, 233, 224)' },
        { label: '', bg: 'rgb(243, 243, 243)' },
      ].map((col, i) => (
        <div key={i} className="relative flex items-center justify-between px-2 py-1 text-sm font-semibold text-gray-700 border border-[#eeeeee] truncate" style={{ width: '150px', minWidth: '50px', backgroundColor: col.bg }}>
          <div className="flex items-center gap-1 cursor-pointer">
            {col.icon && (typeof col.icon === 'string' && col.icon.startsWith('/') ? (
              <span><img className="w-5" src={col.icon} alt="icon" /></span>
            ) : (
              <span>
                <svg className="text-[#bcbcbc] text-lg" viewBox="0 0 24 24" height="1em" width="1em">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </span>
            ))}
            <span>{col.label}</span>
          </div>
          <div className="absolute top-0 right-0 h-full w-2 cursor-col-resize" />
        </div>
      ))}
    </div>
  );
};

export default TableHeaderRow;
