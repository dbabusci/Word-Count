//Packages
//Style Sheets
import './style/general-style.css';
//Components
import Title from './components/title.tsx';
import WordCountHolder from './components/word-count-holder.tsx';

function App() {
  return (
    <div className="page">
      <Title/>
      <WordCountHolder/>
    </div>
  )
}

export default App
