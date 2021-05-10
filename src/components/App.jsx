//import "../styles/index.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import Recipes from "./Recipes";
import Grid from "./Grid";
import sword from "../images/sword.png";
import sword2 from "../images/sword-svgrepo-com.svg";

function App(){
    return(
        <div className="app">
            <Navbar />
            <div className="content">
               <Home />
            </div>
        </div>

            // <>
            // <Grid />
            // <main>
            //     <section className="hero"></section>
            //     <section>
            //         <h1>hi react</h1>
            //     </section>
            //     <img src={sword} alt="sword" width="250"/>
            //     <img src={sword2} alt="sword" width="250"/>
            //     <Recipes />
            // </main>
            // </>
    )
}
export default App