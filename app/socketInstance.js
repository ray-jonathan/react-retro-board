import socketIOClient from 'socket.io-client';
import { addNoteHelper } from './actions/notes';
import { assignNoteToLane } from './actions/lanes';
import uuid from 'uuid';
const ENDPOINT = 'http://127.0.0.1:4041';
const socket = socketIOClient(ENDPOINT);
// socket.id = uuid.v4();

socket.on('NEW_RETRO', (globalState) => {
    console.log('globalState', globalState, typeof globalState)
    if(Object.keys(globalState).length){

        localStorage.setItem('state', JSON.stringify(globalState))
    } else {
        localStorage.clear()
    }
})

socket.on('ADD_NOTE', (action) => {
    // if(action.socketId !== socket.id){
    //     console.log(action.type); // world
    //     addNoteHelper(action.id)
    //     assignNoteToLane(action.id, action.laneId)
    // }
});

socket.on('RETRO_CONFIGURED', (state) => {
    const newState = JSON.stringify(state)
    localStorage.setItem('state', newState)
})

export default socket;