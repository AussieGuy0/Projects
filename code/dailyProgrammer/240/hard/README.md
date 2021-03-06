# KenKen Solver
<div class="md"><h1>Description</h1>
<p>KenKen are trademarked names for a style of arithmetic and logic puzzle invented in 2004 by Japanese math teacher Tetsuya Miyamoto, who intended the puzzles to be an instruction-free method of training the brain. KenKen now appears in more than 200 newspapers in the United States and worldwide. </p>
<p>As in sudoku, the goal of each puzzle is to fill a grid with digits –– 1 through 4 for a 4x4 grid, 1 through 5 for a 5x5, etc. –– so that no digit appears more than once in any row or any column (a Latin square). Grids range in size from 3x3 to 9x9. Additionally, KenKen grids are divided into heavily outlined groups of cells –– often called “cages” –– and the numbers in the cells of each cage must produce a certain “target” number when combined using a specified mathematical operation (either addition, subtraction, multiplication or division). For example, a linear three-cell cage specifying addition and a target number of 6 in a 4x4 puzzle must be satisfied with the digits 1, 2, and 3. Digits may be repeated within a cage, as long as they are not in the same row or column. No operation is relevant for a single-cell cage: placing the "target" in the cell is the only possibility (thus being a "free space"). The target number and operation appear in the upper left-hand corner of the cage.</p>
<p>Because we can't use the same layout that a printed KenKen board does, we will have to express the board in a lengthier fashion. The board layout will be given as row and column, with rows as numbers and columns as letters. A 6x6 board, therefore, looks like this:</p>
<pre><code> A B C D E F G
1. . . . . . . 
2. . . . . . . 
3. . . . . . . 
4. . . . . . . 
5. . . . . . . 
6. . . . . . . 
</code></pre>
<p>Cages will be described as the target value, the operator to use, and then the cells to include. For example, if the upper left corner's cage covered A1 and A2 and should combine using the addition operator to a sum of 11, we would write:</p>
<pre><code>11 + A1 A2
</code></pre>
<p>We will use standard ASCII notation for mathematical operators: <code>+</code>, <code>-</code>, <code>/</code>, <code>*</code>, and <code>=</code>. The equals sign basically says "this square is this value" - a gimme. </p>
<h1>Sample Input</h1>
<p>Describing the representative KenKen problem from <a href="https://en.wikipedia.org/wiki/KenKen">the Wikipedia KenKen page</a> we have this as our input, describing a 6x6 grid:</p>
<pre><code>6
11 + A1 A2
2 / B1 C1
20 * D1 D2
6 * E1 F1 F2 F3
3 - B2 C2
3 / E2 E3
240 * A3 A4 B3 B4
6 * C3 D3
6 * C4 C5
7 + D4 D5 E5
30 * E4 F4
6 * A5 B5 
9 + F5 F6
8 + A6 B6 C6
2 / D6 E6
</code></pre>
<h1>Sample Output</h1>
<p>Your program should emit the grid of numbers that satisfies the rules - yield the target value for each cage using the operator specified, and ensure that no number is repeated per column and row. From the above example you should get this solution:</p>
<pre><code>5 6 3 4 1 2
6 1 4 5 2 3
4 5 2 3 6 1
3 4 1 2 5 6
2 3 6 1 4 5
1 2 5 6 3 4
</code></pre>
<h1>Challenge Input</h1>
<pre><code>6
13 + A1 A2 B1 B2
180 * C1 D1 D2 E1
9 + F1 F2 F3
2 = C2
20 * E2 E3
15 + A3 A4 A5
6 * B3 C3
11 + C4 D3 D4 
3 = B4
9 + D5 E4 E5 F4
2 / B5 C5 
18 + D6 E6 F5 F6
8 + A6 B6 C6
</code></pre>
<h1>Challenge Output</h1>
<p>You can see the result here: <a href="http://imgur.com/JHHt6Hg">http://imgur.com/JHHt6Hg</a> </p>
<pre><code>1 4 3 5 2 6
3 5 2 6 4 1
4 6 1 3 5 2
5 3 6 2 1 4
6 2 4 1 3 5
2 1 5 4 6 3
</code></pre>
</div>
