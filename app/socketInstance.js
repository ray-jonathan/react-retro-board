import socketIOClient from 'socket.io-client';
import {v4} from 'uuid';
import stringifyIsTheSame from './stringifyIsTheSame';
const ENDPOINT = 'http://127.0.0.1:4041';
const socket = socketIOClient(ENDPOINT);
socket.id = v4();

socket.on('BOARD_UPDATE', (newState) => {
    console.log('heard about a new board update')
    delete newState.socketId
    const oldState = JSON.parse(localStorage.getItem('state'))
    if(!stringifyIsTheSame(newState, oldState)){
        console.log('updated state')
        localStorage.setItem('state', JSON.stringify(newState))
    } 
})
socket.on('NEW_PHASE', (phase) => {
    console.log('heard about a new phase update')
    delete phase.socketId
    const oldPhase = JSON.parse(localStorage.getItem('phase'))
    if(!stringifyIsTheSame(phase, oldPhase)){
        console.log('updated phase')
        localStorage.setItem('phase', JSON.stringify(phase))
    } 
})

export default socket;