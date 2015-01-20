var bubbleSort = function bubbleSort(arr, compCount, swapCount) {
  var compCount = compCount || 0;
  var swapCount = swapCount || 0;
  if(arr.length < 2) {
    return arr;
  }
  else {
    for(var n = 0; n < arr.length-1; n++) {
      compCount++;
      if(arr[n] < arr[n+1]) {
        swapCount++;
        var elem = arr[n];
        var nextElem = arr[n+1];
        arr[n+1] = elem;
        arr[n] = nextElem;
      }
    }
    var result = bubbleSort(arr.slice(0,arr.length-1),compCount,swapCount);
    return [arr[arr.length-1]].concat(result);
  }
};

var mergeArray = function mergeArray(arrOne, arrTwo) {
//  var compCount = compCount || 0;
//  var swapCount = swapCount || 0;
  var len = Math.max(arrOne.length,arrTwo.length);
  var lArr = len == arrOne.length ? arrOne : arrTwo;
  var sArr = len == arrOne.length ? arrTwo : arrOne;
  var h = 0;
  var s = 0;
  var newArr = [];
  while((h+s) < len + sArr.length) {
    if(h == lArr.length) {
      newArr.push(sArr[s++]);
    }
    else if(s == sArr.length) {
      newArr.push(lArr[h++]);
    }
    else if( sArr[s] < lArr[h] ) {
      newArr.push(sArr[s++]);
    }
    else {
      newArr.push(lArr[h++]);
    }
  }
  return newArr;
};

var splitArray = function splitArray(arr) {
  var mid = Math.ceil(arr.length/2);
  var arrOne = arr.slice(0,mid);
  var arrTwo = arr.slice(mid);
  return [arrOne, arrTwo];
};

var mergeSort = function mergeSort(arr) {
  var splitArrs = splitArray(arr);
  if (splitArrs[0].length == 2) {
    var splitFirst = splitArray(splitArrs[0]);
    var joinedFirst = mergeArray(splitFirst[0],splitFirst[1]);
    return mergeArray(joinedFirst,splitArrs[1]);
  }
  else if (splitArrs[0].length == 1) {
    return mergeArray(splitArrs[0],splitArrs[1]);
  }
  else {
    return mergeArray(mergeSort(splitArrs[0]), mergeSort(splitArrs[1]));
  }
}; 

for(var i=10; i < 20; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + "native");
    native_test_array.sort();
    console.timeEnd(num_items + "native");

    console.time(num_items + "bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + "bubble");

    console.time(num_items + "merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + "merge");  
} 
