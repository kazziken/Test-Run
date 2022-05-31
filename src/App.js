import React, {useState, useEffect} from "react";
// import ApiContainer from "./ApiContainer";
 
function App(){
   const [showApis, setShowApis] = useState([]);
 
   useEffect(() => {
       fetch("http://localhost:5000/apis")
         .then((r) => r.json())
         .then((data) => {
            setShowApis(data)})
     }, []);

 
  
   return (
       <div className="">
           <h1>test</h1>
           {/* <Header /> */}
           {/* <ApiContainer showApis={showApis}/> */}
       </div>
   )
 
}
export default App;
