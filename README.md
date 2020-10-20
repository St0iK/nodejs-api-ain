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
docker run -p 5000:5000 st0ik/nodejs-api-ain

# Build prod image (.env.production)
docker build -f Dockerfile.production -t st0ik/nodejs-api-ain-prod:latest .
docker run -p 5000:5000 st0ik/nodejs-api-ain-prod
```

# Autocannon

```
autocannon -c100 -d100 localhost:5000/api/posts
```

# Clinic.js Doctor

```
clinic doctor --on-port=’autocannon -c100 -d100 localhost:$PORT/seed/v1’ -- node server/index.js
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
