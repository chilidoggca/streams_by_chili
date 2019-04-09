# README

## Project name: Streams by Chili

### Description:
 - React and Ruby on Rails app that consumes Google APIs to allow users to log in with their Google/Youtube accounts, view live Youtube streams and join Youtube chats.
 - Users' chat messages are saved to local backend database allowing users to view chat histories and related statistics.

### Live Demo:
 - <a href="https://streams-by-chili.herokuapp.com" target="_blank">https://streams-by-chili.herokuapp.com</a>

### Installation:

#### Clone from github repo:
```
$ git clone https://github.com/chilidoggca/streams_by_chili.git
$ cd streams_by_chili
```
#### Create the following files in their corresponding project paths
  1. config.json (app/javascript/components/config/config.json)

    - For example:
   ```
   $ cd app/javascript/components/config
   $ touch config.json
   ```

  2. app_keys.rb (config/initializers/app_keys.rb)

#### Configure the following files:

  1. config.json (app/javascript/components/config/config.json)

    ```json
    {
      "GOOGLE_FRONTEND_ID": "Your google client id"
    }
    ```

  2. app_keys.rb (config/initializers/app_keys.rb)

    ```ruby
    ENV['GOOGLE_API_KEY'] = 'Your google api key'
    ENV['GOOGLE_CLIENT_ID'] = 'Your google client id'
    ENV['GOOGLE_CLIENT_SECRET'] = 'Your google client secret'
    ```

  3. config.js (app/javascript/requests/config.js)

    ```javascript
    export const BASE_URL = 'http://localhost:3000'
    ```

#### Run on localhost:3000

  - Navigate to project root folder in your CLI then run:  
  ```
  $ bundle
  $ rails db:create
  $ rails db:migrate
  $ rails s
  ```


### Technologies
  - Ruby on Rails
  - PostgreSQL
  - React
  - Bootstrap, FontAwesome, Google Fonts CDNs
  - Google / Youtube Data v3 APIs

### Credits:
Jack Lee
  - GitHub: https://www.github.com/chilidoggca
  - LinkedIn: https://www.linkedin.com/in/jackclee
  - Portfolio: http://www.jackclee.com

### License:
<a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT License</a>

Copyright (c) [2018] [Jack Lee]
