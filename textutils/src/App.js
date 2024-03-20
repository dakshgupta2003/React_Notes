import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about_text="about us" />
      {/* container is a class in BOOTSTRAP that gives the element inside it some css properties */}
      {/* my-3 is a property in bootstrap that give margin y of 3px */}
      <div className="container my-3">
        <Textform heading ="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
