const db = require('../server/db');
const Product = require('../server/db/models/Product');

const seed = async () => {
  await db.sync({ force: true });

  const potatoes = await Promise.all([
    Product.create({
      name: 'Oven Roasted Potatoes',
      imageUrl: '/assets/images/oven-roasted.jpg',
    }),
    Product.create({
      name: 'Roasted Red Potatoes',
      imageUrl: 'assets/images/roasted-red.jpeg',
    }),
    Product.create({
      name: 'Sack of Potatoes',
      imageUrl: 'assets/images/sack.jpeg',
    }),
    Product.create({
      name: 'Perfect Roast Potatoes',
      imageUrl: 'assets/images/perfect-roast.jpg',
    }),
    Product.create({
      name: 'Caramelized Potatoes',
      imageUrl: 'assets/images/caramelized.jpg',
    }),
    Product.create({
      name: 'Parmesan Roasted Potatoes',
      imageUrl: 'assets/images/parmesan-roasted.jpg',
    }),
  ]);
  console.log(`Seeded ${potatoes.length} potatoes to database`);
};

seed();
