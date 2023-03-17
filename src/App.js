import React, { useState } from 'react';
import './App.css';
// import Add from './Component/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Delete from '@mui/icons-material/Delete';

// function App() {
//   const[name, setName] = useState("");
//   const[number, setNumber] = useState("");
//   const[date, setDate] = useState("");
//   const[list, setList] = useState([]);

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     const toggle = {name,number,date}
//     if(name &&number &&date){
//       setList((ls)=>[...ls,toggle])
//       setName("")
//       setNumber("")
//       setDate("")
//     }
//   }
//   return (
//     <>
//     <div className="App container mt-5">
//       <h1 className="btn btn-warning" style={{fontSize:25}}>Add Expenses</h1>
//       <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
//       <div className="col-md-5">
//         <label for="validationCustom01" className="form-label" style={{fontSize:20, fontWeight:"bold"}}>Title</label>
//         <input name ="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="validationCustom01" required/>
//       </div>
//       <div className="col-md-5">
//         <label for="validationCustom02" className="form-label" style={{fontSize:20, fontWeight:"bold"}}>₹</label>
//         <input name="number" value={number} onChange={(e)=>setNumber(e.target.value)} type="number" className="form-control" id="validationCustom02"required/>
//       </div>
//       <div className="col-md-5">
//         <label for="validationCustom03" className="form-label" style={{fontSize:20, fontWeight:"bold"}}>Date</label>
//         <input name="date" value={date} onChange={(e)=>setDate(e.target.value)} type="date" className="form-control" id="validationCustom02"required/>
//       </div>
//       <button className="btn btn-primary" style={{borderRadius:8, width:200, height:40, margin:50}}>Add</button>
//       </form>
      

//       <h2 className="btn btn-warning" style={{marginTop:80, fontSize:25, marginBottom:40}}>Data Which Entered by you</h2>
//       <div style={{display:'flex',justifyContent:'space-evenly', lineHeight:4, fontSize:18, fontWeight:"bold"}}>
//           <label>Date</label>
//           <label >Title</label>
//           <label>Amount</label>
//           </div>
//       {
//         list.map((a)=>
//         <div style={{display:'flex',justifyContent:'space-evenly', lineHeight:4}}>
//           <label>{a.date}</label>
//           <label>{a.name}</label>
//           <label>{a.number}</label>
//         </div>)
//       }
//     </div>
//     </>
//   );
// }

// export default App;




function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () =>{
    setData([...data,{
      name: name,
      email:email}])
      setName('');
      setEmail('');
   
  }

  const removeData = (index) =>{
    let arr = data;
    arr.splice(index,1)
    setData([...arr]);
  }

  const handlePress = (e) =>{
    if(e.key==="Enter")
    addData();
  }

  return (
    <>
    <div className='header'>
      <h3>Records Keeping</h3>
    </div>

    <div className='form'>
    <Stack spacing={2} direction="row">
      <TextField onCopy={()=>window.alert("copied")} value={name} id="outlined-basic" label="name" onChange={(event) => setName(event.target.value)} variant="outlined" />
      <TextField onPaste={()=>window.alert("pasted")} value={email} id="outlined-basic" label="email" onChange={(event) => setEmail(event.target.value)} variant="outlined"
      onKeyPress={(e)=>handlePress(e)} />
      <Button draggable onDrag={()=> console.log("Dragged")} onDoubleClick={()=>window.alert("DoubleClicked")} variant="contained" color="success" onClick={addData}>Add</Button>
    </Stack>
    </div>

    <div className='data'>
      <h4>Name</h4>
      <h4>Email</h4>
      <h4>Remove</h4>
    </div>
    {
        data.map((element, index)=>{
            return(
              <div key={index} className='data'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button variant="contained" color="error" onClick={()=>removeData(index)}><Delete/></Button>
            </div>
            )
        })
    }

    </>
  );
}

export default App;