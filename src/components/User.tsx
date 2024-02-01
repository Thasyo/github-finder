//react-router-dom
import { Link } from "react-router-dom"

//types
import { UserProps } from "../types/user"

//react-icons
import { FaLocationDot, FaComments, FaBookBookmark, FaGithub } from "react-icons/fa6";

//components
import Error from "./Error";

const User = ({avatar_url, created_at, followers, following, html_url, location, login, name, public_repos}: UserProps) => {
  return (
    <div>
        {login === undefined ? (
            <Error />
        ) : (
            <div className="container">
                <div className="user-info">
                    <img src={avatar_url} alt={name} />
                    <div>
                        {name && <p>{name}</p>}
                        <p>{login}</p>
                    </div>
                </div>
                <div className="user-details">
                    {location && (
                        <div>
                            <FaLocationDot className="icons"/>
                            <p>{location}</p>
                        </div>
                    )}
                    <div>
                        <div>
                            <FaComments className="icons"/>
                            <p>Seguidores: {followers}</p>
                        </div>
                        <span className="division">|</span>
                        <div>
                            <p>Seguindo: {following}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <FaBookBookmark className="icons"/>
                            <p>Total de Repositórios: {public_repos}</p>
                        </div>
                        <div>
                            <a href={html_url} target="_blank"> <FaGithub className="icons"/> Github</a>
                        </div>
                        <div>
                            <Link to={`/repos/${login}`}>Projetos</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <span>{created_at}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default User