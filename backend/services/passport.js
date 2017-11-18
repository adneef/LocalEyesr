const passport = require('passport')
const knex = require('../knex')
const GoogleStrategy = require('passport-google-oauth20').Strategy

// take in whatever was passed into `done` inside the GitHubStrategy config
passport.serializeUser((object, done) => {
  console.log("Serialize User", {token: object})
  // when I call `done` _here_, I am passing in the data to be saved to the session
  done(null, {token: object.token})
})

passport.deserializeUser((object, done) => {
  done(null, object)
})

passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true
}, function(request, accessToken, refreshToken, profile, done) {
  let id = profile.id
  let dbUser

  //check if user already exists
  knex('users')
  .first()
  .where('google_id', id)
  .then((user) => {
    console.log('User already exists?', user)

    //if user does not exist, insert them into the database
    if(!user) {
      knex('users')
      .returning('google_id')
      .first()
      .insert({
        google_id: id
      })
      //then set dbUser equal to that newUser
      .then((newUser) => {
        console.log('New User', newUser)
        dbUser = newUser
      })
      //if user does exist, then set dbuser equal to that user
    } else {
      console.log('User definitely exists:', user)
      dbUser = user
    }
  })
  // console.log("profile:\n\n", typeof profile.id +"\n\n")


  return done(null, dbUser)
}))

module.exports = passport
