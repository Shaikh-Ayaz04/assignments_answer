


function Card(){

    let plus=0;

    const add=()=>{
        plus++;
        console.log(plus);
    }
    const remove=()=>{
        if(plus>0){
        plus--;
        console.log(plus);
        }else{
            console.log(0);
        }
    }

    return(
        <div className="product-card">
            <img src="https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg?v=1756809954" alt="img"></img>
            <h2>Shoes</h2><span>500</span>
            <p>
                lorem100 ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    );

}
export default Card;