import Layout from "@/components/mainLayout";
import "./App.css";
import TestContainer from "./components/testContainer";
import Results from "./components/results";
import { PersonalBestProvider } from "./context/personalBestContext";

function App() {
  return (
    <PersonalBestProvider>
      <Layout>
        <TestContainer />
        {/* <Results /> */}
      </Layout>
    </PersonalBestProvider>
  );
}

export default App;
