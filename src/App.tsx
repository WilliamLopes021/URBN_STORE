import { RouterContext } from "./interfaces/router/RouterContext";
import { AppRoutes } from "./interfaces/router";

function App() {
  return (
    <RouterContext>
      <AppRoutes />
    </RouterContext>
  );
}

export default App;
