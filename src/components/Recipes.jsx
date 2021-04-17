import {useState} from 'react'
const elvelShieldRecipe = {
    leatherStrips: 2,
    ironIngots: 1,
    refinedMoonstone: 4,
};

const elvenGauntletrecipe = {
    ...elvelShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
}

console.log(elvelShieldRecipe);
console.log(elvenGauntletrecipe);

const App = () =>{
    const [recipe, setRecipe] = useState({})
    return(
            <div>
                <h3>current recipie:</h3>
                <button onClick={() => setRecipe(elvelShieldRecipe)}>
                    Elven Shield Recipe
                </button>
                <button onClick={() => setRecipe(elvenGauntletrecipe)}>
                    Elven Gauntlet Recipe
                </button>

                <ul>
            {Object.keys(recipe).map((material) => (
                <li key={material}>
                    {material}:{recipe[material]}
                    </li>))}
                </ul>

            </div>

        
    )
}
export default App