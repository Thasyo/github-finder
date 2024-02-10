//react-query
import { useQuery } from "@tanstack/react-query"

const API_URL = "https://api.github.com/users"

const fetchUser = async(userName: string | null): Promise<any> => {

        const response = await fetch(`${API_URL}/${userName}`);

        if(!response.ok){
            const errorStatus = "Usuário não encontrado!"
            return errorStatus
        }else{
            return response.json()
        }

}

const fetchProjects = async(userLogin: string | undefined): Promise<any> => {

    const response = await fetch(`${API_URL}/${userLogin}/repos`);

    return response.json()

}

export const useQueryProjects = (userLogin: string | undefined) => {

    const queryProjects = useQuery({
        queryKey: ['users', userLogin],
        queryFn: () => fetchProjects(userLogin),
        enabled: !!userLogin,
    })

    return {...queryProjects, data: queryProjects.data}

}

export const useQueryUser = (userData: string | null) => {

    const queryUser = useQuery({
        queryKey: ['users', userData],
        queryFn: () => fetchUser(userData),
        enabled: !!userData
    })

    return {...queryUser, data: queryUser.data}

}