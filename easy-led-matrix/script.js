// LED Matrix
import { LedMatrix } from "https://www.unpkg.com/@fabwaseem/easy-led-matrix@1.3.1/easy-led-matrix.min.js";
import { Pane } from "https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js";

let config = {
  shape: "square",
  size: 12, //cell size
  color: "#161819", //cell color

  amount: 1000, //blinking cells amount
  litColor: "#0080FF", //blinking cells color

  gap: 3, //gap between cells
  noise: 0.01, //noise level
  fps: 24, //frames per second
  background: "#000000", //background color
};

const container = document.querySelector(".container");
const matrix = new LedMatrix(container, config);
matrix.init();

const pane = new Pane({
  title: "Parameters",
  expanded: true,
});

pane.on("change", (ev) => {
  config[ev.target.key] = ev.value;
  matrix.updateConfig(config);
});

pane.addBinding(config, "shape", {
  options: {
    Square: "square",
    Circle: "circle",
  },
  label: "Cell shape",
});
pane.addBinding(config, "size", {
  min: 4,
  max: 100,
  step: 1,
  label: "Cell size",
});

pane.addBinding(config, "gap", {
  min: -1,
  max: 10,
  step: 1,
  label: "Gap between cells",
});

pane.addBinding(config, "amount", {
  min: 0,
  max: 2000,
  step: 1,
  label: "Blinking cells amount",
});

pane.addBinding(config, "noise", {
  min: 0,
  max: 1,
  step: 0.01,
  label: "Noise level",
});
pane.addBinding(config, "fps", {
  min: 1,
  max: 60,
  step: 1,
  label: "Frames per second",
});
pane.addBinding(config, "color", { label: "Cell color" });
pane.addBinding(config, "litColor", { label: "Blinking cells color" });
pane.addBinding(config, "background", { label: "Background color" });
