This projects uses the GitHub's api to login and view the user's repositories.

Using:
- GitHub's oAuth API
- GitHub's graphql API
- React
- Docker
- Heroku

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
You have to change your client_id and client_secret in the config file and configure your authorization callback URL in your Github oAuth app.

Now is redirecting to: https://boiling-tor-87230.herokuapp.com/

### `npm run docker:build`

Builds the docker container 

### `npm run docker:start`

Runs the project with docker on http://localhost:3000

### `npm run heroku:deploy`

Deploys the app to your heroku account (Using heroku create -b https://github.com/mars/create-react-app-buildpack.git)
