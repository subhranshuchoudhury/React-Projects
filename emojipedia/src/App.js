import './App.css';
import EmojiInfo from "./components/EmojiInfo";
import emojiData from './DB/emojiInfo';

function App() {
  return (
    <div className="App">
      <h1>EMOJI PEDIA</h1>
      <div className='cardContainer'>
        {emojiData.map(emojidata => (<EmojiInfo key={emojidata.id} emojiSymbol = {emojidata.emojiSymbol} emojiTitle={emojidata.emojiTitle} emojiMeaning={emojidata.emojiMeaning} />))}
      </div>
    </div>
  );
}

export default App;
