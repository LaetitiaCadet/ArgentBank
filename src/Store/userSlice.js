import {createSlice} from "@reduxjs/toolkit"
import { userLogin } from "./action"

const userSlice = createSlice({
    name:"user",
    initialState: {
        email:"",
        password:"",
        isSubmit:false,

        loading:false,
        isError: false,
        isSuccess:false,
        isFetching: false,
        token:"",
        errorMsg:"",
        serverMsg:""
    },
    reducers: {
        //login
        addEmail: (state, action) => {
            // {type: "user/addEmail", payload: "email@mail.com"}
            state.email = action.payload
        },
        addPassword: (state, action) => {
            // {type: "user/addPassword", payload: "12345367"}
            state.password = action.payload
        },
        setSubmit: (state, action) => {
            // {type: "user/setSubmit", payload: "boolean"}
            state.isSubmit = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload  
        },
        setSuccess: (state, action) => {
            state.isSuccess = action.payload
        },
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload
        },
        setServerMsg: (state, action) => {
            state.serverMsg = action.payload
        }, 
        clearState:(state) => {
            state.isError =  false;
            state.isSuccess = false;
            state.isFetching = false;
            state.token = ""
            return state;
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isFetching = true;
        },
        [userLogin.fulfilled]: (state, action ) => {
            state.email = action.payload
            state.password = action.payload
            state.isSuccess = action.payload
            state.isFetching = false
            state.token = sessionStorage.getItem("user")
            state.errorMsg = ''
        },
        [userLogin.rejected]: (state, action) => {
            state.isSubmit = false
            state.isFetching = false
            state.isError = true;
            state.errorMsg = action.error.message
            state.serverMsg = action.payload
        }

    }
    
})

/* Exporting the actions from the userSlice.actions object. */
export const {addEmail, addPassword , setSubmit, setSuccess, clearState, setToken, setErrorMsg, setServerMsg} = userSlice.actions;


export default userSlice