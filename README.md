# Movie Listing Project

## Description

This project is a web-based movie listing application that fetches movie data from a free online API. The application allows users to list movies, filter them by genre and rating, search by movie name, and view detailed information about each movie. The goal of this project is to develop a responsive and dynamic interface for displaying movie information using JavaScript and an external API.

## Technologies Used

- **HTML5**: Structure and layout of the web pages.
- **CSS3**: Styling and responsive design using media queries.
- **JavaScript**: Handling the API requests and dynamic content rendering.
- **API**: The movie data is fetched from the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).
- **Axios**: A library to simplify HTTP requests (optional for this project).

## Features

- **Movie List**: Displays movies in a card format with a poster, title, genre, rating, and a "Details" button.
- **Movie Details**: Clicking on the "Details" button opens a new page with more information about the selected movie.
- **Search by Name**: Users can search for movies by name.
- **Filter by Genre and Rating**: Movies can be filtered based on their genre and rating.
- **Responsive Design**: The interface adjusts to different screen sizes using media queries.

## Installation and Usage

1. **Clone the project**:

    ```bash
    git clone https://github.com/your-profile/movie-listing.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd movie-listing
    ```

3. **Get an API Key**:
   - Sign up for a free account on [TMDb](https://www.themoviedb.org/signup).
   - Obtain your API key from [TMDb API Settings](https://www.themoviedb.org/settings/api).

4. **Set up the API Key**:
   - Open `script.js` or any relevant file and add your API key:
   
     ```javascript
     const API_KEY = '705ce0a7e4511975634bb68c9d679fe8';
     const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
     ```

5. **Open `index.html`** in your browser to view the movie listing page.

6. **The project structure includes**:
   - `index.html` - The main page displaying the list of movies.
   - `movie-details.html` - The page that displays detailed information about a specific movie.
   - `styles.css` - The stylesheet for styling the pages.
   - `script.js` - The JavaScript file to handle API requests and dynamic content rendering.

## API Endpoint

The movie data is fetched from the following API endpoint:

- **Popular Movies**: `https://api.themoviedb.org/3/movie/popular?api_key=705ce0a7e4511975634bb68c9d679fe8`
- **Movie Details**: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=705ce0a7e4511975634bb68c9d679fe8`

You can explore other endpoints in the [TMDb API documentation](https://www.themoviedb.org/documentation/api).

## Project Design and Layout

### Page Layout

- **Home Page**:
    - Displays a list of movies in a card format.
    - Each card shows the movie poster, title, genre, rating, and a "Details" button.
    - Includes a search bar for searching by movie name.
    - Filter options for genre and rating.

- **Movie Details Page**:
    - Displays detailed information about a selected movie, such as plot, release date, cast, and more.

### Responsiveness

- The layout is designed to be responsive using **media queries**, adapting to various screen sizes (mobile, tablet, desktop).

## Competencies Developed

- **Responsive Web Design**: Implemented responsive design using CSS media queries.
- **Dynamic Web Applications**: Used JavaScript and API calls to dynamically load and display movie data.
- **UI/UX Design**: Created a user-friendly and aesthetically pleasing interface for browsing movies.

## Duration of the Project

📅 **5 days**
