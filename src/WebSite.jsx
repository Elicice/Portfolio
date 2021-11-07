import { Article } from "@mui/icons-material";
import HomePage from "./HomePage";
import StickyFooter from "./StickyFooter";
import ProjectBinaryClock from "./ProjectBinaryClock";
import TopNav from "./TopNav";
import './WebSite.css';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from "./Projects";



function WebSite() {
    return (
        <div className="website">
            <TopNav />
            <header className="header">

                <Switch>
                    <Route path="/Projects/BinaryClock">
                        <ProjectBinaryClock />
                    </Route>
                    <Route path="/Projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>

            </header>
            <StickyFooter />
        </div>
    );
}
export default WebSite;