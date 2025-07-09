import React from 'react';
import './App.css';

import {MyTable} from './comonents/Table/MyTable2';
import Toolbar from './comonents/NavBar/ToolBar';
import TopHeader from './comonents/NavBar/TopHearer';
import TableHeaderRow from './comonents/Table/TableTopHeader';
import TableFooter from './comonents/Footer/Footer';
import SpreadsheetTable from './comonents/AfterNav';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top Fixed */}
      <div className="shrink-0">
        <TopHeader />
        <Toolbar />
        <SpreadsheetTable />
      </div>

      {/* Scrollable Middle */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <TableHeaderRow />
        <MyTable />
      </div>

      {/* Bottom Fixed */}
      <div className="shrink-0">
        <TableFooter />
      </div>
    </div>
  );
};

export default App;
