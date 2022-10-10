import Grid from "./components/Grid";
import Header from "./components/Header";

function App() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-start space-y-20 m-auto overflow-hidden pb-20">
      <Header />
      <Grid />
    </main>
  );
}

export default App;
