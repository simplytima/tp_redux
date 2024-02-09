import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function Panier(){


    const paniers = useSelector((state)=>state.paniers)

    const Dispatch = useDispatch()

    
    const Remove = (panier)=>{
        Dispatch({type:"delete", payload:panier})
    }

    const decrement=(id)=>{
        Dispatch({type:'decrement' , payload:id})
    }

    const increment=(id)=>{
        Dispatch({type:'increment' , payload:id})
    }



    return (
        <div className="panier" >
            {
                paniers.map(panier=>{
                    return <div className="card">

                        <div className="img">
                          <img src={panier.Poster} alt="" />  
                        </div>
                        
                        <div className="info">
                            <p>{panier.Title}</p>
                            <p>Type: {panier.Type}</p>
                            <p>Year: {panier.Year}</p>
                        </div>

                        <div className="quantity">
                            <button onClick={()=>{decrement(panier.imdbID)}}>-</button>
                            <p>{panier.quantity}</p> 
                            <button onClick={()=>{increment(panier.imdbID)}}>+</button>
                        </div>
                        
                        <div className="btn">
                          <button onClick={()=>{Remove(panier)}}>delete</button>  
                        </div>
                        
                    </div>
                })
            }
        </div>
    )
}


export default Panier