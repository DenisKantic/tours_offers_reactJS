import './App.js';

const Tour = ({id, image, info, name, price}) => {
    return ( 
        <div className="tour-container">
            <img src={image} alt={name} className="image" />

        <div className="text-container">
            <div className="name-price">
            <h1 className="name">{name}</h1>
        <p className='price'>{price}</p>
            </div>
            <div className="info">{info}</div>
        </div>
        </div>
     );
}
 
export default Tour;
