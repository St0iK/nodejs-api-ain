const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const config = require("../../config");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      const user = await User.findById(jwtPayload.id).exec();
      if (!user) {
        console.log("no user found for id");
        return done(null, false);
      }
      console.log("returning user");
      console.log({ user });
      return done(null, user);
    })
  );
};
