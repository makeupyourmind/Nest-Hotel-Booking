var seeder = require('mongoose-seed');
const bcrypt = require('bcrypt');
const config = require('./key'); 

// Connect to MongoDB via Mongoose
seeder.connect(config.mongoURI, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './model/user_model.js',
    './model/halls_model.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['users', 'halls'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
      process.exit()
    });
 
  });
});

var hashPasswordAdmin = bcrypt.hashSync('test', 10);
var hashPassword = bcrypt.hashSync('test1', 10);
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'users',
        'documents': [
            {
                'role': 'admin', 
                'email': 'test@gmail.com',
                'password': hashPasswordAdmin
            },
            {
                'role': 'user', 
                'email': 'test1@gmail.com',
                'password': hashPassword
            }
        ],
    },
    {
        'model': 'halls',
          'documents': [
              {
                  'title': 'Test_title', 
                  'description': 'Test_description',
                  'imageURL': 'Test_image'
              }
          ]
    }
];
