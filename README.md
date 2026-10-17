## 1. Project Overview

Touryygit Lesotho is a responsive tourism web application developed
using React.js, JavaScript, HTML, and CSS.

The application introduces visitors to Lesotho's natural beauty,
tourist attractions, cultural heritage, and adventure experiences.

It provides an interactive platform where visitors can explore
destinations, search for attractions, save favourite places,
watch tourism videos, and submit travel enquiries.

## 2. Project Objectives

The objectives of this project are to:

- Promote tourism in Lesotho.
- Present tourist attractions in an organised and attractive layout.
- Demonstrate the use of React functional components and JSX.
- Store destination information in an array of objects.
- Implement interactive search and category filtering.
- Provide destination details.
- Implement form validation.
- Create a responsive interface for desktop and mobile devices.
- Support tourism photographs and video content.

## 3. Technologies Used

- HTML5
- CSS3
- JavaScript
- React.js
- Vite
- npm

## 4. Main Features

### Home Page

Introduces Discover Lesotho with a tourism hero section and
navigation links.

### Tourist Attractions

Displays destinations using reusable React components.

### Search and Filtering

Allows users to search for attractions and filter them by category.

### Destination Details

Displays additional information about a selected attraction,
including activities, location, and estimated costs.

### Saved Destinations

Allows users to save favourite attractions for later reference.

### Video Showcase

Allows visitors to watch tourism videos.

### Visitor Enquiry Form

Collects visitor information, destination preferences,
visit dates, visitor numbers, and messages.

### Form Validation

Checks required fields and validates email addresses,
phone numbers, visitor counts, visit dates, and messages.

### Responsive Design

Adjusts the application layout for different screen sizes.

## 5. Installation

Install Node.js before running the project.

Download or extract the project folder.

Open the project folder in Visual Studio Code.

Open the terminal and run:

    npm install

Start the development server:

    npm run dev

Open the local address displayed in the terminal.

## 6. Production Build

To create a production build, run:

    npm run build

To preview the production build, run:

    npm run preview

## 7. Project Structure

    Discover-Lesotho/
     public/
       images/
        videos/
    src/
      components/
       data/
        attractions.js
    App.jsx
    App.css
    main.jsx
    index.html
    package.json
    README.md

## 8. Adding Images

Place tourism photographs inside:

    public/images/

Update the image paths in the attraction data when adding
or replacing photographs.

Use photographs that you own or are permitted to use.

Provide attribution when required by the image licence.

## 9. Adding Videos

Place MP4 video files inside:

    public/videos/

The video showcase can then reference the video using its
public path.

For example:

    /videos/lesotho.mp4

Use appropriately compressed video files to improve loading
performance.

## 10. Form Submission

The enquiry form demonstrates front-end validation.

It validates visitor input and displays a confirmation message.

The current demonstration does not send enquiries to an email
address or store them in a database.

A backend service or form-processing service would be required
to process real enquiries.

## 11. Testing

Recommended tests include:

- Open the home page.
- Search for a tourist attraction.
- Filter attractions by category.
- Open a destination's details.
- Save and remove a favourite destination.
- Submit the enquiry form with empty fields.
- Submit an invalid email address.
- Enter an invalid visitor count.
- Select a past visit date.
- Submit valid information.
- Test the layout on a mobile screen.
- Test the video player.

## 12. Future Improvements

Possible improvements include:

- Online enquiry processing.
- Interactive maps.
- Multilingual content.
- Tourism packages and booking features.
- More destination photographs and videos.
- Improved accessibility.
- Visitor reviews and ratings.

## 13. Conclusion

Discover Lesotho demonstrates how React can be used to develop
an interactive tourism application.

The project combines reusable components, structured destination
data, responsive styling, search functionality, and form validation
to provide an engaging tourism experience.