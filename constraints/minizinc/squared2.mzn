% Use this editor as a MiniZinc scratch book
include "globals.mzn";

int: N = 3;

set of int: RANGE = 1..N;
set of int: VALS = 1..N*N;

% Decision variables for the grid
array[RANGE, RANGE] of var VALS: puzzle;

var 1..N*N*N: S;

constraint forall(i in RANGE)(
(sum(j in 1..N)(puzzle[i, j])) = S
);

constraint forall(j in RANGE)(
(sum(i in 1..N)(puzzle[i, j])) = S
);

constraint forall(j in RANGE)(
(sum(i in 1..N)(puzzle[i, i])) = S
);

constraint forall(j in RANGE)(
(sum(i in 1..N)(puzzle[i, N-i+1])) = S
);

constraint (
    alldifferent([puzzle[i, j] | i in RANGE, j in RANGE])
);


solve satisfy;

% Pretty print the output board
output [
  show(puzzle[i, j]) ++ " " ++
  (if j == N then "\n" else "" endif) ++
  (if j == N then "\n" else "" endif)
  | i in RANGE, j in RANGE
];