import AppRoutes from "./routes/AppRoutes";
import { Header } from "./components/www/site/Header";
import Footer from "./components/www/site/Footer";
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
