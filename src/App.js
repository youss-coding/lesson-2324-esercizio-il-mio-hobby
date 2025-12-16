import "./App.css";
import Typography from "./Components/Typography.jsx";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <>
      <Typography>Typography : normale</Typography>
      <br />
      <Typography color={{ color: "#519c11" }}>Typography : color</Typography>
      <br />
      <Typography componentType="h1">Typography: title</Typography>
      <Card title="card : title" image="./SimpleCode.jpg">
        card
      </Card>
      <Card title="title" image="./SimpleCode.jpg"></Card>
    </>
  );
}

export default App;
