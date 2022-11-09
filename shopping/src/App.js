// import logo from './logo.svg'
import './App.css';
import{AtharMain}from "./Components/Athar/AtharMain"
import { AtiyaMain } from "./Components/Atiya/AtiyaMain";
import { KhizarMain } from "./Components/Khizar/KhizarMain";
import { VaishaliMain } from "./Components/Vaishali/VaishaliMain";
import { ZishanMain } from "./Components/Zishan/ZishanMain";
import { MohsinMain } from "./Components/Mohsin/MohsinMain";

function App() {
  return (
    <div className="App">
      <AtharMain />
      <VaishaliMain />
      <AtiyaMain />
      <KhizarMain />
      <ZishanMain />
      <MohsinMain/>
    </div>
  );
}

export default App;
