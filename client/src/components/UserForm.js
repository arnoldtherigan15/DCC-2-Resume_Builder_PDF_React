import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import FormExperience from './FormExperience'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {
    const [ step, setStep ] = useState(1)

    const [ state, setState ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        bio: '',
        url: '',
        dateBirth: '',
        address: '',
        phone: null,
        expOrg: '',
        expPos: '',
        expDur: '',
        expDesc: ''
    })

    const nextStep = () => {
        setStep( step+1 )
    }

    const backStep = () => {
        setStep( step-1 )
    }

    const handleChange = (event) => {
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    const fileHandleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.files[0]
        })
    }
    const { firstName, lastName, email, occupation, bio, url, dateBirth, address, phone, expOrg, expPos, expDur, expDesc } = state
    const values = { firstName, lastName, email, occupation, bio, url, dateBirth, address, phone, expOrg, expPos, expDesc, expDur }
    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    values={values}
                    handleChange={handleChange}
                    fileHandleChange={fileHandleChange}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    backStep={backStep}
                    values={values}
                    handleChange={handleChange}
                />
            )
        case 3:
            return (
                <FormExperience
                    nextStep={nextStep}
                    backStep={backStep}
                    values={values}
                    handleChange={handleChange}
                />
            )
        case 4:
            return (
                <Success/>
            )
    }
}

export default UserForm