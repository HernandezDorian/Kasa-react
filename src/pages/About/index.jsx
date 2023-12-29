import "./index.scss";
import Collapse from "../../components/Collapse";
import Imgbar from "../../components/Imgbar";
import background from "../../assets/BgAbout.jpg";

function About() {
  return (
    <div className="About">
      <Imgbar className="About__Imgbar" text="" img={background} />
      <div className="About__CollapseList">
        <Collapse className={"About__CollapseList__Collapse"} Title="Fiabilité">
          <ul>
            <li>Content Test</li>
            <li>Content a Test</li>
          </ul>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Respect">
          <ul>
            <li>Content aa Test 2</li>
            <li>Content Test 2</li>
            <li>Content Test 2</li>
          </ul>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Service">
          <ul>
            <li>Content Test 3</li>
            <li>Content aaa aaaaa aaaa Test 3</li>
            <li>Content a Test 3</li>
            <li>Content Test 3</li>
          </ul>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Sécurité">
          <ul>
            <li>Content aaaa Test 4</li>
            <li>Content aaaa aa Test 4</li>
            <li>Content Test 4</li>
            <li>Content aa aaaaATest 4</li>
            <li>Content Test 4</li>
            <li>Content Test 4</li>
            <li>Content AAA AAAA aaaTest 4</li>
            <li>Content aaa aaa aaaaaaa Test 4</li>
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default About;
