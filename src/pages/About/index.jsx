import "./index.scss";
import Collapse from "../../components/Collapse";

function About() {
  return (
    <div className="About">
      <h1>Hello About</h1>
      <Collapse className={"About__Collapse"} Title="Test">
        <ul>
          <li>Content Test</li>
          <li>Content Test</li>
        </ul>
      </Collapse>
      <Collapse className={"About__Collapse"} Title="Test2">
        <ul>
          <li>Content Test 2</li>
          <li>Content Test 2</li>
        </ul>
      </Collapse>
    </div>
  );
}

export default About;
