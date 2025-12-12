import "./App.css";
import Typography from "./Components/Typography.jsx";

function App() {
  return (
    <>
      <Typography>Typography : normale</Typography>
      <br />
      <Typography title={true}>Typography: title</Typography>
    </>
  );
}

export default App;
