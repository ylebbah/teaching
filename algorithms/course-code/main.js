
function fib1(n) {
    var res;
    if (n == 0)
        res = 0;
    else if (n == 1)
        res = 1;
    else
        res = fib1(n - 1) + fib1(n - 2);
    console.log(`fib1(${n}) = ${res}`);
    return (res);
}


// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------


function fib2(n) {
    var res;
    if (n == 0)
        res = 0;
    else if (n == 1)
        res = 1;
    else {
        var F = [];
        F[0] = 0;
        F[1] = 1;
        for (let i = 2; i <= n; i++)
            F[i] = F[i - 1] + F[i - 2];
        res = F[n];
    }
    console.log(`fib2(${n}) = ${res}`);
    return (F[n]);
}

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------


// Function to sort array using insertion sort
// https://www.geeksforgeeks.org/insertion-sort-algorithm/
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print array of size n
function printArray(arr) {
    console.log(arr.join(" "));
}

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}



// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

function PuissDyn(x, n) {
    var res;
    if (n == 0)
        res = 1;
    else if (n % 2 == 0)
        res = PuissDyn(x*x, n/2);
    else
        res = x*PuissDyn(x*x, (n - 1)/2);
    console.log(`PuissDyn(${x}, ${n}) = ${res}`);
    return (res);    
}
