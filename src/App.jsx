import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./index.scss";
import NavBar from "./components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Support from "./Pages/Support/Support";

const queryClient = new QueryClient();

const App = () => {
  return (
    <main className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </main>
  );
};

export default App;
