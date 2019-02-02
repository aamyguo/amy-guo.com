var xTurn = true;
var board = [
    0,0,0,
    0,0,0,
    0,0,0,
];


function buttonClick(i) {
    var p = xTurn ? "X" : "O";
    $("#btn"+i).prop('value', p);
    $("#btn"+i).attr('disabled', 'disabled');
    board[i] = xTurn ? 1 : 2;
    var win = checkForWin(i);
    if(win) {
        for(var j = 0; j < 9; j++) {
            $("#btn"+j).attr('disabled', 'disabled');
            $("#gameover").text(p + " wins!");
            $("#restart").show();
        }
    }
    else {
        xTurn = !xTurn;
        p = xTurn ? "X" : "O";
        $("#turn").text(p + " goes next");
    }
}

function restart() {
    $("#turn").text("X goes first");
    xTurn = true;
    $("#gameover").text("");
    $("#restart").hide();
    board = [0,0,0,0,0,0,0,0,0];
    for(var j = 0; j < 9; j++) {
        $("#btn"+j).prop('value', '--');
        $("#btn"+j).attr('disabled', false);
    }
}

function checkForWin(i) {
    var row = Math.floor(i/3);
    var col = i % 3;
    if (board[3*row] === board[3*row+1] && board[3*row+1] === board[3*row+2] && board[3*row] != 0)
        return true;
    if (board[col] === board[col + 3] && board[col + 3] === board[col + 6] && board[col] != 0)
        return true;
    if(row == col) {
        if(board[0] === board[4] && board[4] === board[8] && board[0] != 0)
            return true;
    }
    if(row + col == 2) {
        if(board[2] === board[4] && board[4] === board[6] && board[2] != 0)
            return true;
    }
    return false;
}