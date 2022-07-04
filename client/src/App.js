import MainContainer from "./containers/MainContainer";
import ReactPlayer from "react-player"

function App() {
  return (
    <>      
    <ReactPlayer
    className="musicplayer"
    url="https://soundcloud.com/umesongs/jurassic-park-theme?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    width="350px"
    height="78px"
    // volume="0.1"
    playIcon={<button>PLAY</button>}
    />
    <MainContainer />
    </>
  );
}

export default App;