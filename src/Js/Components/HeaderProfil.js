import { useSelector, useDispatch } from "react-redux"
import { setFirstName, setLastName, setSubmitInfos } from "../../Store/profilSlice"
import { useState } from "react";
import { updateUserInfos } from "../../Store/action";

export const HeaderProfil = () => {
    const [modalTriggered, setModalTriggered] = useState(false);
    const {lastName, firstName} = useSelector((state) => state.userLogged)
    const {token} = useSelector((state) => state.user)
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
        console.log({firstName, lastName, token})
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clic')
        if (firstName && lastName){
            onSubmit({firstName, lastName,token})
            console.log({firstName, lastName})
            dispatch(setSubmitInfos(true))
        } else if (currentState.firstName === "" && currentState.lastName === ""){
             alert('Vous devez remplir tout les champs requis !')
        }   
    }

    const currentState  = useSelector((state) => state)
    console.log(currentState)

    return (
        <div className="header">
            <h1>Welcome back<br/>{firstName + " " + lastName} </h1>
            <button onClick={handleModalTrigger} type="button" className="btn btn-primary" aria-expanded={!modalTriggered ? true : false}>
                Edit name
            </button>
            <div className="modal" style={{ display: modalTriggered ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Edit name</h5>
                        <button onClick={handleModalTrigger} type="button" className="close" aria-expanded={!modalTriggered ? true : false}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="modal-body">
                            <div className="input-wrapper">
                                <label htmlFor="firstName">FirstName</label>
                                <input 
                                    type="text"
                                    id="firstName"
                                    placeholder="firstName"
                                    onChange={handleFirstNameInputChange}
                                    />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="lastName">lastName</label>
                                <input 
                                type="lastName"
                                id="lastName"
                                placeholder="lastName"
                                onChange={handleLastNameInputChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleModalTrigger} type="button" className="btn btn-secondary"aria-expanded={!modalTriggered ? true : false}>Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}