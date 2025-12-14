import "./App.css";
import Typography from "./Components/Typography.jsx";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <>
      <Typography>Typography : normale</Typography>
      <br />
      <Typography title={true}>Typography: title</Typography>
      <Card title="title" image="./SimpleCode.jpg"></Card>
      <Card title="title" image="./SimpleCode.jpg"></Card>
      <Card title="title" image="./SimpleCode.jpg"></Card>
      <Card title="title" image="./SimpleCode.jpg"></Card>
    </>
  );
}

export default App;
