import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' 
import { persistReducer, persistStore } from 'redux-persist'
import  loginSlice  from "./Store/userSlice"
import  profilSlice from "./Store/profilSlice"
import thunk from "redux-thunk"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: loginSlice.reducer,
    userLogged: profilSlice.reducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore ({   
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
export default store 