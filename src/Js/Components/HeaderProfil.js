import { useSelector, useDispatch } from "react-redux"
import { setFirstName, setLastName, setSubmitInfos } from "../../Store/profilSlice"
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { updateUserInfos } from "../../Store/action";

export const HeaderProfil = () => {
    const [modalTriggered, setModalTriggered] = useState(false);
    const {lastName, firstName, modifyInfos} = useSelector((state) => state.userLogged)
    const {token} = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleModalTrigger = () => setModalTriggered(!modalTriggered); 

    const handleFirstNameInputChange = (e) => {
        e.persist();
        dispatch(setFirstName(e.target.value))
    }

    const handleLastNameInputChange = (e) => {
        e.persist();
        dispatch(setLastName(e.target.value))
    }

    const onSubmit = ({firstName, lastName, token}) => {
        dispatch(updateUserInfos({firstName, lastName, token}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName && lastName){
            onSubmit({firstName, lastName,token})
            dispatch(setSubmitInfos(true))
        } else if (currentState.firstName === "" && currentState.lastName === ""){
             alert('Vous devez remplir tout les champs requis !')
        }  
    }

    useState(()=> {
        console.log(modifyInfos)
        if (!modifyInfos){
            navigate('/Profil', {replace: true})
            console.log(modifyInfos)
        }
    },[modifyInfos])
    const currentState  = useSelector((state) => state)

    return (
        <div className="header mt-3">
            <h1>Welcome back<br/>{firstName + " " + lastName} </h1>
            <button onClick={handleModalTrigger} type="button" className="edit-button" aria-expanded={!modalTriggered ? true : false}>
                Edit name
            </button>
            <div className="update-info mx-auto container mt-4 " style={{ display: modalTriggered ? 'block' : 'none' }}>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="d-flex justify-content-center">
                        <div className="input-wrapper mx-3">
                            <label htmlFor="firstName">Firstname</label>
                            <input 
                                type="text"
                                id="firstName"
                                placeholder="Your name ..."
                                onChange={handleFirstNameInputChange}
                            />
                        </div>
                        <div className="input-wrapper mx-4">
                            <label htmlFor="lastName">Lastname</label>
                            <input 
                                type="lastName"
                                id="lastName"
                                placeholder="your last name"
                                onChange={handleLastNameInputChange}
                            />
                        </div>
                    </div> 
                    <div className="info-footer">
                        <button onClick={handleModalTrigger} type="submit" className="edit-button" aria-expanded={!modalTriggered ? true : false} >Save</button>
                        <button onClick={handleModalTrigger}  className="edit-button" aria-expanded={!modalTriggered ? true : false}>Cancel</button>
                    </div>   
                </form>
            </div>
        </div>
    )
}