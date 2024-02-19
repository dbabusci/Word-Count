//Packages
import {useState} from 'react';
//Style Sheets
import '../style/component-style.css';
import '../style/general-style.css';
//Components

function WordInput({update}){
    const [input, setInput] = useState<string>('');
    update(input);
    return(
        <div className='input-box-holder'>
            <textarea 
                className='input-box-style'
                value={input}
                onChange={e=>setInput(e.target.value)}
            />
        </div>
    );
}

export default WordInput;