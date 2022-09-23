import "./App.css";
import Tour from "./Tour";

const Tours = ({tours}) => {
    return ( 
        <div className="main">
       
       {tours.map((tour)=>{
        return (
            <Tour key={tour.id} {...tour}></Tour>
        )
       })}
        </div>
     );
}
 
export default Tours;