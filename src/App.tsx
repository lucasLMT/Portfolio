import { FC } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";

const App: FC = () => {
  return (
    <>
      <div className="bg-bkg grid h-full w-full">
        <div className="mx-auto grid w-full max-w-6xl grid-rows-[auto,1fr] bg-white shadow-2xl">
          <NavBar />
          <MainPage />
        </div>
      </div>
    </>
  );
};

export default App;
