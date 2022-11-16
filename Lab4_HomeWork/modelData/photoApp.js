"use strict";

(function() {
   // Create fake test Schema
   var schemaInfo = {
      load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
      __v: 0,
      _id: "57231f1b30e4351f4e9f4bf6"
   };

   // Create init users.

   var im = {_id: "57231f1a30e4351f4e9f4bd7", first_name: "Bang", last_name: "Le", 
             location: "HCM city", description: "test 1", occupation: "Student"};
   var er = {_id: "57231f1a30e4351f4e9f4bd8", first_name: "User", last_name: "2", 
             location: "Nostromo", description: "none", occupation: "Officer"};
   var pt = {_id: "57231f1a30e4351f4e9f4bd9", first_name: "User", last_name: "3", 
             location: "Gondor", description: "none", occupation: "Student"};
   var rk = {_id: "57231f1a30e4351f4e9f4bda", first_name: "User", last_name: "4", 
             location: "D'Qar", description: "Excited to be here!", occupation: "Rebel"};
   var al = {_id: "57231f1a30e4351f4e9f4bdb", first_name: "User", last_name: "5", 
             location: "Pawnee, IN", description: "Witch", occupation: "Animal Control"};
   var jo = {_id: "57231f1a30e4351f4e9f4bdc", first_name: "User", last_name: "6",
             location: "Stanford", description: "From UIT with love", occupation: "Professor"};

   var users = [im, er, pt, rk, al, jo];

   // Create initial photos.
   var photo1 = {_id: "57231f1a30e4351f4e9f4bdd", date_time: "2012-08-30 10:44:23", file_name: "ouster.jpg", user_id: jo._id};
   var photo2 = {_id: "57231f1a30e4351f4e9f4bde", date_time: "2009-09-13 20:00:00", file_name: "image.jpg", user_id: im._id};
   var photo3 = {_id: "57231f1a30e4351f4e9f4bdf", date_time: "2009-09-13 20:05:03", file_name: "Logo_UIT_updated.jpg", user_id: im._id};
   var photo4 = {_id: "57231f1a30e4351f4e9f4be0", date_time: "2013-11-18 18:02:00", file_name: "ripley1.jpg", user_id: er._id};
   var photo5 = {_id: "57231f1a30e4351f4e9f4be1", date_time: "2013-09-20 17:30:00", file_name: "ripley2.jpg", user_id: er._id};
   var photo6 = {_id: "57231f1a30e4351f4e9f4be2", date_time: "2009-07-10 16:02:49", file_name: "kenobi1.jpg", user_id: rk._id};
   var photo7 = {_id: "57231f1a30e4351f4e9f4be3", date_time: "2010-03-18 23:48:00", file_name: "kenobi2.jpg", user_id: rk._id};
   var photo8 = {_id: "57231f1a30e4351f4e9f4be4", date_time: "2010-08-30 14:26:00", file_name: "kenobi3.jpg", user_id: rk._id};
   var photo9 = {_id: "57231f1a30e4351f4e9f4be5", date_time: "2013-12-03 09:02:00", file_name: "took1.jpg", user_id: pt._id};
   var photo10 = {_id: "57231f1a30e4351f4e9f4be6", date_time: "2013-12-03 09:03:00", file_name: "took2.jpg", user_id: pt._id};
   var photo11 = {_id: "57231f1a30e4351f4e9f4be7", date_time: "2013-09-04 09:16:32", file_name: "ludgate1.jpg", user_id: al._id};
   var photo12 = {_id: "57231f1a30e4351f4e9f4be8", date_time: "2008-10-16 17:12:28", file_name: "kenobi4.jpg", user_id: rk._id};

   var photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7,
      photo8, photo9, photo10, photo11, photo12];

   // Create initial comments.
   var comment1 = {
      _id: "57231f1a30e4351f4e9f4be9",
      date_time: "2012-09-02 14:01:00",
      comment: "Learning new programming languages is hard... " + 
      "it's so easy to forget a </div>!", user: jo, photo_id: photo1._id
   };

   var comment2 = {
      _id: "57231f1a30e4351f4e9f4bea",
      date_time: "2013-09-06 14:02:00",
      comment: "This is another comment, with a bit more text; " +
      "if the text gets long enough, does it wrap properly " +
      "from line to line?", user: jo, photo_id: photo1._id
   };

   var comment3 = {
      _id: "57231f1a30e4351f4e9f4beb",
      date_time: "2013-09-08 14:06:00",
      comment: "If you see this text in <b>boldface</b> " +
      "then HTML escaping isn't working properly.", user: jo, photo_id: photo1._id
   };

   var comment4 = {
      _id: "57231f1a30e4351f4e9f4bec",
      date_time: "2022-11-16 20:0:00",
      comment: "SID: 19521236", user: im, photo_id: photo2._id
   };

   var comment5 = {
      _id: "57231f1a30e4351f4e9f4bed",
      date_time: "2022-11-16 20:0:00",
      comment: "test user er", user: er, photo_id: photo5._id
   };

   var comment6 = {
      _id: "57231f1a30e4351f4e9f4bee",
      date_time: "2022-11-16 20:0:00",
      comment: "test user er", user: er, photo_id: photo7._id
   };

   var comment7 = {
      _id: "57231f1a30e4351f4e9f4bef",
      date_time: "2022-11-16 20:0:00",
      comment: "test user rk", user: rk, photo_id: photo7._id
   };

   var comment8 = {
      _id: "57231f1a30e4351f4e9f4bf0",
      date_time: "2022-11-16 20:0:00",
      comment: "test user rk", user: rk, photo_id: photo8._id
   };

   var comment9 = {
      _id: "57231f1a30e4351f4e9f4bf1",
      date_time: "2022-11-16 20:0:00",
      comment: "test user rk", user: rk, photo_id: photo12._id
   };

   var comment10 = {
      _id: "57231f1a30e4351f4e9f4bf2",
      date_time: "2022-11-16 20:0:00",
      comment: "test user pt", user: pt, photo_id: photo10._id
   };

   var comment11 = {
      _id: "57231f1a30e4351f4e9f4bf3",
      date_time: "2022-11-16 20:0:00",
      comment: "test user al", user: al, photo_id: photo11._id
   };
   
   var comment12 = {
      _id: "57231f1a30e4351f4e9f4bf4",
      date_time: "2022-11-16 20:0:00",
      comment: "test user al", user: al, photo_id: photo9._id
   };
   
   var comment13 = {
      _id: "57231f1a30e4351f4e9f4bf5",
      date_time: "2016-01-04 2:04:01",
      comment: "test user pt", user: pt, photo_id: photo9._id
   };
   
   var comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7, 
   comment8, comment9, comment10, comment11, comment12, comment13];

   comments.forEach(function (comment) {
      var photo = photos.filter(function (photo) {
         return (photo._id === comment.photo_id);
      })[0]; //only one match. return the content of the match inside the array

      if (!photo.comments) {
         photo.comments = [];
      }
      photo.comments.push(comment);
   });

   var userListModel = function() {
      return users;
   };

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var photoOfUserModel = function(userId) {
      return photos.filter(function (photo) {
         return (photo.user_id === userId);
      });
   };

   var schemaModel = function() {
      return schemaInfo;
   };

   var cs142models =  {
      userListModel: userListModel,
      userModel: userModel,
      photoOfUserModel: photoOfUserModel,
      schemaInfo: schemaModel
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.cs142models = cs142models;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.cs142models = cs142models;
   }
})();
