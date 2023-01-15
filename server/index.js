const express = require('express');
const app = express()
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');
const commentRoute = require('./src/routes/commentRoute');
const articleRoute = require('./src/routes/articleRoute');
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const findOrCreate = require('mongoose-findorcreate')
require('dotenv').config()



//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/api/user', userRoute);
app.use('/api/comment', commentRoute);
app.use('/api/article', articleRoute)


app.get('/', (req,res) => {
    res.send('testing once again')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
console.log('cors connected')



const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//Middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use 'express-session'


authUser = (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}

//Use 'GoogleStrategy' as the Authentication Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/auth/google/callback',
    passReqToCallback: true
}, authUser));


//  mongoose.connect('mongodb+srv://csalinas:mp3@mp3.fzxnlmz.mongodb.net/test').then(() => { console.log('Connected to DB!') }); 


// connecting to MongoAtlas

mongoose.connect('mongodb+srv://admin:admin@cluster0.fnw7zkg.mongodb.net/test').then(() => { console.log('Connected to DB!') });


// const userSchema = new mongoose.Schema({
//     username: String,
//     name: String,
//     googleId: String,
//     secret: String
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const User = new mongoose.model('User', userSchema);


passport.serializeUser((user, done) => {
    console.log(`\n--------> Serialize User:`)
    console.log(user)
    
    // The USER object is the 'authenticated user' from the done() in authUser function.
    // serializeUser() will attach this user to 'req.session.passport.user.{user}', so that it is tied to the session object for each session.  

    done(null, user)
})


passport.deserializeUser((user, done) => {
    console.log('\n--------- Deserialized User:')
    console.log(user)
    // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
    // deserializeUser will attach this {user} to the 'req.user.{user}', so that it can be used anywhere in the App.

    done(null, user)
})


//Start the NODE JS server
// app.listen(4000, () => console.log(`Server started on port 4000...`))


//console.log() values of 'req.session' and 'req.user' so we can see what is happening during Google Authentication
let count = 1
showlogs = (req, res, next) => {
    console.log('\n==============================')
    console.log(`------------>  ${count++}`)

    console.log(`\n req.session.passport -------> `)
    console.log(req.session.passport)

    console.log(`\n req.user -------> `)
    console.log(req.user)

    console.log('\n Session and Cookie')
    console.log(`req.session.id -------> ${req.session.id}`)
    console.log(`req.session.cookie -------> `)
    console.log(req.session.cookie)

    console.log('===========================================\n')

    next()
}

app.use(showlogs)


app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/profile',
        failureRedirect: 'http://localhost:3000/'
    }));

//Define the Login Route
app.get('/login', (req, res) => {
    res.render('login.ejs')
})


//Use the req.isAuthenticated() function to check if user is Authenticated
checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect('/login')
}

//Define the Protected Route, by using the 'checkAuthenticated' function defined above as middleware
app.get('/dashboard', checkAuthenticated, (req, res) => {
    res.render('dashboard.ejs', { name: req.user.displayName })
})

//Define the Logout
app.post('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
    console.log(`-------> User Logged out`)
})
