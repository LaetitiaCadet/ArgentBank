import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from "./Store/reducer"



const store = configureStore ({
    reducer: {
        user: loginSlice.reducer
    }
})

export default store