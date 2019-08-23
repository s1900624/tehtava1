# tehtava1

In this task was used two closures.

First closure was used with ´setTimeout´.
Second closure was used with ´setInterval´.

There are some differences between these ways.

In this task more correct to use ´setInterval´, because 
setTimeout waits functions and all ´code´ which are implemented inside .. And only after this one will be started 
new iteration. In other way works  ´setInterval´. This function waits only time which was define in ´delay´ value. If functions are ´hard´ and they need more time than in ´delay´,
so ´setInterval´ waits these functions and after this one right away implements next iteration.

For example, look this pixel of code:

setTimeout( () => {
 // pseudo code
 // pseudo code
 // pseudo code
}, 120); 

Total time of 'pseudo code' is, for example, 110ms.
So, total time of 'pseudo code' + new iteration is 110ms + 120ms = 230ms.

setInterval( () => {
 // pseudo code
 // pseudo code
 // pseudo code
}, 120); 

Total time of 'pseudo code' is, for example, 110ms.
So, total time of 'pseudo code' + new iteration is just 120ms.

setTimeout waits all 'pseudo code' and is implemented after 'delay'.
setTimeout is implemented  just through delay value.


So ...
In this case better to use setInterval, because one of task condition is:
1. Every 120ms