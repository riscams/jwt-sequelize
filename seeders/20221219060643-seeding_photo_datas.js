'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Photos', [{
    title: 'Photo Jadul',
    caption: "anything",
    image_url: "https://photojadul.com",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    title: 'Photo Kenangan',
    caption: "anything",
    image_url: "https://photokenangan.com",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    title: 'Photo Liburan',
    caption: "anything",
    image_url: "https://photoliburan.com",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    title: 'Photo Malming',
    caption: "anything",
    image_url: "https://photomalming.com",
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
