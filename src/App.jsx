import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import NoMatch from "./components/NoMatch";

import {
  Link,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <nav className="text-center py-6 space-x-8 text-xl">
        <Link to="/" className="hover:text-sky-500">About me</Link>
        <Link to="projects" className="hover:text-sky-500">My projects</Link>
        <Link to="contact-me" className="hover:text-sky-500">Contact me</Link>
      </nav>
      <Routes>
        <Route index element={<AboutMe />} />
        <Route path="projects" element={<MyProjects />} />
        <Route path="contact-me" element={<ContactMe />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
