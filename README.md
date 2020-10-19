# Node.js - Express API

- Clean Architecture
- Unit Testing
- Integration Testing
- Load testing

---

- [x] **[Node.js / Express](https://github.com/expressjs/express)**
- [x] **[Awilix IOC Container](https://github.com/jeffijoe/awilix)**
- [x] **[MongoDB](https://github.com/mongodb/mongo)**
- [x] **[JWT](https://github.com/auth0/node-jsonwebtoken)**
- [x] **[Passport](http://www.passportjs.org/)**
- [x] **[Passport-jwt](https://github.com/themikenicholson/passport-jwt)**

# Docker

```
docker build -t st0ik/nodejs-api-ain:latest .
```

# HTTPie usage

### Register a new user

```
http -f POST localhost:5000/api/users/register email='mg.something@gmail.com' name='My Name' password='123123123'
```

### Get all Profiles

```
http localhost:5000/api/profile/all
```

### Get all Posts

```
http localhost:5000/api/posts
```
