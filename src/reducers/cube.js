import { ADD_CUBE, SHUFFLE, CHANGE_ODD, STOP_ODD, EASTER_EGG } from '../constants/actions';


const initialState = { cubes: [], animateOdd: false };

const reducer = (state, action) => {

    switch (action.type) {
        case ADD_CUBE:
            const cube = {
                number: (state.cubes.length),
                color: '#000000',
                rotation: 0,
                animate: (state.animateOdd && (state.cubes.length + 1) % 2 === 1 ? true : false)
            }
            return { ...state, cubes: state.cubes.concat(cube) };

        case SHUFFLE:
            return { ...state, cubes: state.cubes.sort(() => Math.random() - 0.5) };

        case CHANGE_ODD:
            state.cubes.forEach(cube => {
                if (cube.number % 2 === 0)
                    cube.animate = true;
            });
            return { ...state, animateOdd: true };

        case STOP_ODD:
            state.cubes.forEach(cube => {
                if (cube.number % 2 === 0)
                    cube.animate = false;
            });
            return { ...state, animateOdd: false };

        case EASTER_EGG:
            const easterCube = state.cubes[state.cubes.length - 1];
            easterCube.color = "#FF0000";

            return { ...state };



        default:
            return state;
    }
}

export { reducer, initialState };