
class Solution {
    func(ind,sum,arr,sumSubset){
        if(ind===arr.length){
            sumSubset.push(sum);
            return;
        }
        this.func(ind+1,sum+arr[ind],arr,sumSubset);
          this.func(ind+1,sum,arr,sumSubset);
        
    }
    
    
    
    subsetSums(arr) {
        let sumSubset =[];
        this.func(0,0,arr,sumSubset);
        sumSubset.sort((a,b)=>a-b);
        return sumSubset;
    }
}

let arr = [3,1,2];
let solution = new Solution();
let result = solution.subsetSums(arr);
console.log(result);
