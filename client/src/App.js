import MainContainer from "./containers/MainContainer";
import ReactPlayer from "react-player";

function App() {
  return (
    <>      
    <ReactPlayer
    url="https://soundcloud.com/umesongs/jurassic-park-theme?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    />
    <MainContainer />
    </>
  );
}

export default App;