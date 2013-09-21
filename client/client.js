Rooms = new Meteor.Collection('rooms');
Template.rooms.rooms = function () {
  return Rooms.find({}, {sort: {name: 1}});
};