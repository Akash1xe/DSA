function printAns(ans) {
    console.log("The unique subsets are ");
    console.log("[ ");
    for (let i = 0; i < ans.length; i++) {
        console.log("[ ");
        for (let j = 0; j < ans[i].length; j++) {
            console.log(ans[i][j] + " ");
        }
        console.log("]");
    }
    console.log(" ]");
}



const findSubset=(ind,nums,ds,ans)=>{
    ans.push([...ds]);
    for(let i=ind;i<nums.length;i++){
        if(i!=ind&&nums[i]==nums[i-1])continue;
        ds.push(nums[i])
        findSubset(ind+1,nums,ds,ans)
        ds.pop();
    }

}

const subsetsWithDup = function(nums) {

    let ans = [];
   let ds = [];
   nums.sort((a, b) => a - b);
   findSubset(0, nums, ds, ans);
   return ans;
   
};

let nums = [1, 2, 2];
let ans = subsetsWithDup(nums);
printAns(ans);

