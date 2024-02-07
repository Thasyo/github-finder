//react
import {useEffect, useState} from 'react'

//react-router-dom
import { Link } from "react-router-dom"

//types
import { UserProps } from "../types/user"

//react-icons
import { FaLocationDot, FaComments, FaBookBookmark, FaGithub } from "react-icons/fa6";

//styles
import '../styles/components/user.sass'

//components
import Error from "./Error"
import { format } from "date-fns";


const User = ({avatar_url, created_at, followers, following, html_url, location, login, name, public_repos}: UserProps) => {

    const [originDate, setOriginDate] = useState('')

    useEffect(() => {
        if(login !== undefined){
            const createdDate = format(created_at, "dd/MM/yyyy")
            setOriginDate(createdDate)
        }
    }, [login])

  return (
    <>
        {login === undefined ? (
            <Error />
        ) : (
            <div className="container">
                
                <div className="user-info">
                    <div className="container-img">
                        <img src={avatar_url} alt={name} /> 
                    </div>
                    <div className="container-info-name-login">
                        {name && <p className="name">{name}</p>}
                        <p className="login">{login}</p>
                    </div>
                </div>

                <div className="user-details">
                    <div className="followers-following">
                        <FaComments className="icons"/>
                        <div>
                            <p>Seguidores: <span>{followers}</span></p>
                        </div>
                        <span className="division">|</span>
                        <div>
                            <p>Seguindo: <span>{following}</span></p>
                        </div>
                    </div>
                    {location && (
                        <div className="location">
                            <FaLocationDot className="icons"/>
                            <p>{location}</p>
                        </div>
                    )}
                    <div className="others-info">
                        <div className="repos">
                            <FaBookBookmark className="icons"/>
                            <p>Total de Repositórios: <span>{public_repos}</span></p>
                        </div>
                        <div className="btn">
                            <a href={html_url} target="_blank"> <FaGithub className="icons"/> Github</a>
                        </div>
                        <div className="btn">
                            <Link to={`/repos/${login}`}><FaGithub className="icons"/> Projetos</Link>
                        </div>        
                        <div>
                            <span>Criado em {originDate}</span>
                        </div>
                    </div>
                </div>

            </div>
        )}
    </>
  )
}

export default User