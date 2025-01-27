##### workshop-task-4

# workshop 4 : Interactivity

[Website Link] https://josephinepark.github.io/Workshop-task-4/
<br>
<Br>

(Three user event)
1. Pressing the space key = background colour chagnes randomly.<br>
2. Moving the mouse = the star to follow the cursor. <br>
3. Text can be entered in the textbox (enter key = saves the text below, shift key = clears the previously written text.)

<br>
<Br>
I took my classmate's workshop 0 project and develop it response to the workshop 4 task.
<br>
<Br>
This work is forked from Andres Lara Suaza's workshop-task-0.<br>
Original version link: https://andrefls.github.io/Workshop-task-0/

## task
[] Create an interactive p5.js sketch with at least three different kinds of user input events.<Br>
[] Experiment with ways to record and redeploy inputs from the user.<Br>

## Notes from the workshop video
checkbox <br>
slider - movable slider <br>
val <br>
cerateSelect - gives the drop down menu <br>

## Progress (Experimentation and problem solving)
<img width="476" alt="image" src="https://github.com/user-attachments/assets/72e0a125-300f-481a-be95-262682a5318a" /><Br>
<br>
I followed the workshop and tried using the emojis I set. However, the problem that keeps appearing was that when I went live, I kept having problems that only loading appeared.The reason was that I had some mistakes and the file that I got was the gif file.<Br>
<br>
<img width="478" alt="image" src="https://github.com/user-attachments/assets/b9c3ab16-ae50-4236-8624-5fe465a68117" />
<br>
<br>
By using createInput(), I have made a textbox and experienced how that works and how I could manage the position of the outcoming texts.
<br>
<br>

--------------------------
After exploring about new codes, I have decided to work on my workshop task with other student's previous workshop tasks and develop (which is forking). 

As I explored various works from peers, this student's work left a strong impression on me and inspired me to further develop it. Enhancing someone else’s work and steering it in the direction I envisioned was not an easy task.
Incorporating my own creative elements while preserving the original idea required a lot of thought and trial and error. Above all, adding more than three user events proved to be a significant challenge. I had to carefully balance the interactions to avoid conflicts and ensure a seamless user event, which required multiple adjustments and refinements.
<br>
<br>
Initially, I planned to have a yellow background appear first and then allow users to click the mouse or a button to create stars in the yellow sky. However, since the code continuously redrew the background, resolving this issue proved too challenging for me. I asked help from a friend, but I realized that mastering the solution would require more time and research than I initially expected.

As a result, I decided to pivot my approach by allowing users to create a star and move it around instead. This seemed like a more feasible solution, given my current skill level.
I found a star image online and used the loadImage() function, which I had learned in a previous workshop, to import it into my project. Additionally, I created a function named star that made the image follow the mouse movement. This approach allowed me to add an interactive element and provide users with a more engaging experience.
<br>
<Br>
To figure out how to make the mouse location, I got help to get some ideas from chatgpt.
My prompt : Can you write p5.js code for placing image at mouse location.

(Result)
Sure! Below is a simple p5.js code snippet that allows you to place an image at the mouse location when you click on the canvas.
<br>
<img width="365" alt="image" src="https://github.com/user-attachments/assets/d9eb11c5-12aa-43c1-bd3f-26ed37bbd2d5" />
<br>
<Br>
through this, I have used the codes how to place the the image to follow the mouse movement location.
<br>
<Br>
<img width="379" alt="image" src="https://github.com/user-attachments/assets/6188fdba-51c7-4b04-8279-5ed579d4da68" />


<img width="959" alt="1" src="https://github.com/user-attachments/assets/257e5e76-0360-48d0-ba4d-7d301c8f3707" />
<br>
<br>
Deciding which user events to include was a major consideration. 
After brainstorming several ideas, I thought adding a function to change the background colour would be a good choice to provide users with an engaging experience.
<Br>
<Br>
For the first user event, changing the background colour, I have got help from chatgpt for how to make a detect to keyboard keys.
<br>
<br>
My prompt : detect enter key

