import './App.css';
import { Files } from './utils/data/data';
import Folder from './components/Folder';

function App() {
  return (
    <div>
      <div className='container'>
        <h2>File Explorer</h2>
        <div className='files'>
          <Folder files={Files}  NewFolder={Folder} />
        </div>
      </div>
    </div>
  );
}

export default App;
