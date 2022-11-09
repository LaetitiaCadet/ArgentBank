import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios" 

const baseUrl = "http://localhost:3001/api/v1/user/login"
export const userLogin =  createAsyncThunk (
    'user/login',
    async ({email, password }, token) => {
        console.log(email, password)
        try{
           await axios.post(baseUrl, {
                email: email,
                password: password
              })
              .then(function (response) {
                console.log(response);
                 localStorage.setItem("token", response.data.token)
                return response.data
              })
        } catch (e){
            console.log("Error", e.response.data)
        }
    }
) 

const userSlice = createSlice({
    name:"user",
    initialState: {
        email:"",
        password:"",
        token: null,
        isSubmit:false,

        loading:false,
        isError: false,
        isSuccess:false,
        isFetching: false,
        errorMsg: ""
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
        clearState:(state) => {
            state.isError =  false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
        getToken: (state, action) =>  {
            state.token = action.payload
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isFetching = true;
        },
        [userLogin.fulfilled]: (state, action ) => {
            state.email = action.payload
            state.password = action.payload
            
            state.isFetching = false
            state.isSuccess = true;
            return state
        },
        [userLogin.rejected]: (state, action) => {
            console.log(action)
            console.log(action.payload)
            let payloadd = action.payload
            state.isFetching = false
            state.isError = true;
            state.errorMsg = payloadd.message
        }

    }
    
})


/* Exporting the actions from the userSlice.actions object. */

export const {addEmail, addPassword , setSubmit, clearState} = userSlice.actions;

export default userSlice