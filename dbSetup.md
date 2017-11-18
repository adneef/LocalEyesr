Instructions for localbd setup:

0.  create a .env file in the root directory for this app, and put the following things in it, then add to your own .gitignore:

  GOOGLE_CLIENT_ID=[yourClientID]
  GOOGLE_CLIENT_SECRET=[yourClientSecret]
  COOKIE_KEY=[whateverJunkYouWantToPutInHere]

1. Open psql on your computer

2. Run the following commands on the cli:
  createdb localeyesr_dev
  npm install
  knex migrate:latest
  knex seed:run

3.  A quick note: There's little seed data because everything is tied to a real google_id due to oauth, so the only current user is me.  Feel free to add yourselves in so we have more info to play with.
