import React, {useState, useEffect} from 'react'
import MyServicesData from '../Component/myServicesData'
import Loading from '../Component/Loading'
import '../Component/myServicesData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const MyServices =  (props) => {

    const [allUsers, setUsers] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedin]= useState(false);

    let token = localStorage.getItem("token")
    function App() {
        useEffect(() => {
            if(props.login){
                setLoggedin(true);
                getUsers()
            }
            else{setLoggedin(false);}
        }, [props.login]);
      } 
    App();

    const getUsers = async () => {
        setIsLoading(true);
        console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/myservices/' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        
        const responseData = await response.json();
        console.log(responseData)
        if(response.ok) {
            setLoggedin(true)
            setUsers(responseData)
            //console.log(allUsers)
            setCurrentUser(responseData.user.user)
            
        }
        else {
            console.log("Error")
        }
          
        }
        catch {
            console.log("Catch")
        }
        setIsLoading(false)
        
        
    };

    return (
        <div>
            
            {isLoading && <Loading/>}
            {!loggedIn && <div className="errorBox">
                <FontAwesomeIcon style={{fontSize: '80px'}} icon={faTimesCircle} /> 
                <h1>ERROR !!</h1>
                <p>Please log in to view the page</p>
                </div>}
            {!isLoading &&
            <div >
            {allUsers &&
            <div>
            <MyServicesData data = {allUsers} user = {currentUser}/>
            </div>}
            </div>
            }
        </div>
    )

}

export default MyServices