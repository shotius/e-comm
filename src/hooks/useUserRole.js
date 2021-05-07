import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useUserRole = () => {
    const profile = useSelector(state => state.authReducer.userDetails)
    const [role, setRole] = useState(localStorage.getItem('role'))

    useEffect(() => {
        if (profile && profile.role) {
            setRole(profile.role)
        }
    }, [profile])

    return {
        profile,
        role 
    }
}
export default useUserRole