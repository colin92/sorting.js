describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with one element', function() {
      expect(bubbleSort([1])).toEqual([1]);
    });

    it('handles an array with more than one element', function() {
      expect(bubbleSort([3,1,2])).toEqual([1,2,3]);
      expect(bubbleSort([3,7,9,4,1,2])).toEqual([1,2,3,4,7,9]);
      expect(bubbleSort([3,1,2])).toEqual([1,2,3]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
      expect(mergeArray([1,4,5],[2,3,9])).toEqual([1,2,3,4,5,9]);
      expect(mergeArray([2,3],[1])).toEqual([1,2,3]);
      expect(mergeArray([3],[7])).toEqual([3,7]);
      expect(mergeArray([1,4,6,7,10],[2,3,5,8,9])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('is able to split an array into two halves', function() {
      expect(splitArray([3,6,3,8,4,1,73,7,23,9,2,12,36,92,99]))
      .toEqual([[3,6,3,8,4,1,73,7],[23,9,2,12,36,92,99]]);
    });

    it('handles an array with more than one element', function() {
      expect(mergeSort([3,1,2])).toEqual([1,2,3]);
      expect(mergeSort([3,7,9,4,1,2])).toEqual([1,2,3,4,7,9]);
      expect(mergeSort([3,1,2])).toEqual([1,2,3]);
    });

});
