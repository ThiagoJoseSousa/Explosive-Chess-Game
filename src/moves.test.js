import possibleMoves from "./moves";
import boardFactory from "./boardFactory";

let board=boardFactory();
test.skip ('check if possibleMoves is returning the array with right coordinates', ()=>{
    let knight= {}
    knight.type='knight'
    knight.coordinates=[0,0]
    knight.color='white'
    board.squares[1][2]={color:'white'}
    expect(possibleMoves(knight,board)).toEqual([[2,1]])
})

test.skip ('check if rook array is getting the right possible coordinates', ()=> {
    let rook={}
    rook.type='rook';
    rook.coordinates=[0,0];
    rook.color='white';
    board.squares[1][0]= {color:'white'}
    board.squares[0][1]= {color:'black'}
    expect (possibleMoves(rook,board)).toEqual([[0,1]])
})

test ('check if queen is being calculated', ()=> {
    let queen={}
    queen.type='queen';
    queen.coordinates=[0,0];
    queen.color='white';
    expect (possibleMoves(queen,board)).toEqual('something')
})
