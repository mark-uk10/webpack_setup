import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/sword.png";
import sword2 from "../images/sword-svgrepo-com.svg";

const App = () =>{
    return(
       
            <>
            <main>
                <section className="hero"></section>
                <section>
                    <h1>hi react</h1>
                </section>
                <img src={sword} alt="sword" width="250"/>
                <img src={sword2} alt="sword" width="250"/>
                <Recipes />
            </main>

           
            </>

    )
}
export default App