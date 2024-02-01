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

export const useQueryUser = (userData: string | null) => {

    const query = useQuery({
        queryKey: ['users', userData],
        queryFn: () => fetchUser(userData),
        enabled: !!userData
    })

    return {...query, data: query.data}

}