// Shares the algorithm, but not the code, found at:
// https://www.geeksforgeeks.org/in-place-merge-sort/
 
function merge(arr, lo, mid, hi)
{
 
// Partitions the composite list, arr, into two (virtual) sub-lists
lo2 = mid + 1;
 
// Since the two sub-lists are already sorted, if the last element of the first list (mid)
// is less than the first element of the second list (lo2), the composite list is already sorted.
// Just return
if (arr[mid] <= arr[lo2]) {
return;
}
 
// lo <= mid: If lo exceeds mid, then the elements in [arr[0], mid] are sorted with respect to
// the elements in (mid, hi].  arr is sorted
// lo2 <= hi: Prevents out of bounds errors
while (lo <= mid && lo2 <= hi) {
 
 // Iterates through first sub-list.  If the first element of the first sub-list (lo) is less than
 // the first element of the second sub-list, lo2, it is in place with respect to [start of composite
 // list, lo]. Examine the next element of the first sub-list
 if (arr[lo] <= arr[lo2]) {
    lo++;
 }
 
 // If the first element of the second sub-list, lo2, is less than lo, move the element
 // to lo's index and shift everything above it to the right 1 position. lo2 has already been
 // checked against [start of composite list, lo]
 else {
   value = arr[lo2];
   index = lo2;
    
   while (index != lo) {
     arr[index] = arr[index - 1];
     index--;
    }
 
    arr[lo] = value;
 
    // The composite list is sorted in the interval [start of composite list, lo].
    // Since lo2 is either in this interval, increment both lo and
    // lo2.  Increment mid to ensure the first condition of the while loop functions
    // properly (as is described above)
    lo++;
    mid++;
    lo2++;
}}}
 
function msort(x, lo, hi) {
var mid = Math.floor((lo+hi)/2);
var j = 2;
do {
// Sorts first half of array
if (j - 1 >= mid) {
merge(x, 0, j / 2 - 1, mid);
}
else {
for (var i = 0; i <= mid; i = i + j) {
if (i + j <= mid) {
  merge(x, i, i + (j / 2) - 1, i + j - 1);
}
else {
  merge(x, i, i + (j/2) - 1, mid);
}}}
// Sorts second half of array.  We could do this all in one for loop, but I think it looks
// cleaner like this
if (j - 1 >= mid) {
merge(x, mid + 1, j / 2 + mid, hi);
}
else {
for (var k = mid + 1; k <= hi; k = k + j) {
if (k + j <= hi) {
merge(x, k, k + (j / 2) - 1, k + j - 1);
}
else {
merge(x, k, k + (j / 2) - 1, hi);
}}}
j = j * 2;
}
while (j <= Math.pow(2,(Math.ceil(getBaseLog(2, mid + 1)))));
merge(x, 0, mid, hi);
}
 
 
function getBaseLog(x, y) {
 return Math.log(y) / Math.log(x);
}
 
 
function mergeSort(a) {
 msort(a, 0, a.length - 1);
 console.log(a);
}
 
arr = [6, 5, 4, 3, 2, 1];
mergeSort(arr);
