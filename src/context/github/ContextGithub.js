import { createContext, useEffect, useReducer } from "react";
import ContextGithub from './GithubReducer';

const ContextGithub = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;


export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(ContextGithub, initialState);


    useEffect(() => {
        fetchUsers()
    }, [])
    const fetchUsers = async()=>{
        const res = await fetch(`${GITHUB_URL}/users`);
        const data = await res.json();

        dispatch({
            type: 'GET_USERS',
            payload: data,
        })

    }

    return (<ContextGithub.Provider 
        value = {{
            users: state.users,
            loading: state.loading,
            fetchUsers,
        }}>
        {children}  
    </ContextGithub.Provider>
    )
}


export default ContextGithub