# Too Online: A Gallery of Tweets that have Stuck with Me
Though I don't spend much time on Twitter these days, the site will always have a special place in my heart. A handful of tweets have stuck with me over the years, so I have displayed them in this gallery for my weekend assignment.


## Presentation and User Functionality
Tweets are displayed in an image list. Clicking on am image will display a description of why the tweet has stuck with me -- clicking again will hide the description. 

Each image includes a like button. The tweet's like count is displayed in parentheses on the button. Hovering over the like button will add a blue tint to its corresponding tweet, and clicking it will increase the like count for the tweet (only in the gallery -- the actual tweet will be unaffected).

There are no options to add or delete tweets. While this functionality would be straightforward to implement, it would not fit with the theme of the gallery (a collection of tweets that have stuck with me). I figure I will get plenty of practice implementing add/delete features, but might as well reinforce the philosophy of developing features around the project rather than developing a project around desired features.


## Technology
This gallery relies heavily on React. The image list which makes up the bulk of the page is built in a React component which gets the array of image objects from the database (via an Axios GET request to the router) and maps through the array (utilizing a function imported from another component) to achieve the desired DOM representation for each image.

Image object properties or "propped" into the list-item rendering function. Conditional rendering is utilized to change the presentation of each image when it is clicked (display description) or when the like button is hovered over (tint the image blue). Two ternary operators are chained together to achieve the proper priority for this conditional rendering.

The Axios GET request is triggered initially when the page renders, and at the end of all listener functions. The client GET code is written in the image list component. The server code is included in the gallery router, and sends a Postgres query to the database (stored in the pool module). 

The like button utilizes an Axios PUT request. The client-side code is written in the list item component. It specifies an image ID to the router (through a property of the image object) and sends a query to the database to increment the "likes" value in the selected row. Assuming a successful query, a GET request is made.

Material UI is used for the majority of styling, though some plain CSS is included for touch ups.


## Refactoring
While I am happy with the state of my project, there is always room for improvement. These are some tasks I can tackle when the time comes to build upon this weekend's work.

### Features
This app would benefit from filters. Users could find tweets more easily if they could filter by other name, likes, tags, or even tweets contents. It would also be easier to navigate if the user could sort tweets by likes or author.

It would be nice to let the user decide how many columns should be displayed.

### Design
It would be preferable that images flow from left-to-right, rather than top-to-bottom.

In certain circumstances, the like button for the bottom image of the left column appears at the beginning of the right column. 

The page responds reasonably well to changes in the window size, but some tweaking could be done to refine the app in this regard.

There is generally a bit of white (actually baby blue) space at the bottom of the page because the columns are not the same length. It would be ideal if columns were always the same height on the page.

### Readability
The nested ternary operators in the list item component are not the easiest to peruse in their current state. Handling some (or most, or all) of the logic outside of the return statement would probably improve legibility.