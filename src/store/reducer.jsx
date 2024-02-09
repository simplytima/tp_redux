const init  = {paniers:[]}


const Reducer =  (state=init ,action)=>{
    if(action.type == 'ajouter'){
        const movieIndex = state.paniers.findIndex(movie => movie.imdbID == action.payload.imdbID)
        if(movieIndex >= 0){
            state.paniers[movieIndex].quantity += 1
            return{paniers : [...state.paniers ]}
        }else{
            return { paniers: [...state.paniers, action.payload] };
        }
    }else if(action.type == 'delete'){
        return {paniers: state.paniers.filter(panier => panier != action.payload)}
    }else if(action.type == 'decrement'){
        const movieIndex = state.paniers.findIndex(movie => movie.imdbID == action.payload)

        if(state.paniers[movieIndex].quantity > 1){
            state.paniers[movieIndex].quantity -= 1
        }
        return {paniers : [...state.paniers]}
    }else if(action.type == 'increment'){
        const movieIndex = state.paniers.findIndex(movie => movie.imdbID == action.payload)
        state.paniers[movieIndex].quantity += 1
        return {paniers : [...state.paniers]}
    }
    else{
        return state;
    }

}

export default Reducer ;