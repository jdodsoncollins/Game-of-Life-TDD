30-minute exercise in test driven development, using [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) as the activity. Mocha was the test framework used. 

I didn't get too far (just barely started on the "grid" concept before the clock ran out), but it was very useful in the sense that it forced me to approach the problem in a reverse order than normal:

* Start simple -- think only of cells first  
* Write a test, make it pass  
* Write the next test, expect it to fail after writing but make it pass and keep previous tests passing after brief development  
* The complexity builds slowly, rather then being front-loaded in archetectural thought  
* Treat the grid as cell properties, rather than being a multidimensional array (or something similar)


This is done in node.js.

###Installation
`npm install` then
`npm run app`
