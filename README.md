# Very Online: A Gallery of Tweets that have Stuck with Me
Though I don't spend much time on Twitter these days, the site will always have a special place in my heart. A handful of tweets have stuck with me over the years, so I have displayed them in this gallery for my weekend assignment.


## Presentation and User Functionality
Tweets are displayed in an image list. Clicking on am image will display a description of why the tweet has stuck with me -- clicking again will hide the description. 

Each image includes a like button. The tweet's like count is displayed in parentheses on the button. Hovering over the like button will add a blue tint to its corresponding tweet, and clicking it will increase the like count for the tweet (only in the gallery -- the actual tweet will be unaffected).
<br/>

<img src="weekend_gallery_example.gif">

<br/>
There are no options to add or delete tweets. While this functionality would be straightforward to implement, it would not fit with the theme of the gallery (a collection of tweets that I find personally memorable). I figure I will get plenty of practice implementing add/delete features, but might as well reinforce the philosophy of developing features around the project rather than developing a project around desired features.


## Technology
The data for each image is contained in an object, and all of the objects are stored in an array in the GalleryList component. This data arrives in the component via an Axios GET route which makes a database query. 

The array is mapped so each object is propped into the GalleryItem component, which returns JSX to GalleryList using the image data. The returned JSX uses conditional rendering to modify the DOM when an event listener is triggered.

The like button utilizes an Axios PUT route.

Material UI is used for the majority of styling, though some plain CSS is included for touch ups.


## How to Use
1. Clone the project repo and open it in VS Code.
2. Run `npm install` to install the required packages from node_modules.
3. Create a Postgres database called "weekend_gallery".
4. Copy the query text in database.sql and paste it into a query in the "weekend_gallery" database.
5. Execute the query to create the "pics" table, then the command to populate it.
6. Open split terminals in VS Code. In the first terminal, run the command `npm run server`.
7. In the second terminal, run the command `npm run client`. 

The app should now be running on localhost:3000.


## Refactoring Goals
While I am happy with the state of my project, there is always room for improvement. These are tasks I can tackle when the time comes to build upon this weekend's work.

### Features
This app would benefit from filters. Users could find tweets more easily if they could filter by other name, likes, tags, or even tweets contents. It would also be easier to navigate if the user could sort tweets by likes or author.

It would be nice to let the user decide how many columns should be displayed.

### Style
It would be preferable that images flow from left-to-right, rather than top-to-bottom.

In certain circumstances, the like button for the bottom image of the left column appears at the beginning of the right column. 

The page responds reasonably well to changes in the window size, but some tweaking could be done to refine the app in this regard.

There is generally a bit of white (actually aqua) space at the bottom of the page because the columns are not the same length. It would be ideal if columns were always the same height on the page.

I think it would be more intuitive for tweet descriptions to display via a click listener on an icon button rather than the image itself. The icon button could share a row with the like button or overlay somewhere on the right side of the image.


### Readability & Efficiency
I need to add alt text to the images. I realized this omission too late in the weekend to write alt text for each tweet, add it to the database query text, and add the necessary client and server code to incorporate it in the rendered image, but this will be the first update I make when I begin refactoring this project.

The nested ternary operators in the list item component are not the easiest to peruse in their current state. Handling some (or most, or all) of the logic outside of the return statement would probably improve legibility.

Right now, I suspect my JSON file has users downloading quite a bit more of the Material UI package than is really needed. I should see if this is the case, and whether I can cut the fat from this dependency by only installing the MUI components that are actually used in the project.