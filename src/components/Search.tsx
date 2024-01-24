//react-icons
import { useState } from 'react';
import {FaGithub} from 'react-icons/fa';

type SearchProps = {
    getUser: (userData: string) => void
}

const Search = ({getUser}: SearchProps) => {

    const [userName, setUserName] = useState<string>('');

  return (
    <div>
        <h2>Busque por um usuário</h2>
        <p>Conheça seus repositórios</p>
        <div>
            <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => getUser(userName)}>
                <FaGithub />
            </button>
        </div>
    </div>
  )
}

export default Search