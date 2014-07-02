//You can create your own config file in config/ folder. For example config/myconf.js with your config variables:
//
//module.exports.myconf = {
//    name: 'projectName',
//    author: 'authorName',
//
//    anyobject: {
//      bar: "foo"
//    }
//};
//and then access these variables from any view via global sails variable.
//
//In a view:
//
//<!-- views/foo/bar.ejs -->
//<%= sails.config.myconf.name %>
//<%= sails.config.myconf.author %>
//In a service
//
//// api/services/FooService.js
//module.exports = {
//
//  /**
//   * Some function that does stuff.
//   *
//   * @param  {[type]}   options [description]
//   * @param  {Function} cb      [description]
//   */
//  lookupDumbledore: function(options, cb) {
//
//    // `sails` object is available here:
//    var conf = sails.config;
//    cb(null, conf.whatever);
//  }
//};
//
//// `sails` is not available out here
//// (it doesn't exist yet)
//console.log(sails);  // ==> undefined
//In a model:
//
//// api/models/Foo.js
//module.exports = {
//  attributes: {
//    // ...
//  },
//
//  someModelMethod: function (options, cb) {
//
//    // `sails` object is available here:
//    var conf = sails.config;
//    cb(null, conf.whatever);
//  }
//};
//
//// `sails is not available out here
//// (doesn't exist yet)
//In a controller:
//
//Note: This works the same way in policies.
//
//// api/controllers/FooController.js
//module.exports = {
//  index: function (req, res) {
//
//    // `sails` is available in here
//
//    return res.json({
//      name: sails.config.myconf.name
//    });
//  }
//};
//
//// `sails is not available out here
//// (doesn't exist yet)

// above is how to access it in different component.
//This is custom config for hangookdo project.

module.exports.hangookdo = {

		email:{
			service: "Gmail",
			emailId: 'hangookdo@gmail.com',
			emailPsd: '60064159'
		}
};
