# tehtava1

In this task was used two closures.<br/><br/>

First closure was used with ´setTimeout´.<br/>
Second closure was used with ´setInterval´.<br/><br/>

There are some differences between these ways.<br/><br/>

In this task more correct to use ´setInterval´, because 
setTimeout waits functions and all ´code´ which are implemented inside .. And only after this one will be started 
new iteration. In other way works  ´setInterval´. This function waits only time which was define in ´delay´ value. If functions are ´hard´ and they need more time than in ´delay´,
so ´setInterval´ waits these functions and after this one right away implements next iteration.

For example, look this pixel of code:

setTimeout( () => {<br/>
 // pseudo code<br/>
 // pseudo code<br/>
 // pseudo code<br/>
}, 120);<br/><br/> 

Total time of 'pseudo code' is, for example, 110ms.<br/>
So, total time of 'pseudo code' + new iteration is 110ms + 120ms = 230ms.<br/><br/>

setInterval( () => {<br/>
 // pseudo code<br/>
 // pseudo code<br/>
 // pseudo code<br/>
}, 120);<br/><br/> 

Total time of 'pseudo code' is, for example, 110ms.<br/>
So, total time of 'pseudo code' + new iteration is just 120ms.<br/><br/>

setTimeout waits all 'pseudo code' and is implemented after 'delay'.<br/>
setTimeout is implemented  just through delay value.<br/><br/>


So ...
In this case better to use setInterval, because one of task condition is:
1. Every 120ms