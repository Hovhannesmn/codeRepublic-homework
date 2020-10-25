(() => {

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const columns = Array(9).fill(1).map(() => new Map());
    
    const block = Array(9).fill(1).map(() => new Map());
    let index = 0;
    let columnCount = 0;

    
    for (row of board) {
        let tpl = 0;       

        for (let i = 0; i < row.length; i++ ) {
          
          if (row[i] !== '.') {
           const number = row[i];
           
           const mask = 1 << number;      

           if (number == 5) {
               debugger;
           }
           
           if (mask & tpl) {
              return false;
           } else {
              tpl = mask | tpl;
           }

          let blockId = parseInt(i / 3) + columnCount;
          
          if (columns[i].has(number) || block[blockId].has(number)) {
            return false
          }

          block[blockId].set(number, true);
          columns[i].set(number, true);         
        }
           
      }
      index++;
      
      columnCount = index < 3 ? 0
       : index < 6 
        ? 3 : 6; 

    }
    
    return true;
    
};


var board = [
    ["7",".",".",  ".","4",".",  ".",".","."],
    [".",".",".",  "8","6","5",  ".",".","."],
    [".","1",".",  "2",".",".",  ".",".","."],
    
    [".",".",".",  ".",".","9",  ".",".","."],
    [".",".",".",  ".","5",".",  "5",".","."],
    [".",".",".",  ".",".",".",  ".",".","."],
    
    [".",".",".",  ".",".",".",  "2",".","."],
    [".",".",".",  ".",".",".",  ".",".","."],
    [".",".",".",  ".",".",".",  ".",".","."]
];



console.log(isValidSudoku(board));

})()