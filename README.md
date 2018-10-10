Database: 
Using local postgresql database
Have to create it (with "development" properties, see /config/config.json)
Run migration files "sequelize db:migrate"
Run seed files "sequelize db:seed:all"

Folder Structure:
need to move server stuff into src/server
but somehow when moved, npm start creates infinite loop
will start client in src/client folder though
