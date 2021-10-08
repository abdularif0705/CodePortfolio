import './App.css';
import logo from "./logo.svg";
import react from "./react.png";
import java from "./java.png";
import node from "./node.png";
import js from "./js.png";

function AppHeader() {
  return <div id="app__header">
    <h1 id="name">Zackary Santana</h1>
    <div id="btn__group">
      <button onClick={() => {
          window.open("https://www.linkedin.com/in/zackary-santana/");
      }}>LinkedIn</button>
      <button onClick={() => {
          window.open("https://github.com/ZackarySantana");
      }}>GitHub</button>
    </div>
  </div>
}

function ProjectCard(props) {
  return <div className="project__card">
    <div className="project__card__header">
      <img style={{margin: "10px"}} src={props.img} height="83px"></img>
      <h3 style={{margin: 0, marginLeft: "20px"}}>{props.title}</h3>
    </div>
    <p style={{marginTop: "10px", marginLeft: "20px", fontSize: "0.7em"}}>{props.desc}</p>
  </div>
}

function AppBody() {
  return <div id="app__body">
    <div id="body__left">
      <h1 style={{marginBottom: "10px"}}>About Me</h1>
      <p style={{marginTop: "0px"}}>Welcome to my portfolio!</p>
      <p>I am a software developer that focuses on web development. I also do python and mobile development with React Native.</p>
      <h1 style={{marginTop: "70px"}}>Technologies</h1>
      <img src={react}></img>
      <img src={js}></img>
      <img src={java}></img>
      <img src={node}></img>
    </div>
    <div id="body__right">
      <h1>Projects</h1>
      <ProjectCard
        img={logo}
        title="Personal Website"
        desc="This is a website I made in 20XX using React.js, Node.js, and SCSS." />
      <ProjectCard
        img={java}
        title="Chess"
        desc="This is a game I made in Java about Chess in 20XX using the following techniques." />
    </div>
  </div>
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
