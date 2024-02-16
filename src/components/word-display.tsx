//Packages/libraries
import {useState, useEffect} from 'react';
//Style Sheets
import '../style/component-style.css';
import '../style/general-style.css';
//Components
//import WordInput from './word-input';

function WordDisplay(){
    const [words, setWords] = useState<String>(''); //Holds the words from the input maybe WIP
    const [wordCount, setWordCount] = useState<Number>(0); //Holds the number of words
    const [charCount, setCharCount] = useState<Number>(0); //Holds the number of characters

    return(
        <div>test word display</div>
    );
}

export default WordDisplay;