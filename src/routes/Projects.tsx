//react-router-dom
import {useNavigate, useParams} from 'react-router-dom'

//hooks
import { useQueryProjects } from '../hooks/useQuery'

//components
import CardProject from '../components/CardProject'
import PageLoading from '../components/PageLoading'
import NoProjects from '../components/NoProjects'

//types
import { ProjectsProps } from '../types/projects'

//react
import { useEffect, useState } from 'react'

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState<ProjectsProps[]>([])

    const {login} = useParams()

    const {data, isLoading} = useQueryProjects(login)

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
          <button onClick={() => navigate('/')}>Voltar ao início</button>
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
        {projects?.length === 0 && isLoading === false ? (<NoProjects />) : ('')}
        {isLoading && <PageLoading />}
      </section>
    </div>
  )
}

export default Projects