const knex = require("../db/knex");

exports.getAllInspections = function(req, res) {
  knex
    .select()
    .table("inspections")
    .then(inspections => res.json(inspections));
};

exports.getOneInspections = function(req, res) {
  knex
    .select()
    .table("inspections")
    .where("id", req.params.id)
    .then(inspection => res.json(inspection));
};

exports.addOneInspection = function(req, res) {
  knex("inspections")
    .insert(req.body)
    .returning("*")
    .then(newInspection => res.json(newInspection));
};

exports.updateOneInspection = function(req, res) {
  knex("inspections")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedInspection => res.json(updatedInspection));
};

exports.removeOneInspection = function(req, res) {
  knex("inspections")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newList => res.json(newList));
};
