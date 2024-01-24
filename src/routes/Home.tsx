//react
import { useEffect, useState } from "react";

//components
import Search from "../components/Search";

//types
import { UserProps } from "../types/user";

//hooks
import { useQueryUser } from "../hooks/useQueryUser";

const Home = () => {
    
    const [user, setUser] = useState<UserProps | null>(null);

    const [userName, setUserName] = useState<string | null>(null)

    const getUser = (userData: string) => {
        const userName = setUserName(userData);
        return userName;
    }

    const {data, isLoading, isError, error, isSuccess} = useQueryUser(userName);

    useEffect(() => {

        if(isSuccess){
            const { login, name, avatar_url, html_url, blog, location, followers, following, public_repos, created_at } = data;
            const userData: UserProps = {
                login, 
                name, 
                avatar_url, 
                html_url, 
                blog, 
                location, 
                followers, 
                following, 
                public_repos, 
                created_at
            };
            setUser(userData)
        }

        if(isLoading){
            console.log("Carregando...")
        }

        if(isError){
            console.log(`Houve um erro: ${error}`)
        }

    }, [data])

    console.log(user)


  return (
    <div>
        <Search getUser={getUser}/>
        {user && (
            <p>{user.name}</p>
        )}
    </div>
  )
}

export default Home