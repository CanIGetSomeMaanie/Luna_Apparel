# Luna Apparel

A fashion website showcasing women's clothing, footwear and accessories.

## Project Overview

Luna Apparel is a fashion website designed to showcase clothing products in a simple, attractive and user-friendly way. The website provides visitors with information about the brand, allows them to browse products and provides enquiry and contact forms.

The project was developed in stages using HTML, CSS and JavaScript.

## Goals

The main goals of the Luna Apparel website are to:

- Create a professional-looking fashion website.
- Provide clear information about Luna Apparel.
- Display clothing products with images and prices.
- Make the website easy to navigate.
- Practise HTML, CSS and JavaScript web development skills.
- Use responsive design to support different screen sizes.
- Improve the website's search engine optimisation (SEO).
- Add interactive features to improve user experience.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet (interactive map library)
- OpenStreetMap (map data)
- EmailJS (form email sending)
- GitHub
- Visual Studio Code
- Live Preview
- GitHub Pages

## Website Pages

The website consists of the following pages:

1. Home (`index.html`)
2. About Us (`about.html`)
3. Products (`products.html`)
4. Enquiries (`enquiry.html`)
5. Contact (`contact.html`)

## Website Structure

- Home
  - About Us
  - Products
  - Enquiries
  - Contact

## Part 1 Features

- Created the initial HTML structure.
- Created the Home, About Us, Products, Enquiries and Contact pages.
- Added navigation links between pages.
- Added product information, images and prices.
- Added basic enquiry and contact forms.

## Part 2 Features

### CSS Styling

CSS was added to improve the appearance of the website. This includes:

- Typography and font styling.
- Colours and backgrounds.
- Spacing and alignment.
- Borders and rounded corners.
- Product card styling.
- Buttons and links.
- Hover, focus and active effects.
- Form styling.
- Consistent styling across all pages.

### Layout

CSS Flexbox and Grid were used to organise content and create structured layouts.

### Responsive Design

Media queries and responsive CSS units were used to help the website adjust to different screen sizes, including desktop, tablet and mobile devices.

### Testing

The website was tested using Visual Studio Code and Live Preview. Different browser window sizes were used to check navigation, images, links, forms and page layouts.

## Part 3 Features

### Interactive Features

JavaScript was added to improve website functionality and user interaction.

The features include:

- Product search functionality.
- Product category filtering.
- Product price sorting.
- Product image lightbox for viewing larger images.
- FAQ accordion on the About Us page.
- Confirmation pop-ups for the Enquiry and Contact forms.
- CSS animations and hover transitions on product cards.

### Dynamic Content

Products are loaded dynamically with JavaScript from a product list stored in `script.js`. The same list is used for the search, filtering and sorting, for the stock status labels on the Products page, and for the product dropdown on the Enquiry form.

### Interactive Map

An interactive map was added to the Contact page using the Leaflet library and OpenStreetMap data. It shows markers for the Sea Point (Cape Town) and Johannesburg stores.

### Search Engine Optimisation (SEO)

SEO improvements were made across the website.

These include:

- Page-specific title tags.
- Meta descriptions.
- Relevant meta keywords.
- Author and robots meta tags.
- Improved image alternative text.
- Correct heading structure.
- Internal navigation links.
- Mobile viewport settings.
- Social media links in the footer (off-page SEO).
- Local business structured data (JSON-LD) on the Contact page for local SEO.
- A `robots.txt` file.
- A `sitemap.xml` file listing the website pages.

### Forms

The Enquiry and Contact pages include HTML forms with JavaScript validation.

- Client-side validation checks the name, email address, product or message type, and message length.
- Error messages are shown under each field and are cleared when the visitor corrects the field.
- Forms are submitted asynchronously (AJAX) using EmailJS, so the page does not reload.
- The business receives a notification email and the visitor receives a confirmation email.
- The Enquiry form shows the price and stock availability of the chosen product in the confirmation pop-up.
- The Contact form allows visitors to choose a message type and gives the option to copy the message or open an email application.

### Testing

The website was tested using Visual Studio Code, Live Preview and the deployed GitHub Pages site.

The following areas were checked:

- Navigation links between pages.
- Product loading, images and information.
- Product search, category filtering and price sorting.
- Product image lightbox.
- Enquiry form validation, error messages, price and availability response, and pop-up.
- Contact form validation, error messages and pop-up.
- EmailJS emails sent (checked in the EmailJS Email History).
- Leaflet map and store markers.
- FAQ accordion.
- Page layout at different screen sizes.

## Changelog

### Part 1

- Created the initial HTML structure for the Luna Apparel website.
- Created the Home, About Us, Products, Enquiries and Contact pages.
- Added navigation between pages.
- Added product information, images and prices.
- Added enquiry and contact forms.

### Part 2

- Added CSS styling to all website pages.
- Created a consistent fashion-themed visual design.
- Styled headings, paragraphs, links, buttons and forms.
- Styled product sections, images and prices.
- Added spacing, borders and visual design elements.
- Added hover, focus and active states.
- Used Flexbox and Grid for page layouts.
- Added media queries for responsive design.
- Tested the website at different screen sizes.
- Fixed navigation and file-link issues based on feedback.
- Updated the README with Part 2 information.

### Part 3

- Loaded the products dynamically with JavaScript.
- Added product searching, category filtering and price sorting.
- Added a product image lightbox.
- Added stock status labels to the products.
- Added JavaScript validation with inline error messages to the Enquiry and Contact forms.
- Added a product dropdown and a price and availability response to the Enquiry form.
- Added AJAX form submission using EmailJS, with notification and confirmation emails.
- Replaced the Google Maps embed with a Leaflet map showing both stores.
- Added an FAQ accordion to the About Us page.
- Added CSS animations and transitions.
- Improved SEO information across all five website pages, including the Products page meta tags and title.
- Added social media links and local business structured data.
- Fixed price and product name differences between the Home and Products pages.
- Updated the Home page layout and image sizes.
- Added descriptive image alternative text.
- Created a `robots.txt` file.
- Created a `sitemap.xml` file.
- Updated the README to document Part 3 development.

## References

The following resources were used for guidance during website development:

- W3Schools: https://www.w3schools.com/
- MDN Web Docs: https://developer.mozilla.org/
- Leaflet: https://leafletjs.com/
- OpenStreetMap: https://www.openstreetmap.org/copyright
- EmailJS Documentation: https://www.emailjs.com/docs/
- GitHub Documentation: https://docs.github.com/
- GitHub Pages: https://docs.github.com/en/pages

Accessed: November 2026.

## Website Hosting

The Luna Apparel website is hosted using GitHub Pages.

Website: https://canigetsomemaanie.github.io/Luna_Apparel/index.html

GitHub Repository: https://github.com/CanIGetSomeMaanie/Luna_Apparel
