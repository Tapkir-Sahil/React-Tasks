import './App.css';
import Navbar from './components/Navbar';
import Home from'./components/Home';
import About from'./components/About';
import Contact from './components/Contact';
import Services from './components/Services';


function App() {
  // props for About
  const userData = {
    name: "Sahil",
    email: "sahil@gmail.com",
    role: "MERN Developer"
  };

  // props for Services
  const serviceData = {
    service1: "Web Development",
    service2: "App Development",
    service3: "UI/UX Design"
  };

  return (
    <div>
      <div>
      <Navbar />
      <Home />
      {/* Passing props */}
      <About userData={userData} />
      <Contact />
      <Services serviceData={serviceData} />
    </div>
    </div>
  );
}

export default App;
