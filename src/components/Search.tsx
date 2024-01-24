//react-icons
import {FaGithub} from 'react-icons/fa';

//react
import { useState, KeyboardEvent } from 'react';

//styles
import '../styles/components/search.sass'

type SearchProps = {
    getUser: (userData: string) => void
}

const Search = ({getUser}: SearchProps) => {

    const [userName, setUserName] = useState<string>('');

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Enter'){
            getUser(userName);
        }
    }

  return (
    <div className='search'>
        <h2>Busque por um usuário</h2>
        <p>Conheça seus repositórios</p>
        <div className='form'>
            <input 
                type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => getUser(userName)}>
                <FaGithub className='icon'/>
                <span>Buscar usuário</span>
            </button>
        </div>
    </div>
  )
}

export default Search