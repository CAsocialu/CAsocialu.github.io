import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

var stringcolonthree = "";
function rawr(event) {
  if (document.querySelector("img#číča")) return "mňau"
  if (document.querySelector("div#rawrx3")) return "rawr x3"
  stringcolonthree += event.key;
  if (stringcolonthree.includes(":3")) {
    stringcolonthree = "";
    document.removeEventListener("keypress", event => rawr(event));
    document.querySelector("body").innerHTML += `<img id="číča" src="/číča.png" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: -1" draggable="false">`;
    document.querySelector("head").innerHTML = "";
    document.querySelector("div#root").remove()
  }

  else if (stringcolonthree.toLowerCase().includes("rawr x3")) {
    stringcolonthree = "";
    document.removeEventListener("keypress", event => rawr(event));
    document.querySelector("html").style = "background: black";
    var i = 0;
    var rawrx3 = document.createElement("div");
    rawrx3.id = "rawrx3";
    rawrx3.style = "width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center;"
    rawrx3.innerHTML = 
    `<img id="whOwOps" src="/assets/whOwOps/whOwOps0.png" style="aspect-ratio: 16/9; max-height: 100%; max-width: 100%;" draggable="false">`
    document.querySelector("html").style = "background: #0078d7; height: 100%; width: 100%; cursor: none; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;";
    document.querySelector("body").style = "height: 100%; margin: 0; display: flex; cursor: none; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;"
    document.querySelector("html").requestFullscreen()
    document.querySelector("body").appendChild(rawrx3)
    document.querySelector("head").innerHTML = "";
    document.querySelector("div#root").remove()
    setTimeout(() => {
      document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
      setTimeout(() => {
        document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
        setTimeout(() => {
          document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
          setTimeout(() => {
            document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
            setTimeout(() => {
              document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
              setTimeout(() => {
                document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
                setTimeout(() => {
                  document.querySelector("img#whOwOps").setAttribute("src", `/assets/whOwOps/whOwOps${++i}.png`);
                  setTimeout(() => {
                    document.querySelector("html").style = "background: black"
                    setTimeout(() => {
                      document.location.reload()
                    }, Math.random() * 3000);
                  }, Math.random() * 1000)
                }, Math.random() * 2500 + 2500)
              }, Math.random() * 2500 + 2500)
            }, Math.random() * 2500 + 2500)
          }, Math.random() * 2500 + 2500)
        }, Math.random() * 2500 + 2500)
      }, Math.random() * 2500 + 2500)
    }, Math.random() * 2500 + 2500)
  }
}

document.addEventListener("keypress", event => rawr(event))