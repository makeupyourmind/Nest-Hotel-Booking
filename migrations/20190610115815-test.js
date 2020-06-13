module.exports = {
  up(db) {
    return db.collection('users').updateOne({email: 'test1'}, {$set: {email: 'test2'}});
    // return db.createCollection('', {

    // })
  },

  down(db) {
    return db.collection('users').updateOne({email: 'test2'}, {$set: {email: 'test1'}});
  }
};
