import './App.css';
import {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const[tours, setTours] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchApi = async() =>{

    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
    
  }

useEffect(()=>{
  fetchApi();
}, []);


if(loading){
 return ( 
 <Loading></Loading>
 );
}


  return (
    <div className="container">
    <Tours tours={tours}></Tours>
    </div>
  );
}

export default App;
