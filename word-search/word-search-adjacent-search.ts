function exist(board: string[][], word: string): boolean {

    const n_rows = board.length;
    const n_cols = board[0].length;
    
    for (let row = 0; row < n_rows; row++) {
        for (let col = 0; col < n_cols; col++) {
            if (backtrack(board, n_rows, n_cols, row, col, word)) {
                return true
            }
        }
    }

    return false
};


function backtrack(board: string[][], n_rows: number, n_cols: number, row: number, col: number, suffix: string): boolean {
    if (suffix.length === 0) {
        return true
    }

    const out_of_bounds = row < 0 || row == n_rows || col < 0 || col == n_cols;

    if (out_of_bounds || board[row][col] !== suffix[0]) {
        return false
    }

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]


    board[row][col] = "#"

    for (const direction of directions) {
        if (backtrack(board, n_rows, n_cols, (row + direction[0]), (col + direction[1]), suffix.substring(1))) {
            return true
        }
    }

    board[row][col] = suffix[0]

    return false
}