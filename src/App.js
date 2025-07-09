import './App.css';
import MyTable from './comonents/Table/MyTable2.jsx';

import Toolbar from './comonents/NavBar/ToolBar.jsx';
import TopHeader from './comonents/NavBar/TopHearer.jsx';
import TableHeaderRow from './comonents/Table/TableTopHeader.jsx';
import TableFooter from './comonents/Footer/Footer.jsx';
import SpreadsheetTable from './comonents/AfterNav.jsx';

function App() {
 
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      
      {/* Top Fixed */}
      <div className="shrink-0">
        <TopHeader />
        <Toolbar />

        <SpreadsheetTable />
      </div>

      {/* Scrollable Middle (Scrollbar hidden) */}
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
}



export default App;
