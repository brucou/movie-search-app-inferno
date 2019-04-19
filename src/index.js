import "./uikit.css";
import "./index.css";
import { render } from "inferno";
import { h } from "inferno-hyperscript";
import { createStateMachine, makeWebComponentFromFsm } from "state-transducer";
import { screens } from "./screens";
import { movieSearchFsmDef, commandHandlers, effectHandlers } from "./fsm";
import { COMMAND_RENDER, events } from "./properties";
import { eventEmitterAdapter } from "./helpers";

const fsm = createStateMachine(movieSearchFsmDef, {
  debug: { console }
});

const infernoRenderCommandHandler = {
  [COMMAND_RENDER]: (next, params, effectHandlers, el) => {
    const { screen, query, results, title, details, cast } = params;
    const props = params;
    render(screens(next)[screen](props), el);
  }
};
const commandHandlersWithRender = Object.assign(
  {},
  commandHandlers,
  infernoRenderCommandHandler
);

const initialEvent = {
  initialEvent: { [events.USER_NAVIGATED_TO_APP]: void 0 }
};

makeWebComponentFromFsm({
  name: "movie-search",
  eventHandler: eventEmitterAdapter(),
  fsm,
  commandHandlers: commandHandlersWithRender,
  effectHandlers,
  options: initialEvent
});

render(h("movie-search"), document.getElementById("root"));
