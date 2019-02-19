const db = require('../server/db');
const Product = require('../server/db/models/Product');

const seed = async () => {
  await db.sync({ force: true });

  const potatoes = await Promise.all([
    Product.create({ name: 'Potato' }),
    Product.create({ name: 'Potato2' }),
  ]);
  console.log(`Seeded ${potatoes.length} potatoes to database`);
};

seed();
