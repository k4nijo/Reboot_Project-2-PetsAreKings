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
-------|-----------------|-------|-------------------------------|------------------------------------------------------------------|--------------------------------
GET    | /user/profile   | YES   | Shows registered user profile |  -                                                               | name, surname, username, pets, location, role, comment, booking, pictures
PUT    | /user/profile   | YES   | Update user profile           | name, surname, username, email, pets, role                       | updated user data
DELETE | /user/profile   | YES   | Delete user profile          | password                                                         | confirmation of deleted user


### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
GET    | /users           | YES   | Finds host and professional by location          | query: search string           | list of matching hosts
GET    | /users/:userid   | YES   | Get user profile                | username                                        | user profile
POST    | /user/pets      | YES   | Create pet profile              | name, specie, sociable, race                    | object with new pet id, name, specie, sociable, race
PUT    | /user/:petid     | YES   | Update pet profile              | name, specie, sociable, race, picture           | updated pet data
DELETE | /user/:petid     | YES   | Delete pet profile              | password                                        | confirmation of deleted pet

### ADMIN-User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
PUT    | /users/:userid   | YES   | Update comment, rating, picture  | userid,                                        | updated user data
DELETE | /users/:userid   | YES   | Delete user profile              | userid,                                        | confirmation of deleted user


### HOST and PROFESSIONAL-User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                     | PARAMS                                          | RETURNS
-------|------------------|-------|---------------------------------|-------------------------------------------------|----------------------------
GET    | /users           | YES   | Finds host and professional by location          | query: search string           | list of matching hosts
GET    | /users/:userid   | YES   | Get user profile                | username                                        | user profile
POST    | /user/pets      | YES   | Create pet profile              | name, specie, sociable, race                    | object with new pet id, name, specie, sociable, race
PUT    | /user/:petid     | YES   | Update pet profile              | name, specie, sociable, race, picture           | updated pet data
