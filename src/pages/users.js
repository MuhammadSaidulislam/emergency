import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Loading from '../Component/Loading'
import UserCard from '../Component/userCard';
import './users.css'



const Users = () => {

    const [allUsers, setUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const [loggedIn, setLoggedin]= useState(false);

    let token = localStorage.getItem("token")
    const name = localStorage.getItem("name")


    const getUsers = async () => {
        setIsLoading(true);
        //console.log("called");
        try{
        const response = await fetch('https://helping-backend.vercel.app/api/user/' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        console.log(response)
        
        const responseData = await response.json();
        console.log(responseData)
        if(response.ok) {
            setLoggedin(true)
            setUsers(responseData.data)

            
        }
        else {
            console.log("Error")
        }
          
        }
        catch {
            console.log("oops")
        }
        setIsLoading(false)
        
        
    };

    

    return(
        <React.Fragment>
            {isLoading && <Loading/>}
            <h1 className="text-center mt-5">{name}</h1>
            {!loggedIn && <div className="errorBox">
                <FontAwesomeIcon style={{fontSize: '80px'}} icon={faTimesCircle} /> 
                <h1>ERROR !!</h1>
                <p>Please log in to view the page</p>
                </div>}
            {!isLoading &&
            <div className="container">
            <Button className="btn btn-info centerPosition mb-5" onClick={getUsers}>All user list</Button>
            {allUsers &&
            <div>
            <br></br>
            <UserCard data = {allUsers}/>
            </div>}
            </div>
            }
        </React.Fragment>
    )
}

export default Users;