import axios from "axios";
import { Header } from "./Header";
import { PhotosPage } from "./PhotosPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <PhotosPage />
      <Footer />
    </div>
  );
}

export default App;
