type ProjectProps = {
    name: string,
    description: string,
    language: string,
    html_url: string,
    homepage: string,
    created_at: string
}

const CardProject = ({name, description, language, html_url, homepage, created_at}: ProjectProps) => {
  return (
    <div className="card">
        <h2>{name}</h2>
        <div>
            {description && <p>{description}</p>}
        </div>
        <div>
            <p>{language}</p>
        </div>
        <div>
            <a href={html_url} target="_blank">Código</a>
            {homepage && <a href={homepage} target="_blank">Site</a>}
        </div>
        <div>
            <span>Projeto criado em {created_at}</span>
        </div>
    </div>
  )
}

export default CardProject