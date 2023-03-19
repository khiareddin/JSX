import './App.css';
import img from './loginpage.png'

function App() {
  return (
    <div className="App">
  <h1 className="title red">Your name here</h1>
  <br/>
  <img src={img}/>
  <br/>
<img src="./image/login.jpg" />
  <br/>

<video width="320" height="240" controls>
<source src="myVideo.mp4" type="video/mp4" />
</video>
  </div>
);
}
export default App;


