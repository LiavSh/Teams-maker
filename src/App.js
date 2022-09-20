import "./App.css";
import FrontPage from "./components/UI/main-page/FrontPage";
import NavBar from "./components/UI/nav-bar/NavBar";
import Form from "./components/UserForm/Form/Form";

function App() {
  return (
    <div>
      <NavBar />
      <FrontPage />
      <Form />
    </div>
  );
}

export default App;
