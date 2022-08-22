import { Home, Error, Editor } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { SvgContext } from "./context";

function App() {
  const { documents } = useContext(SvgContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {documents.map((d, index) => (
        <Route
          key={index}
          path={d.path}
          element={<Editor SVGComponent={d.component} title={d.title} />}
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
