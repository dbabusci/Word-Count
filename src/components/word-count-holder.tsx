//Packages
import {useState, useEffect} from 'react';
//Style Sheets
import '../style/general-style.css';
import '../style/component-style.css';
//Components
import WordDisplay from './word-display';
import WordInput from './word-input';

function WordCountHolder(){
    const [inputString, setInputString] = useState<string>('');
    const [wordCount, setWordCount] = useState<number>(0);
    const [characterCount, setCharacterCount] = useState<number>(0);

    function updateInputString(s: string){setInputString(s);}

    function checkChar(s: string){
        if(s == ' ' || s == '\n' || s == '\t'){return true;}
        else{return false;}
    }

    useEffect(()=>{
        if(inputString.length == 0){setWordCount(0);}
        let ret: number = 0;
        let f: number = 0;
        while(f < inputString.length){
            ++ret;
            while(f < inputString.length && !checkChar(inputString[f])){
                ++f;
            }
            while(f < inputString.length && checkChar(inputString[f])){
                ++f;
            }  
        }
        setCharacterCount(inputString.length);
        setWordCount(ret);
    })

    return(
        <div className='holder'>
            <div className='input-box-container'>
                <WordInput update={updateInputString}/>
            </div>
            <WordDisplay wordCount={wordCount} characterCount={characterCount}/>
        </div>
    );
}

export default WordCountHolder;