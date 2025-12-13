import "./App.css";
import Typography from "./Components/Typography.jsx";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <>
      <Typography>Typography : normale</Typography>
      <br />
      <Typography title={true}>Typography: title</Typography>
      <Card title="title" image="./codeim.jpg">
        card
      </Card>
    </>
  );
}

export default App;
