import React, { useContext } from 'react'
import Spinner from '../Layout/Spinner'
import UserItems from './UserItems'
import ContextGithub from '../../context/github/ContextGithub'

const UserResult = () => {
    const {users, loading} = useContext(ContextGithub)
    
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItems key={user.id} users = {user} />
                ))}
            </div>
        )
    }else{
        return <Spinner />  
    }
}

export default UserResult
