# Reboot_Project-2: PetsAreKings
## Description
PetsAreKings, is an online application focused on connecting pet owners with loving pet-sitters. PetsAreKings allows users to search for a professional pet-sitter to come over to their homes or, instead, to leave their friends under the care of our pet lovers.


## API Endpoints

All API Request must be prepended with /api            


### Authentication Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, username, email, password, role  | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token
GET    | /auth/check      | YES   | Auth Token check         | -                                               |


### User Profile Endpoints

METHOD | ENDPOINT        | TOKEN | DESCRIPTION                   | POST PARAMS                                                      | RETURNS
-------|-----------------|-------|-------------------------------|------------------------------------------------------------------|-------------------------------
GET    | /user/profile   | YES   | Shows registered user profile |  -                                                               | name, surname, username, pets, location, role, comment, booking, pictures
PUT    | /user/profile   | YES   | Update user profile           | name, surname, username, pets, role, pictures, booking, location, comment  | updated user data
DELETE | /user/profile   | YES   | Delete user profile           | password                                                         | confirmation of deleted user


### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
GET    | /users                   | YES   | Finds host and professional by location  | query: search string           | list of matching hosts
GET    | /users/:userId           | YES   | Get user profile        | username                                        | user profile
GET    | /users/:userId/rating    | YES   | Create user valuation   | userId                                          | user rating
GET    | /users/:userId/pictureId | YES   | Get user picture        | userId, picture                                 | user picture
GET    | /users/:userId/commentsId| YES   | Get user comment        | userId, comment                                 | user comment
GET    | /users/:userId/booking   | YES   | Get user booking        | userId, services                                | user booking
POST   | /users/:userId/pets      | YES   | Create pet profile      | name, specie, sociable, race                    | object with new pet id, name, specie, sociable, race
POST   | /users/:userId/comments  | YES   | Create user comment     | userId, comment                                 | user comment
POST   | /users/:userId/picture   | YES   | Upload user picture     | userId, picture                                 | user picture
POST   | /users/:userId/complaint | YES   | Create user complaint   | reported, complainant, complaint, complaint_status | Confirmation complaint created
POST   | /users/:userId/rating    | YES   | Create user valuation   | userId, rating                                  | Confirmation rating created
PUT    | /users/:userId:/petId    | YES   | Update pet profile      | name, specie, sociable, race, picture           | updated pet data
PUT    | /users/:userId/bookingId | YES   | Update user booking     | userId, services.                               | updated booking
DELETE | /users/:userId/:petId    | YES   | Delete pet profile      | password                                        | confirmation of deleted pet
DELETE | /users/:userId/bookingId | YES   | Delete user booking     | userId,                                         | confirmation booking deleted
DELETE | /users/:userId/commentId | YES   | Delete user comment     | userid,  commentId                              | confirmation comment deleted
DELETE | /users/:userId/pictureId | YES   | Delete user picture     | userId,  pictureId                              | confirmation picture deleted


 
### ADMIN-User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
DELETE | /users/:userId   | YES   | Delete user profile             | userId,                                         | confirmation of deleted user
DELETE | /users/:userId/commentId | YES   | Delete user comment     | userId,  commentId                              | confirmation comment deleted
DELETE | /users/:userId/pictureId | YES   | Delete user picture     | userId,  pictureId                              | confirmation picture deleted


### HOST and PROFESSIONAL-User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
GET    | /users/:userId/available_date  | YES   | Get user available date    | userId, available_date, services       | user booking
GET    | /users/:userId/booking         | YES   | Get user booking        | userId, service                           | user booking
POST   | /users/:userId/services        | YES   | Create user services    | userId, service, price                    | user service
PUT    | /users/:userId/services        | YES   | Update user services    | userId, service, price                    | user service updated
PUT    | /users/:userId/available_date  | YES   | Update user available date | userId, available_date, services.      | updated booking
DELETE | /users/:userId/services        | YES   | Delete user services    | userId, service, price                    | user service
DELETE | /users/:userId/available_date  | YES   | Delete user available   | userId, available_date,                   | confirmation booking deleted
DELETE | /users/:userId/bookingId       | YES   | Delete user booking     | userId,                                   | confirmation booking deleted
