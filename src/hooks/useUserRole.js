import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../redux/actions/authActions"

const useUserRole = () => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.authReducer.userDetails)
    const [role, setRole] = useState(localStorage.getItem('role'))

    useEffect(() => {
        if (profile) {
            if (!!profile.role === !!localStorage.getItem('role')) {
                console.log('udpated profile, and roles equal')
                setRole(profile.role)
            } else {
                console.log('logout')
                dispatch(logOut())
                console.log('equl?', !!profile.role === !!localStorage.getItem('role'))

            } 
        }
    }, [profile])

    return {
        role,
        profile
    }
}
export default useUserRole