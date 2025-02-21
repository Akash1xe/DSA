const solve = (board) => {
    for (let i = 0; i < 9; i++) { 
        for (let j = 0; j < 9; j++) { // Iterate over columns
            if (board[i][j] === '.') { // Check for empty cell
                for (let c = '1'; c <= '9'; c = String.fromCharCode(c.charCodeAt(0) + 1)) { // Ensure '1' to '9' as strings
                    if (isValid(board, i, j, c)) { // Check if the number is valid
                        board[i][j] = c; // Place the number

                        if (solve(board)) { 
                            return true;
                        }

                        board[i][j] = '.'; 
                    }
                }
                return false; 
            }
        }
    }
    return true; 
};

const isValid = (board, row, col, c) => {
    for (let i = 0; i < 9; i++) {
        
        if (board[i][col] === c || board[row][i] === c) {
            return false;
        }
        
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === c) {
            return false;
        }
    }
    return true; 
};

var solveSudoku = function(board) {

    solve(board);
};
