//Packages
//Style Sheets
import '../style/component-style.css';
import '../style/general-style.css';
//Components

function WordDisplay({wordCount, characterCount}){
    return(
        <h1 className='word-count-display-style'>Words: {wordCount} Characters: {characterCount}</h1>
    );
}

export default WordDisplay;