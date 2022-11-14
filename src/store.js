import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from "./Store/userSlice"
import  profilSlice from "./Store/profilSlice"

const store = configureStore ({
    reducer: {
        user: loginSlice.reducer,
        userLogged: profilSlice.reducer
    }
})

export default store