"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Tony",
        lastName: "Stark",
        email: "ironman@gmail.com",
        password: bcrypt.hashSync("jarvis", 10),
        gender: "male",
      },
      {
        firstName: "Thor",
        lastName: "Odinson",
        email: "godofthunder@gmail.com",
        password: bcrypt.hashSync("ihateloki", 10),
        gender: "male",
      },
      {
        firstName: "Steve",
        lastName: "Rogers",
        email: "captainamerica@gmail.com",
        password: bcrypt.hashSync("buckyisalive", 10),
        gender: "male",
      },
      {
        firstName: "Natasha",
        lastName: "Romanoff",
        email: "blackwidow@gmail.com",
        password: bcrypt.hashSync("heybigguy", 10),
        gender: "female",
      },
      {
        firstName: "Bruce",
        lastName: "Banner",
        email: "hulk@gmail.com",
        password: bcrypt.hashSync("iamalwaysangry", 10),
        gender: "male",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
