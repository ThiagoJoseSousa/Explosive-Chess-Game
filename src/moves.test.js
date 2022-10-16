import possibleMoves from "./moves";
import boardFactory from "./boardFactory";

let board=boardFactory();
test ('check if possibleMoves is returning the array with right coordinates', ()=>{
    let knight= {}
    knight.name='knight'
    knight.coordinates=[0,0]
    knight.color='white'
    board.squares[1][2]={color:'white'}
    expect(possibleMoves(knight,board)).toEqual([[2,1]])
})

