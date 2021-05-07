<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOut } from "../redux/actions/authActions";
=======
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
>>>>>>> 900954ccfc7fda713d8b238bbb7257e15970a4b4

/* 
Our route system depends on the role of the user
if user does not have permissions on the route, this route
does not generates. Since redux info updates on every render
we don't want to rely on it. on the first render (on page update) role in redux is null
so not all route are generated. e.i. /profile/admin shows 404 error
I preffered to use role in localstorage and it risky, every one can change it's data.
that's why I created this hook. user initialy gets role from local storage, but when getProfileFetch()
is fires, userDetails (in redux user from db) variable is updates, and user gets role from redux
*/
const useUserRole = () => {
    const userDetails = useSelector(state => state.authReducer.userDetails)
    const [role, setRole] = useState(localStorage.getItem('role'))
    
    useEffect(() => {
        if (userDetails) {
                setRole(userDetails.role)
        }
    }, [userDetails])

  return role;
};
export default useUserRole;
