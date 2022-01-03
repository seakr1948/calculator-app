import { useState, useEffect } from 'react';
import Header from './Components/Header';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
import './Sass/App.scss'


function App() {

  const [currentTheme, setCurrentTheme] = useState(0);
  const [arithmetic, setArithmetic]  = useState('');
  const [output, setOutput] = useState('0');
  const [currentKey, setCurrentKey] = useState('');

  const themes = ['theme-1', 'theme-2', 'theme-3'];
  const bg = ['bg-1', 'bg-2', 'bg-3'];
  
  document.body.className = bg[currentTheme];
    
  const ALLOWED_KEYS = ['7', '8', '9', 'Backspace',
                        '4', '5', '6', '+',
                        '1', '2', '3', '-',
                        '.', '0', '/', '*',
                        'Escape', 'Enter'];
  useEffect(() => {
      const keys = document.getElementsByClassName('key');
        const onKeyDown = ({key}) => {
          if (ALLOWED_KEYS.includes(key)){
            const temp = ALLOWED_KEYS.indexOf(key);
            keys[temp].click();
            keys[temp].classList.add('key-down');
            setCurrentKey(temp);
          }
          
          
        }

        const onKeyUp = () => {
          // console.log(currentKey);
          keys[currentKey].classList.remove('key-down');
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentKey]);

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
