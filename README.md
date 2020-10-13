This project was built with React.js with no external dependancies.  The project leveraged the free Rick and Morty api to request some data that consisted of text as well as images.  The project could be scaled to provide even more funtionality of searches and filters as well as episode and locations. I originally started with the React Query library, but found the documentation overly simplified since impementing a simple toggle button doesn't help explain some of the more complex use cases. I decided to utilize React's hooks and context functionality which I thought was new concepts but it turns out I learned about them using Redux. In the comments of the code, I did mention plenty of areas I could further improve the code besides purely aesthetic improvements.  I did add some basic CSS to improve UX on mobile devices, but focused more on the API end of the build. Thank you for taking the time to go through this project. I hope you have as much fun exploring this project as I had in creating the app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Manage State and External Data in React

Modify the starter app which can be run locally to verify the results. 
Connect to an external API to fetch some data for display based on user selection or input. 
Use any free API and a select list for the user to utilize.
 
## App State

Keep state as low as possible.

1. Local State
2. Lift State
3. Global State (with context)

Once you are dealing with Global State, just stick with `useState`.

## External Data

React Query (with context) or some similar approach to fetching data from an API and getting it into a context.
