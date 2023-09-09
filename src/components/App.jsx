import '../css/App.css';
import Polygon from './Polygon';
import Curriculum from './Curriculum';
import projects from '../info/projects';
import { useState } from 'react';

function App() {
	

  const [showCurriculum, setShowCurriculum] = useState(false);
//   const container = document.getElementById("container");
//   // where "container" is the id of the container
// 	container.addEventListener("wheel", function (e) {
// 	  if (e.deltaY > 0) {
// 		container.scrollLeft += 100;
// 		e.preventDefault();
//   // prevenDefault() will help avoid worrisome 
//   // inclusion of vertical scroll 
// 	  }
// 	  else {
// 		container.scrollLeft -= 100;
// 		e.preventDefault();
// 	  }
// 	});
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
