import "./styles.css";

export default function App() {
  return (
    <div className="App card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  const sytles = { width: "442px", objectFit: "contain" };

  return (
    <div className="avatar">
      <img src="../hussy1.jpg" alt="avatar" style={sytles} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Anthony Aneke</h1>
      <p>
        As a professional Software engineer I use the Reactjs Library to build
        beautiful and interactive User interface on both native and web devices
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill backGroundColor="red" name="Javascript" />
      <Skill backGroundColor="blue" name="ReactJs" />
      <Skill backGroundColor="green" name="React Native" />
      <Skill backGroundColor="yellow" name="CSS" />
      <Skill backGroundColor="grey" name="HTML" />
      <Skill backGroundColor="cyan" name="Typescript" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <span
        className="skill"
        style={{ backgroundColor: props.backGroundColor }}
      >
        {props.name} 💪
      </span>
    </div>
  );
}
