const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

// take in whatever was passed into `done` inside the GitHubStrategy config
passport.serializeUser((object, done) => {
  console.log("Serialize User", {token: object})
  // when I call `done` _here_, I am passing in the data to be saved to the session
  done(null, {token: object.token})
})

passport.deserializeUser((object, done) => {
  console.log("Deserialize User", object)
  done(null, object)
})

passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true
}, function(request, accessToken, refreshToken, profile, done) {
  console.log("good things happening passport...", accessToken, refreshToken, profile)

  return done(null, profile)
}))

module.exports = passport
