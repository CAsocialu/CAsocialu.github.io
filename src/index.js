import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

var stringcolonthree = "";
function rawr(event) {
  if (document.querySelector("img#číča")) return "mňau"
  stringcolonthree += event.key;
  if (stringcolonthree.includes(":3")) {
    stringcolonthree = "";
    document.removeEventListener("keypress", event => rawr(event));
    document.querySelector("body").innerHTML += `<img id="číča" src="/číča.png" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: -1">`;
    document.querySelector("head").innerHTML = "";
    document.querySelector("div#root").remove()
  }
}
document.addEventListener("keypress", event => rawr(event))