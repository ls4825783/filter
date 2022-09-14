// Can't able to find proper logic..

var findMedianSortedArrays = function (nums1, nums2) {
    var mergedArray = [...nums1, ...nums2]
    console.log(mergedArray)
    if (mergedArray.length == 1) {
        return mergedArray[0];
    } 
    // else if (mergedArray.lenght == 2) {
    //     return (mergedArray[0] + mergedArray[1])/2;
    // }
    var sortedArray = mergedArray.sort();
    var median = Math.floor(sortedArray.length / 2);
    console.log(sortedArray)
    console.log(median)
    if (median % 2 != 0 && median != 1) {
        return sortedArray[median];
    } else {
        evenMedian = (sortedArray[median - 1] + sortedArray[median]) / 2;
        return evenMedian;
    }
};

console.log(findMedianSortedArrays([-5], [3, 2]))
