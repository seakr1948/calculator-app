import { useState } from 'react';
import Header from './Components/Header';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
import './Sass/App.scss'


function App() {

  
  const [currentTheme, setCurrentTheme] = useState(0);
  const themes = ['theme-1', 'theme-2', 'theme-3'];
  const bg = ['bg-1', 'bg-2', 'bg-3'];
  
  document.body.className = bg[currentTheme];
  return (
    <div className={`App flex ${themes[currentTheme]}`}>
      <main className='calculator-container flex'>
        <Header setTheme={setCurrentTheme} currentTheme={currentTheme} themes={themes}/>
        <Screen />
        <KeyPad />
      </main>
    </div>
  );
}

export default App;
