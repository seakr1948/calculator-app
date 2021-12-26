import { useState, useEffect } from 'react';
import Header from './Components/Header';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
import './Sass/App.scss'


function App() {

  
  // useEffect(() => {
  //   let screen = document.getElementById('screen');
  //   screen.setSelectionRange(output.length, output.length);

  //   let keys = document.getElementsByClassName('keypad');
  //   // console.log(keys[0].children);

  //   document.addEventListener('keyup', (e) => {
  //     e.preventDefault();

  //     if(e.repeat){
  //       return
  //     }

  //     if (e.key === '7'){
  //       keys[0].children[0].click();
  //     }
  //   })

  // })
  

  const [currentTheme, setCurrentTheme] = useState(0);
  const themes = ['theme-1', 'theme-2', 'theme-3'];
  const bg = ['bg-1', 'bg-2', 'bg-3'];
  const [arithmetic, setArithmetic]  = useState('');

  const [output, setOutput] = useState('0');

  document.body.className = bg[currentTheme];
  return (
    <div className={`App flex ${themes[currentTheme]}`}>
      <main className='calculator-container flex'>
        <Header setTheme={setCurrentTheme} currentTheme={currentTheme} themes={themes}/>
        <Screen output={output} />
        <KeyPad output={output} setOutput={setOutput} arithmetic={arithmetic} setArithmetic={setArithmetic}/>
      </main>
    </div>
  );
}

export default App;
