var combinationSum2 =(candinates,target)=>{
    candinates.sort((a,b)=>a-b);
    const ans = [];
    const findCombinationSum =(ind,target,ds)=>{
        if(target===0){
            ans.push([...ds])
            return;
        }
        for(let i=ind;i<candinates.length;i++){
            if(i>ind&&candinates[i]==candinates[i-1])continue;
            if(candinates[i]>target)break;
            ds.push(candinates[i]);
            findCombinationSum(i+1,target-candinates[i],ds)
            ds.pop();
        }
        

    }
    findCombinationSum(0,target,[]);
    return ans;


}


const candinates = [10,1,2,7,6,1,5];
const target =8;
const result = combinationSum2(candinates,target)
console.log(result);
