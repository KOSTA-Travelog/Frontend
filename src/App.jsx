import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 200; i++) {
      result.push(<span key={i}>{i}</span>);
    }
    return result;
  };
  return (
      <>
        <Header/>
        <main style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          minHeight: "calc(100vh - 100px)",
          padding: "20px"
        }}>
          <h1>Hello World</h1>
          {rendering()}
        </main>
        <Footer/>
      </>
  )
}

export default App
