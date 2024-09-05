import logo from './logo.svg';
import './App.css';
import Countdown from './component/countdown';
import Title from './component/title';
import { FaDiscord } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <Title/>
      <Countdown/>
      <footer className="footer">
        <p>© 2024 Your Company Name. All rights reserved.</p>

        <p>Join Our Social</p>
        <div className='socials'>
          <a href='https://discord.gg/22BtTBrR'><FaDiscord /></a>
          <a href='https://twitter.com/GorillaMoverz'><BsTwitterX /></a>
          <a href=''><FaTelegramPlane /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
