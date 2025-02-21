class solution {
  solve(i,j,str, n, ans, vis,sty, di, dj) {
    if(i===n-1&&j===n-1){
        ans.push(vis);
        return;
    }
let direction = "DLRU";


for(let ind = 0;ind<4;ind++){
    
}

  }

  findPath(str) {
    let n = str.length;
    let ans = [];
    let vis = Array.from({ length: n }, () => Array(n).fill(0));
    let di = [1, 0, 0, -1];
    let dj = [0, -1, 1, 0];

    if ((str[0][0] = 1)) {
      this.solve(0, 0, str, n, ans, vis, "", di, dj);
    }

return ans;

  }
}
