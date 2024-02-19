//react-router-dom
import {useParams} from 'react-router-dom'

//hooks
import { useQueryProjects } from '../hooks/useQuery'

//components
import CardProject from '../components/CardProject'

//types
import { ProjectsProps } from '../types/projects'

//react
import { useEffect, useState } from 'react'
import PageLoading from '../components/PageLoading'
import Error from '../components/Error'

const Projects = () => {

    const [projects, setProjects] = useState<ProjectsProps[]>([])

    const {login} = useParams()

    const {data, isError, isLoading} = useQueryProjects(login)

    useEffect(() => {
      if (data && Array.isArray(data)) {
        const isValidData = data.every(item => typeof item === 'object' && item !== null);
        if (isValidData) {
          setProjects(data);
        } else {
          console.error("Data não está no formato esperado."); 
        }
      } else {
        console.error("Data não é um array."); 
      }
    }, [data])

  return (
    <div>
      <h3>Explore os repositórios do usuário: {login}</h3>
      <section>
        <div>
          <button>Voltar ao início</button>
        </div>
        {projects && projects.map((project) => (
          <CardProject
            key={project.name} 
            name={project.name}
            description={project.description}
            language={project.language}
            html_url={project.html_url}
            homepage={project.homepage}
            created_at={project.created_at}
          />
        ))}
        {projects.length === 0 && <p>Não há repositórios!</p>}
        {isLoading && <PageLoading/>}
        {isError && <Error/>}
      </section>
    </div>
  )
}

export default Projects