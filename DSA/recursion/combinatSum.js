class Solution {
  findCombination(ind, target, arr, ans, ds) {

    //base condition
    if (ind === arr.length) {
      if (target === 0) {
        ans.push([...ds]);
      }
      return;
      
    }

    //pick condition
    if (arr[ind] <= target) {
      ds.push(arr[ind]);
      this.findCombination(ind, target - arr[ind], arr, ans, ds);

      //make sure to remove the element from dataStructure while backtracking
      ds.pop();
    }
//not pick  condition
    this.findCombination(ind + 1, target, arr, ans, ds);
  }

  combinationSum(candinates, target) {
    let ans = [];
    let ds = [];
    this.findCombination(0, target, candinates, ans, ds);
    return ans;
  }
}

const obj = new Solution();
const v = [2, 3, 6, 7];
const target = 7;

const ans = obj.combinationSum(v, target);
console.log("Combination are :");
ans.forEach((combination) => {
  console.log(combination.join(" "));
});
