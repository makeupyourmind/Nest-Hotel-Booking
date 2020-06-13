# Hotel-booking

Connect to db in src/config/keys.js and if you want to do seed you should go to db/key.js and change url connection

In order to do migrate go to  db/key.example.js file and create file *key.js* in that directory than fill in mongoUrlForMigrate and databaseName fields, then npm run migrate create 'title', write your migration and then run *npm run migrate up* to do migrate

npm run seed - *WARNING IF YOU DO SEEDS, THEN YOUR CURRENT DATABASE WILL BE CLEANED* add to database some info this command create admin(email : test@gmail.com, password: test)

and user(email: test1@gmail.com, password: test1) and also halls document 

npm start - start server

App listening on port 3000

Hotel booking

API HOTEL BOOKING

Цель:
Научиться реализовывать простейшее АПИ

Задача:
Реализовать АПИ бронирования номеров отеля (halls)

User routes:
method: POST /signUp -register  
method: POST /signIn - authentificate

Hall routes:
method: POST /halls - create hall, only for admins
method: DELETE /halls - delete hall, only for admins
method: GET /halls - view all halls (open)

Ticket routes:
method: POST /tickets - create ticket
method: DELETE  /tickets/:id - delete ticket (only for ticket creator)
method: GET /tickets - view all tickets (open)
method: GET /ticketsparams/:from/:to - get tickets by period of time (open)
method: PUT /ticket/:id - update ticket

Dev routes:
method: DELETE  /deleteall - Drop tickets collection;


Request objects models:
User:{                                               
	password: {                                                
		type: String,
	  required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	role:{
		type: String,
		required: true,
		default:'user'
	},
}

Hall: {
	title: {
	  type: String,
	 	required: true,
	},
	description:{
	  type: String,
	  required: true
	},
	imageURL:{
	  type: String,
	  default: ""
	}
}

Ticket: {
	hall_id:{
	   type: mongoose.Schema.Types.ObjectId (Hall id),
	   ref: 'Hall',
	   required: true,
	},
	user_id:{
	   type: mongoose.Schema.Types.ObjectId (User id),
	   ref: 'User',
	   required: true,
	},
	from: {
	   type: Date,
	   required: true,
	},
	to: {
	   type: Date,
	   required: true,
	},
	title: {
	   type: String,
	   required: false,
	   default: null
	},
}
