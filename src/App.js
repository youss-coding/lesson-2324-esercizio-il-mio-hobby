import "./App.css";
import Typography from "./Components/Typography.jsx";
import Card from "./Components/Card.jsx";
import Colors from "./Components/Colors.js";

function App() {
  return (
    <>
      <Typography>Typography : normale</Typography>
      <br />
      <Typography color={Colors.primary}>Typography : color: primary</Typography>
      <br />
      <Typography color={Colors.secondary}>Typography : color: secondary</Typography>
      <br />
      <Typography color={Colors.inverse} background={Colors.backgroundInverse}>Typography : color: inverse</Typography>
      <br />
      <Typography>Prova</Typography>
      <Typography componentType="h1">Typography: title</Typography>
      <Card title="card : Title" image="./SimpleCode.jpg">Card</Card>
      <Card title="title" image="./SimpleCode.jpg"></Card>
    </>
  );
}

export default App;
