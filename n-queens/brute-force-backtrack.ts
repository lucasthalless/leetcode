function solveNQueens(n: number): string[][] {
    const cols = new Set<number>([])
    const positiveDiagonals = new Set<number>([]) // (rows + columns)
    const negativeDiagonals = new Set<number>([])// (rows - columns)

    const resultBoards: string[][] = []
    let newBoard: string[] = []

    for(let r = 0; r < n; r++) {
        if (r == n) {
            return resultBoards
        }
        
        const filledRow = fillRowBacktrack(r, 0, n, cols, positiveDiagonals, negativeDiagonals, resultBoards);
        newBoard.push(filledRow);
        
    }

    console.log(newBoard)

    function fillRowBacktrack(row: number, col: number, rowLength: number, cols: Set<number>, positiveDiagonals: Set<number>, negativeDiagonals: Set<number>, resultBoards: string[][]): string {
        const isInDiagonal = positiveDiagonals.has(row + col) || negativeDiagonals.has(row - col)

        if (!cols.has(col) && !isInDiagonal) {
            let filledRow = ""
            for (let i = 0; i < rowLength; i++) {
                if (i === col) {
                    filledRow += "Q"
                } else {
                    filledRow += "."
                }
            }

            cols.add(col)
            positiveDiagonals.add((row + col))
            negativeDiagonals.add((row - col))
            return filledRow
        }

        return fillRowBacktrack(row, col + 1, rowLength, cols, positiveDiagonals, negativeDiagonals, resultBoards)
    }

    return resultBoards;
};
