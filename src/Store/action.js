import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { setFirstName, setLastName} from "./profilSlice"
import { setServerMsg} from "./userSlice"


const baseUrl = "http://localhost:3001/api/v1/user"

export const userLogin = createAsyncThunk (
    'user/login',
    async ({email, password }, thunkAPI) => {
      const {rejectWithValue, dispatch} = thunkAPI
        try{
           await axios.post(baseUrl + '/login', {
                email: email, 
                password: password
              })
              .then((response) => {
                if (response.status === 200){
                  sessionStorage.setItem("user", response.data.body.token)
                  dispatch(setServerMsg(response.data.message)) 
                  return response.data
                }
              })
        } catch (error){
          if (error.response) { 
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            dispatch(setServerMsg(error.response.data.message)) 
            return rejectWithValue(error.response.data.message)
          }
        }
    }
)


export const userInfos = createAsyncThunk (
  'user/infos',
  async ({token}, thunkAPI) => {
      const {dispatch, rejectWithValue} = thunkAPI
      try{
         await axios.post(baseUrl + '/profile', {}, {
          headers: {
            'Authorization': 'Bearer' + token
          }
            })
            .then((response) => {
              const responseBody = response.data.body
              dispatch(setFirstName(responseBody.firstName))
              dispatch(setLastName(responseBody.lastName))
              return response.data
            })
      } catch (error){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log("Error", error.response.data)
          return rejectWithValue(error.response.data.message)
      }
  }

)

// update user infos Firstname and Lastname
export const updateUserInfos = createAsyncThunk (
  'user/infos',
  async ({firstName, lastName, token}, thunkAPI) => {
      const {rejectWithValue} = thunkAPI
      try{
         await axios.put(baseUrl + '/profile',
         { 
            firstName: firstName, 
            lastName:lastName
         },{
          headers: {
            'Authorization': 'Bearer' + token
          }
         })
          .then((response) => {
              return response.data
          })
      } catch (error){
          console.log("Error", error.response.data)
          console.log("Error Unauthorized", error.response.data.message)
          return rejectWithValue(error.response.data.message)
      }
  }

)
