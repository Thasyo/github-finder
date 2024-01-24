//react-router-dom
import { Outlet } from 'react-router-dom';

//styles
import './styles/app.sass';

function App() {

  return (
    <div>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
  
}

export default App
