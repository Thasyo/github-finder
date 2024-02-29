//react
import { useEffect, useState } from "react"

//styles
import "../styles/components/cardProject.sass"

//date-fns
import { format } from "date-fns"

type ProjectProps = {
    name: string,
    description: string,
    language: string,
    html_url: string,
    homepage: string,
    created_at: string
    login: string | undefined
}

const CardProject = ({name, description, language, html_url, homepage, created_at, login}: ProjectProps) => {
  
    const [originDate, setOriginDate] = useState('')

    useEffect(() => {
        if(login !== undefined){
            const createdDate = format(created_at, "dd/MM/yyyy")
            setOriginDate(createdDate)
        }
    }, [login])

    return (
    <div className="card">
        <h2>{name}</h2>
        {description ? <div className="description">
            <p><span>Descrição do Projeto:</span> {description}</p>
        </div> : ''}
        <div className="language">
            <p><span>Linguagem Principal:</span> {language}</p>
        </div>
        <div className="btns">
            <a href={html_url} target="_blank">Código</a>
            {homepage ? <a href={homepage} target="_blank">Site</a> : ''}
        </div>
        <div className="date">
            <span>Projeto criado em {originDate}</span>
        </div>
    </div>
  )
}

export default CardProject