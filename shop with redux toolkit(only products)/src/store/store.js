import { configureStore } from "@reduxjs/toolkit"
import productsSlice from './reducers/products/reducerProducts'

const store = configureStore({
    reducer: {
        products: productsSlice
    }
})

export default store