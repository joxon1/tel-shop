import Footer from "./components/Footer";
import Header from "./components/Header";
import NewList from "./components/NewList";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container content">
        <NewList />
      </div>
      <Footer />
    </div>
  );
}
