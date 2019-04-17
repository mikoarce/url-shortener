# URL Shortener

Front-end side of shortening URLs and viewing shortened URL analytics.

Tech stack for this project is as follows:

## Next Steps

- [ ] Decouple URL Shortener form from its component.
- [ ] Add the URL shortener functionality (most likely in its reducer).
- [ ] Add analytics functionality (Google's UI shortener API could do this if I remember correctly).
- [ ] Create browser level tests especially since Puppeteer is a dev dependency anyway.
- [ ] Add unit test for util class.
- [ ] Improve UI.

## Deployment

### Initial Build

If you're building the project for the first time, follow these steps:

 1. Have Docker Compose installed.
 2. Checkout repository and make sure it's up to date.
 3. If using macOS, make sure Docker is running.
 4. In the terminal, navigate to the project's root folder and enter the following commands in sequence:
    1. `docker-compose build`
    2. `docker-compose up`
 5. Access the app in [[localhost://]](http://localhost:8080)

### Rebuilding

Rebuilding the project follows a similar pattern as an initial build, with just one extra step.

  1. If using macOS, make sure Docker is running.
  2. In the terminal, navigate to the project's root folder and enter the following commands in sequence:
     1. `docker-compose down -v`
     2. `docker-compose build`
     3. `docker-compose up`
  3. Access the app in [[localhost://]](http://localhost:8080)

## Testing

To setup tests, make sure all npm packages are installed. Navigate to the project's root repository and simply enter the `npm install` command.

Once packages are installed, run tests with the `npm test` command while in the root repository.