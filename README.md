# BitePlan

BitePlan is an interactive and feature-rich application designed to connect food enthusiasts through recipe sharing, meal planning, and community engagement. With functionalities like recipe discovery, meal planning, and user interaction, BitePlan aims to simplify cooking and promote collaboration in the kitchen.

## Features

### Core Functionalities
1. **User Registration and Login**:
   - Secure user authentication system allowing users to create accounts and log in to access features.

2. **Recipe Discovery**:
   - Browse a feed of all recipes with detailed views, including ingredients, cooking steps, and nutritional facts.

3. **Recipe Posts**:
   - Share personal recipes with the community, complete with ingredients, instructions, and photos.

4. **User Profile**:
   - Manage posted recipes, followers, and following users from a personal profile.

5. **Follow and Unfollow Users**:
   - Follow other users to stay updated on their recipes and unfollow when needed.

6. **Recipe Likes and Comments**:
   - Interact with the community by liking and commenting on recipes.

7. **Recipe Search and Filtering**:
   - Search for recipes by cuisine, ingredients, or cooking time for personalized results.

8. **Recipe Saving**:
   - Save favorite recipes for quick reference in the future.

9. **Meal Planning**:
   - Plan meals for the week by selecting recipes for breakfast, lunch, dinner, and snacks.

10. **Shopping List Generation**:
    - Automatically create shopping lists based on meal plans, organized by ingredient categories.

11. **Recipe Ratings and Reviews**:
    - Rate and review recipes to help users find popular and well-reviewed dishes.

### Technical Features
1. **UI Prototype**:
   - Designed using Figma for a modern and intuitive user experience.

2. **Reactive Forms and Input Validation**:
   - Robust forms with input validation for seamless user interaction.

3. **HTTP Requests and Firebase**:
   - Utilize HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) or integrate Firebase for backend support.

4. **Component Organization**:
   - The application features over 5 structured pages (excluding authentication/logout pages) with acceptable UX and UI.

5. **Data Binding, Directives, and Pipes**:
   - Efficient use of Angular’s data-binding, directives, and pipes for dynamic data display.

6. **Centralized Services**:
   - Dependency Injection ensures centralized services are reused across components for better maintainability.

7. **Server-Side Functionality**:
   - The application runs smoothly on a server, supporting all functionalities.

## Technologies Used

- **Frontend**: Angular
- **Styling**: SCSS
- **Backend**: Firebase (or a similar backend for HTTP requests)
- **UI Design**: Figma
- **Data Storage**: Browser storage and Firebase
- **Icons**: SVG-based interactive icons

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/farahmoataz90/Recipe-and-meal-planner-BitePlan.git
   cd biteplan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Usage

- Create an account or log in to access BitePlan features.
- Explore recipes, post your own, and engage with the community by liking, commenting, and following users.
- Plan weekly meals and generate shopping lists for convenience.
- Use filters to find recipes that match your preferences.

## Known Issues

- The application may require re-saving files (details.component.ts and details.component.html) during development due to Angular's hot-reloading behavior.

## Future Improvements

- Implement advanced search filters for more precise recipe discovery.
- Add user authentication for recipe editing and deletion.
- Introduce push notifications for new recipes and updates from followed users.

## Contributions

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


## Contact

For questions or feedback, please reach out at [farahmoataz90@gmail.com](mailto:farahmoataz90@gmail.com).

