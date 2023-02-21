import './App.sass';
import {Route, Routes} from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import SuccessEmailPage from "./pages/SuccessEmailPage/SuccessEmailPage";
import Chat from "./pages/Chat/Chat";
import ErrPage404 from './pages/Error/404';
import NotConfirmEmail from "./pages/NotConfirmEmail/NotConfirmEmail";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Home from './pages/Home/Home'
import { useSelector } from 'react-redux';
import NewPassword from './pages/New-Password/New-Password';
import Start from "./pages/Start/Start";
import Layout from "./components/Layout/Layout";

function App() {
  const { user } = useSelector(state=>state.auth);
  return (
    <div className="App">
        <Routes>
            <Route index element={<Start/>}/>
            <Route path={'registration'} element={<RegPage/>}/>
            <Route path={'authorization'} element={<AuthorizationPage/>}/>
            <Route path={'success-email'} element={<SuccessEmailPage/>}/>
            <Route path={'error404'} element={<ErrPage404/>}/>
            <Route path={'chat'} element={<Chat/>}/>
            <Route path={'expired-token'} element={<NotConfirmEmail/>}/>
            <Route path={'new-password'} element={<NewPassword/>}/>
            <Route element={<ProtectedRouter isAllowed={!!user}/>}>
                <Route path='/home' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
