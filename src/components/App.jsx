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
		  <div id="container" className='app-body'>
          {projects.map((project, index) => (
            <Polygon color={project.color} title={project.title} image={project.image} index={projects.length - index} />
          ))}
		  	</div>
        </div>
        <footer className='app-footer'>
          <div className='app-footer-curriculum' onClick={() => setShowCurriculum(true)}>
            Mi curriculum
          </div>
        </footer>
        {showCurriculum && <Curriculum />}
      </div>
    </div>
  );
}

export default App;
