import React, {useState} from 'react'
import './App.css';

function App() {
  const [input, setInput]=useState('')
  const [arr, setArr]=useState([])

  const addNumber = () => {
    setArr([...arr, input])
    setInput('')
  }

  const reset = () => {
    window.location.reload()
  }

  return (
    <div className="App">
    <h1 style={{ color: 'blue', margin: '20px' }}>Bubble Sort</h1>
    <div style={{
                display: 'flex',
                justifyContent:'center',
                alignContent:'center',
                flexDirection: 'row',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                marginLeft: '300px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }} >
      {bubbleSort(arr).map((e, index) => (
        <p style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }} key={index}>{e}</p>))}
    </div>
    <div>
      <input 
        type="number"
        value={input}
        placeholder="type here..."
        onChange={e => setInput(+e.target.value)}
      />
      <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }} onClick={addNumber}>Add</button>
      <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }} onClick={reset}>Reset</button>
    </div>
      
    </div>
  );
}

export default App;


// const bubbleSort = (arr) =>{

//   for(let i=0; i< arr.length; i++){
//     for(let j=0; j< arr.length-i-1; j++){
//       if(arr[j+1]< arr[j]){
//         [arr[j+1], arr[j]]= [arr[j], arr[j+1]]
//       }
//     }
//   };
//   return arr;
// }

const bubbleSort = (arr)=>{
  let i, j;
  let len = arr.length;
  let isSwapped = false;

  for(i=0; i < len; i++){
    isSwapped = false;
    for(j= 0; j<len;j++){
      if(arr[j]> arr[j+1]){
        let temp = arr[j]
        arr[j]=arr[j+1];
        arr[j+1] = temp;
        isSwapped= true;
      }
    }
    if(!isSwapped){
      break;
    }
  }
  return arr;
}