"use strict";

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
        password: "jarvis",
        gender: "male",
      },
      {
        firstName: "Thor",
        lastName: "Odinson",
        email: "godofthunder@gmail.com",
        password: "ihateloki",
        gender: "male",
      },
      {
        firstName: "Steve",
        lastName: "Rogers",
        email: "captainamerica@gmail.com",
        password: "buckyisalive",
        gender: "male",
      },
      {
        firstName: "Natasha",
        lastName: "Romanoff",
        email: "blackwidow@gmail.com",
        password: "heybigguy",
        gender: "female",
      },
      {
        firstName: "Bruce",
        lastName: "Banner",
        email: "hulk@gmail.com",
        password: "iamalwaysangry",
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
