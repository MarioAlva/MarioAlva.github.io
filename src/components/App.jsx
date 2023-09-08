import '../css/App.css';
import Polygon from './Polygon';
import Curriculum from './Curriculum';
import projects from '../info/projects';
import { useState } from 'react';

function App() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  return (
    <div>
      <div>
        <div className="App">
          <header className='app-header'>
            
          </header>
          {projects.map((project, index) => (
            <Polygon color={project.color} title={project.title} image={project.image} index={projects.length - index} />
          ))}
        </div>
        <footer className='app-footer'>
          <div className='app-footer-curriculum' onClick={() => this.setShowCurriculum(true)}>
            Mi curriculum
          </div>
        </footer>
        {showCurriculum && <Curriculum />}
      </div>
    </div>
  );
}

export default App;
