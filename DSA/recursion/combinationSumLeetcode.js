var combinationSum = (candinates, target) => {
  const ans = [];
  const findCombinationSum = (ind, target, ds) => {
    if (ind === candinates.length) {
      if (target === 0) {
        ans.push([...ds]);
      }
      return;
    }
    if(candinates[ind]<=target){
        ds.push(candinates[ind]);
        findCombinationSum(ind,target-candinates[ind],ds);
        ds.pop();
    }
    findCombinationSum(ind+1,target,ds)
  };
  findCombinationSum(0,target,[])
  return ans;
};

const candinates = [2,3,6,7];
const target =7;

console.log(combinationSum(candinates,target));
