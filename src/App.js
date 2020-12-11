import { useReducer, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import Button from './Styles/Button'
import Cube from './Styles/Cube'
import { add_cube, shuffle, change_odd, stop_odd, easter_egg} from './action/action-type'
import { reducer, initialState } from './reducers/cube'



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cubes } = state;

  useEffect(() => {
    if (cubes.length === 17) {
      dispatch(easter_egg())
    }
  }, [cubes.length]);

  return (
    <div className="App">
      <div>
        <Button onClick={() => dispatch(add_cube())}>Ajoute Cube</Button>
        <Button onClick={() => dispatch(shuffle())}>Randomise cube</Button>
        <Button onClick={() => dispatch(change_odd())}>Anime les impairs</Button>
        <Button onClick={() => dispatch(stop_odd())}>Stop les impairs</Button>
      </div>

      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <pointLight
          intensity={0.5}
          position={[0, 0, 0]}
        />
        {state.cubes.map((cube, index) =>
            <Cube {...cube} key={index} id={index} />
          )
        }
      </Canvas>

    </div>
  );
}

export default App;
