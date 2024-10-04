// create your App component here
import React ,{useState, useEffect} from "react";


function App(){

const [dogImageUrl, setDogImgUrl] = useState("")
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>setDogImgUrl(data.message))

}, [])
if(dogImageUrl === "") return <p>...Loading</p>
return(<img src={dogImageUrl} alt = "A Random Dog" />)
}

export default App;