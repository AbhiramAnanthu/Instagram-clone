import SideBar from "./components/sideBar";
import MainBody from "./components/center";
import RightBar from "./components/rightBar";
import TopBar from "./components/topBar";
function App(){
    return(
        <div className="wholeWrap">
            <div className="col-1">
                <SideBar />
            </div>
            <div className="col-2">
                <TopBar />
                <MainBody />
            </div>
            <div className="col-3">
                <RightBar />
            </div>
        </div>
    )
}

export default App;