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
import WeatherApp from "./projects/Værklær-app/WeatherApp";



function WebSite() {
    return (
        <div className="website">
            <TopNav />
            <section className="content">
                <Switch>
                    <Route path="/Projects/WeatherApp">
                        <WeatherApp />
                    </Route>
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
            </section>
            
            <StickyFooter />
        </div>
    );
}
export default WebSite;