(result)
Here is a p5.js code snippet that detects when the Enter key is pressed and prints the input text to the console.
<Br>
<Br>
<img width="263" alt="image" src="https://github.com/user-attachments/assets/2058fa5d-8115-4e32-9199-7a89664ab36d" />
<Br>
<Br>
Through this, I have figured out that I should work on the draw function to make it work as I intended.
Changing the background colour is simple yet impactful, as it creates an immediate visual transformation and can set the tone for the entire piece. To implement this, I used basic user events like keyboard presses or mouse clicks combined with the random() function to generate various background colours.
This event became one of the key features, enhancing user interaction while adding vibrancy to the overall interface of the work.
<br>
<Br>
<img width="449" alt="image" src="https://github.com/user-attachments/assets/7d2651c3-2c12-4d8d-a924-438a22d62c13" />
<br>
<Br>
At first, I considered making the star smaller, but I eventually decided to keep it large enough to fill the entire screen, thinking it would make the experience more interesting. This approach allowed the star to become a more prominent visual element, enhancing the overall immersive feel of the design.
Next, I pondered what other user events to include, and I thought adding a text box, which I learned from the workshop video, would be a great idea. I implemented a text box so that users could write down their thoughts while looking at the mountain scene with the large star in the sky.
This setup provides users with more than just a visual experience; it offers a space for personal reflection and self-expression.
<br>
<Br>
My prompt : When I press enter, I keep the text I have written in place, and move on to next position which is 10px down
<br>
(result)
Here is an updated p5.js code snippet that allows the user to type text in an input box, and when the Enter key is pressed, the text is displayed on the canvas and the next input position moves 10 pixels down while keeping the input text.
<br>
<br>
<img width="229" alt="image" src="https://github.com/user-attachments/assets/364912c6-6f67-406f-988f-b02d67664a2d" />
<br>
<Br>
According to this result from chatgpt, I have figured out that I should use the keyPressed() and keyTyped() function for the user event that I want to make. So after this, I have searched from the p5.js documentation. 
<br>
<Br>
- https://p5js.org/reference/p5/keyPressed/
- https://p5js.org/reference/p5/keyTyped/
<Br>
<Br>
The process of creating the text box took much longer than expected. Initially, I faced numerous challenges, such as the text not continuing after entering a single word and the next input not being recorded. These issues made the implementation process quite difficult.
One of the biggest challenges was ensuring that users could enter a word, then type the next one, and also be able to delete previously written words. Implementing this functionality required a lot of time and effort, during which I sought help from a friend, consulted ChatGPT, and watched numerous tutorials to find a solution.
After much trial and error, I was finally able to complete the feature successfully.
<Br>
<BR>
In this workshop, I also learned about pop() function building using push() from the previous workshop. In the last workshop, I had only read about how push() works, but this time, by using it directly in my code, I was able to better understand how it actually functions.
Through hands-on experimentation, I gained a clearer understanding of how push() and pop() work together to add and remove elements from an array dynamically. For example, I was able to implement features where user-entered text or added elements could be stored and removed as needed.
This hands-on experience has allowed me to manage arrays more effectively, and I believe it will be highly useful for handling more complex projects in the future.

## codes

<img width="126" alt="image" src="https://github.com/user-attachments/assets/236bf5f2-9972-4fbf-b43a-197473a34d28" />
<img width="135" alt="image" src="https://github.com/user-attachments/assets/7076185c-a975-481e-b46f-509a944cfa49" />
<img width="97" alt="image" src="https://github.com/user-attachments/assets/8022f1bb-67a7-452a-8089-3dd74c776788" />


## Furture Development

Looking at the workshop task of this workshop, while several features function as intended, it still feels incomplete rather than a finished product. Despite dedicating a lot of time to this project, I realized there are many areas that need improvement.
The most significant issue lies in the text input feature. Currently, when a long text is entered, it overflows beyond the canvas boundaries. Additionally, pressing the Enter key to add new text unintentionally changes the background colour at the same time, which needs to be addressed.
Another challenge is the fact that there is only one mouse pointer, which means the user must simultaneously control the movement of the star while clicking on the text box, making the interaction somewhat cumbersome. This complexity in the interface may hinder the overall user experience, and finding a better solution is necessary.
Despite these challenges, this workshop was a valuable experience in experimenting with multiple user events. Moving forward, I plan to address these issues and work towards creating a more intuitive and polished interactive project.

## Reference / other sources that helped me

https://p5js.org/reference/p5/keyPressed/

- keyPressed (p5.js documentation)
<br>
https://p5js.org/reference/p5/keyTyped/

- keyTyped (p5.js documentation)
<br>
https://www.youtube.com/watch?v=UvSjtiW-RH8

- Events (mousePressed, keypressed) tutorial
<br>
https://www.youtube.com/watch?v=ibW4oA7-n8I

- built-in variables(mouseX, mouseY) tutorial
