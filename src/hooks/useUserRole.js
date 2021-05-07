import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { logOut } from "../redux/actions/authActions"

/* 
Our route system depends on the role of the user
if user does not have permissions on the route, this route
does not generates. Since redux info updates on every render
we don't want to rely on it. on the first render (on page update) role in redux is null
so not all route are generated. e.i. /profile/admin shows 404 error
I preffered to use role in localstorage and it risky, every one can change it's data.
that's why I created this hook. user initialy gets role from local storage, but when getProfileFetch()
is firs, userDetails (in redux user from db) variable is updates,  procces goes in useEffect where we check
if real user role and role writen in localstorage don't match. user will be loged out
*/
const useUserRole = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userDetails = useSelector(state => state.authReducer.userDetails)
    const [role, setRole] = useState(localStorage.getItem('role'))
    
    useEffect(() => {
        if (userDetails) {
            console.log("userDetails" , userDetails.role)
            // in case some one writes role in localstorage manualy
            // app will throw him out on login page
            if (!!userDetails.role === !!localStorage.getItem('role')) {
                setRole(userDetails.role)
            } else {
                dispatch(logOut())
                console.log("logout", userDetails.role)
                history.push('/login')
            } 
        }
    }, [userDetails])

    return role
}
export default useUserRole