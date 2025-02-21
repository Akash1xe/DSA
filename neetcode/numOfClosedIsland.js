function findClosedIsland(grid){
    let visted = new Set();
    let row = grid.length;
    let col = grid[0].length;

    function Dfs(r,c){
        if(r<0 || c<0 ||r>=row||c>=col){
            return false
        }
        if(grid[r][c]===1 ||visted.has(`${r},${c}`)){
            return true;
        }
        visted.add(`${r},${c}`);
        let result = true;
        result &= Dfs(r+1,c);
        result &= Dfs(r-1,c);
        result &= Dfs(r,c+1);
        result &= Dfs(r,c-1);
        return result;



    }
    let res =0;

    for( let r=0;r<row;r++){
        for(let c = 0;c<col;c++){
            if(grid[r][c]===0 && !visted.has(`${r},${c}`)){
                if(Dfs(r,c)){
                    res +=1;
                }

            }
        }
    }
    return res;

}