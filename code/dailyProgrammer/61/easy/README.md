<div class="md"><p>The number 19 is can be represented <a href="http://en.wikipedia.org/wiki/Binary_numeral_system">in binary</a> as 10011. Lets define the operation of "rotating a number" as taking the last binary digit of that number and moving it so it becomes the first binary digit, and moving the other digits one step forward. I.e. if you rotate 10011, you get 11001 (i.e. 25), because the 1 that was in the last position has now moved to the first position. If you rotate it again, you get 11100 (i.e. 28).</p>
<p>If you rotate it again, something curious happens: you get 01110, which is the same as 1110 (i.e. 14) since leading zeroes don't count in a binary representation. That is to say, when you rotate it this time, the zero disappears. If you rotate it once more, you get 0111, which is the same as 111 (i.e. 7). Again, the zero has disappeared. </p>
<p>After that, the number remains the same regardless of how much you rotate it, since the binary number representation of 7 only has 1's in it. </p>
<p>This gives us a sequence of numbers. Starting with 19 and then rotating it step by step until we get a number with only 1's in the binary representation, we get</p>
<pre><code>19 -&gt; 25 -&gt; 28 -&gt; 14 -&gt; 7
</code></pre>
<p>Lets call this a "binary rotation sequence" for 19. Here are the binary rotation sequences for the numbers 69, 205 and 357, with the numbers written first in decimal and then in binary to show what is going on: </p>
<pre><code>69 -&gt; 98 -&gt; 49 -&gt; 56 -&gt; 28 -&gt; 14 -&gt; 7
1000101 -&gt; 1100010 -&gt; 110001 -&gt; 111000 -&gt; 11100 -&gt; 1110 -&gt; 111

205 -&gt; 230 -&gt; 115 -&gt; 121 -&gt; 124 -&gt; 62 -&gt; 31
11001101 -&gt; 11100110 -&gt; 1110011 -&gt; 1111001 -&gt; 1111100 -&gt; 111110 -&gt; 11111

357 -&gt; 434 -&gt; 217 -&gt; 236 -&gt; 118 -&gt; 59 -&gt; 61 -&gt; 62 -&gt; 31
101100101 -&gt; 110110010 -&gt; 11011001 -&gt; 11101100 -&gt; 1110110 -&gt; 111011 -&gt; 111101 -&gt; 111110 -&gt; 11111
</code></pre>
<p>Write a program that given a number will print out the binary rotation sequence for that number (you only need to print out the sequence in decimal). </p>
<p>What is the binary rotation sequence for 54321?</p>
</div>
