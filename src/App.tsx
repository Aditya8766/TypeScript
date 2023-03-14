import { useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import './App.css';
import BasicRender from './components/BasicRender';
import EnhancedTable from './components/DataGrid';
import DataTable from './components/DataGrid';


function App() {
  const [heading,setHeading]=useState("MyReactApp");

function handelHeadingChange(text:any){
  setHeading(text);
}
  return (
    <div className="App">
      <BasicRender
        heading={heading}
        handelHeadingChange={handelHeadingChange}
      />
      <EnhancedTable/>
    </div>
  );
}

export default App;
