const knex = require("../db/knex");

exports.getAllMembers = function(req, res) {
  knex
    .select()
    .table("members")
    .then(members => res.json(members));
};

exports.getOneMember = function(req, res) {
  knex
    .select()
    .table("members")
    .where("id", req.params.id)
    .then(member => res.json(member));
};
