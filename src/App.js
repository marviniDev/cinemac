import AppRoutes from "./routes/app.routes";
import GlobalStyle from "./style";
import { AuthProvider } from "../src/contexts/auth";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
