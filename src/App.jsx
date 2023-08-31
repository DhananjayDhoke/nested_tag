
 import './App.css'
 import data from "../data.json"
import  { useState } from 'react';
import {TreeNode} from "./components/TreeNode"
const App = () => {

  const [showjson, setShowJson] = useState(false);

  const handelJsonShow = ()=>{
    setShowJson(!showjson)
  }
    return (
        <div>
            <TreeNode node={data} />
            <button onClick={handelJsonShow}>Export</button>
            {showjson && <div >{JSON.stringify(data)}</div>}
        </div>
    );
};

export default App;


