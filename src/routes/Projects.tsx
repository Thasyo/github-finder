//react-router-dom
import {useNavigate, useParams} from 'react-router-dom'

//hooks
import { useQueryProjects } from '../hooks/useQuery'

//components
import CardProject from '../components/CardProject'
import NoProjects from '../components/NoProjects'

//types
import { ProjectsProps } from '../types/projects'

//react
import { useEffect, useState } from 'react'

//styles
import '../styles/components/projects.sass'

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState<ProjectsProps[]>([])

    const {login} = useParams()

    const {data} = useQueryProjects(login)

    useEffect(() => {
      if (data && Array.isArray(data)) {
        setProjects(data);
      }
    }, [data])

    console.log(projects)

  return (
    <div className='projects'>
      <div className='btnHomePage-title'>
          <button onClick={() => navigate('/')}>Voltar</button>
          <h3>Explore os repositórios do usuário: {login}</h3>
      </div>
      <section>
        {projects && projects.map((project) => (
          <CardProject
            key={project.name} 
            name={project.name}
            description={project.description}
            language={project.language}
            html_url={project.html_url}
            homepage={project.homepage}
            created_at={project.created_at}
            login={login}
          />
        ))}
        {projects?.length === 0 && (<NoProjects />)}
      </section>
    </div>
  )
}

export default Projects