import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state, // para mantener la informacion anterior
            cart: [...state.cart, payload]
        })

    }


    return {
        state,
        addToCart
    } 
}

export { useInitialState };