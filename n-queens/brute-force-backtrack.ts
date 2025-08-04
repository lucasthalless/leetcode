function solveNQueens(n: number): string[][] {
    const cols = new Set([])
    const positiveDiagonals = new Set([]) // (rows + columns)
    const negativeDiagonals = new Set([])// (rows - columns)

    const resultBoards: string[][] = []

    for(r = 0; r < n; r++) {
        if (r == n) {
            return resultBoards
        }

        backtrack()
    }

    function backtrack(row: number, col: number, rows: Set<number>, cols: Set<number>, resultBoards: [][]) {

    }

};
