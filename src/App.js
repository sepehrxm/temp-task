import './App.css';
import Main from './Main';
import { useState } from 'react';

function App() {
    const [search, setSearch] = useState('')
  return (
    <div className="App">
      <nav>
        <h1>ScalesOps</h1>
        <input id='search' placeholder='Search..' type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </nav>
      <Main search={search === '' ? undefined : search}/>
    </div>
  );
}

export default App;
