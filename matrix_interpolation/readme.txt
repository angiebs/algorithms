#PROBLEM
Given a Matrix, interpolate all the zero values.

# Algorithm

The algorithm implemented for the interpolation is based in Linear Interpolation.
Once the algorithm finds a zero, it calculates the sum of the values in the
previous and next position of the current element.
and divide the result by 2.

e.g:

2 0 3 => interpolation = (3+2)/2 = 2.5

For the first element of the matrix (matrix[0][0]), the previous postion corresponds to
the last position ([n-1][m-1], where n=num of rows and m = num of columns).
And the same ocurres for the last position, where its next position is the first position.

e.g:
m = [0 1 3
     4 6 7
     3 4 8]

m[0][0] = 0
prev pos => m[2][2]=8
next pos => m[0][1]=1