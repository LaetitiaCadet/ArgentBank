import {createAsyncThunk} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import axios from "axios"
import { setFirstName, setLastName } from "./profilSlice"


const baseUrl = "http://localhost:3001/api/v1/user"

export const userLogin = createAsyncThunk (
    'user/login',
    async ({email, password }) => {
        try{
           await axios.post(baseUrl + '/login', {
                email: email, 
                password: password
              })
              .then((response) => {
                if (response.status === 200){
                  sessionStorage.setItem("user", response.data.body.token)
                  return response.data
                } else if (response.status === 400) {
                  console.log(response.message)
                }
              })
        } catch (error){
          if (error.response) { 
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        }
    }
)


export const userInfos = createAsyncThunk (
  'user/infos',
  async ({token}) => {
      const dispatch = useDispatch()
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
      } catch (e){
          console.log("Error", e.response.data)
      }
  }

)

// update user infos Firstname and Lastname
export const updateUserInfos = createAsyncThunk (
  'user/infos',
  async ({firstName, lastName, token}, thunkAPI) => {
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
            if (response.status === 200) {
              return response.data
            } else if (response.status === 401){
              console.log(response.data)
              console.log("Error Unauthorized", response.message)
            }

          })
      } catch (e){
          console.log("Error", e.response.data)
      }
  }

)


