# The Foodies App
> App built with next.js from scratch. check it out [The Foodies App](https://foodies-app-five-olive.vercel.app/).


## How we built it (step by step):
### 1. created three routes and one dynamic route:
> ```
> /meals
> /meals/share
> /community
> /meals/<some slug>
> ```

### 2. Reviting the concept of layouts:
> Layouts in nextjs acts as wrappers around pages, we can also have nexted layouts.

### 3. Adding a custom component to a layout:
> We added a Header component, that will be visible in all pages inside the root layout, the root layout also takes meta data like title and description of the app.

### 4. Styling our app using css modules:
> We styled this App using cdd modules, tailwind and the others could also work.

### 5. Optimized Images with the Nextjs Image Component:
> Nextjs recommends its Image component to be used rather than <img />, which helps output images in a more optimized way.

### 6. Using More Custom Component:
> Created more custom components in the app.

### 7. Populating our root page.js with content:
> The root page.js which is the root page of our app, we added some content to it.

### 8. Prepared an image slideshow:
> We created a logic for showing images in a slideshow using useState and useEffect together with setInterval concepts.

### 9. React Server Components Vs Client Components:
> We discussed that React.js executes its components in the browser but Nextjs only executes in the backend server because its a full stack framework, so executing client components in nextjs causes error and we have to use ```use client``` on top of our components to be able to prerender some of those components on the server but also on the client site. very important concept to understand.

### 10. Using Client Components Efficiently:
> We demonstrated how to use client component efficiently so that only the needed client components are executed on the client site, such components could be eventhandlers, useEffect or useState and many more.

### 11. Outputting Meals Data and Images with Unknown dimensions:
> We used the fill property in nextjs's Image component to output images without setting height and width, because those images are fetched from the server, therefore fill property helps load images dynamically without resolving height and width property.

### 12. Setting up SQLite Database:
> We setup our database using better-sqlite3.

### 13. Fetching Data By Leveraging NextJS & Fullstack Capabilities:
> Fetched our meals by connecting to our db and used sql query to select all meals from the db and used the data to be rendered on meals page.

### 14. Added Loading Page:
> Added loading page using the reserved loading.js which can be accessed by a page which is loading data.

### 15.Using Suspense & Streamed Responses For Granular Loading State Management:
> Used granular loading state management together with state for handling loading states for individual components or sections of a page rather than for the entire application or page.

### 16. Handling Errors:
> Used the reserved error.js to handle errors generated by pages and components in the App.

### 17. Handling "Not Found" States:
> Used not-found.js page to display a page incase a user searches for a page or resource that is unavailable in the App.

### 18. Loading & Rendering Meal Details via Dynamic Routes & Route Parameters:
> Worked on meal details, got meals from db where slug=slug from db and used params prop to access the mealSlug object and its value, and to display the meal details.
