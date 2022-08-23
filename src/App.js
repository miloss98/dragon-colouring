import { HomePage, ErrorPage, EditorPage } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { SvgContext } from "./context";

function App() {
  const { documents } = useContext(SvgContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {documents.map((d, index) => (
        <Route
          key={index}
          path={d.path}
          element={<EditorPage SVGComponent={d.component} title={d.title} />}
        />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
