// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Rooms.find().count() === 0) {
    var data = [
        { name: 'Public Room' }
      , { name: 'Another test room' }
    ];

    for (var i = 0; data.length; i++) {
      Rooms.insert({
        name: data[i].name
      });
    }
  }
});
