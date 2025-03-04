import Root from "./route/route";
import "../src/assets/css/style.css";
import 'swiper/css';
import 'react-modal-video/css/modal-video.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme-color', 'skin-3')
    document.querySelector('body').setAttribute('id', 'bg')
  }, [])

  return (
    <>
      <Root />
    </>
  )
}

export default App
