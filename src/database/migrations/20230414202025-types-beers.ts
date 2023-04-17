import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'types_beers',
      [
        {
          name: 'Weissbier',
          temperatureMin: -1,
          temperatureMax: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pilsens',
          temperatureMin: -2,
          temperatureMax: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Weizenbier',
          temperatureMin: -4,
          temperatureMax: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Red ale',
          temperatureMin: -5,
          temperatureMax: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'India pale ale',
          temperatureMin: -6,
          temperatureMax: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'IPA',
          temperatureMin: -7,
          temperatureMax: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Dunkel',
          temperatureMin: -8,
          temperatureMax: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Imperial Stouts',
          temperatureMin: -10,
          temperatureMax: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Brown ale',
          temperatureMin: -0,
          temperatureMax: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface: QueryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
