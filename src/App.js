import './App.css';
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Popular from "./Pages/Popular/Popular";
import TopRated from "./Pages/TopRated/TopRated";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Home from "./components/Home/Home";
import DetailPage from "./Pages/DetailPage/DetailPage";
import DetailActors from "./Pages/DetailPage/DetailActors";
import Search from "./components/Search/Search";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                <Route path={"/now-playing"} element={<NowPlaying/>}/>
                <Route path={"/detail-page/:movieId"} element={<DetailPage/>}/>
                <Route path={"/detail-actors/:actorsId"} element={<DetailActors/>}/>
                <Route path={"/movie-search/:movieName"} element={<Search/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
