import './App.css';
import MyTable from './comonents/Table/MyTable2.jsx';

import Toolbar from './comonents/NavBar/ToolBar.jsx';
import TopHeader from './comonents/NavBar/TopHearer.jsx';
import TableHeaderRow from './comonents/Table/TableTopHeader.jsx';
import TableFooter from './comonents/Footer/Footer.jsx';
import SpreadsheetTable from './comonents/AfterNav.jsx';

function App() {
  return (
    <div className="App">
      
      <TopHeader className="fixed top-0"/>
      <Toolbar />
      
      <SpreadsheetTable />
      <TableHeaderRow />
      <MyTable />
      <TableFooter />      
    </div>
  );
}

export default App;
