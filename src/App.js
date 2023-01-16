import './App.sass';
import {Route, Routes} from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import SuccessEmailPage from "./pages/SuccessEmailPage/SuccessEmailPage";
import Chat from "./pages/Chat/Chat";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'registration'} element={<RegPage/>}/>
            <Route path={'authorization'} element={<AuthorizationPage/>}/>
            <Route path={'success-email'} element={<SuccessEmailPage/>}/>
            <Route path={'chat'} element={<Chat/>}/>
        </Routes>
    </div>
  );
}

export default App;
