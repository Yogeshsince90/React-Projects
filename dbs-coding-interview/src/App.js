import './App.css';
import {useState, } from 'react';


function App() {
  const input= ["play cricket", "play video game", "read book"]
  const [data,setData] = useState(input);

  const [deleteEnable, setDeleteEnable] = useState(input.map( () => {return false} ));



  
  const deleteItemHandler = (index) => {
    setDeleteEnable(deleteEnable.filter((value, i) => index !== i));
    setData(data.filter((value, i) => index !== i));
    

  }

  const enableDeleteHandler = (index, val) => {
    if(val){
      setDeleteEnable(deleteEnable.map((value, i)=> {
        if(i=== index && val) return true;
        else if (i=== index && !val) return false;
        return value;
      }));
    }
  }

  return (
    <div className="App">
      Hello
      {console.log(data)}
      {data.map((a,i) => {
        return(
        <div key={i}>
          <input type="checkbox" id={i} onClick={(event) => enableDeleteHandler(i, event.target.checked)}/>
          <span>{a}</span> 
            {deleteEnable[i] ?<button type="button" onClick={()=>deleteItemHandler(i)}>Delete</button>:''}
        </div>
        )
      })}
    </div>  
  );
}

export default App;
