
import { useState } from 'react';
import "as math from 'mathjs"
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App(){ 
  const [text,setText] = useState("")
  const [result,setResult] = useState("");

const addtotext = (val)=> {
  setText((text)=> [...text,val+" "])
}
const resetInput = ()=>{
  setText("");
  setResult("");

}
  return(
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
        <Button symbol="7" handeClick={addtotext}/>
        <Button symbol="8"handeClick={addtotext}/>
        <Button symbol="9"handeClick={addtotext}/>
        <Button symbol="/"color="#00AD85"handeClick={addtotext}/>
        </div>
        <div className='row'>
        <Button symbol="4"handeClick={addtotext}/>
        <Button symbol="5"handeClick={addtotext}/>
        <Button symbol="6"handeClick={addtotext}/>
        <Button symbol="*"color="#00AD85"handeClick={addtotext}/>
        </div>
        <div className='row'>
        <Button symbol="1"handeClick={addtotext}/>
        <Button symbol="2"handeClick={addtotext}/>
        <Button symbol="3"handeClick={addtotext}/>
        <Button symbol="+"color="#00AD85"handeClick={addtotext}/>
        </div>
        <div className='row'>
        <Button symbol="0"handeClick={addtotext}/>
        <Button symbol="."handeClick={addtotext}/>
        <Button symbol="="/>
        <Button symbol="-"color="#00AD85"handeClick={addtotext}/>
        </div>
        <Button symbol="Clear"color="red"handeClick={resetInput}/>
        </div>
      </div>
    
    
  );
}
export default App;