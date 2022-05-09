const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  const userSeeds = await User.create(users);

  for (let i = 0; i < thoughts.length; i++) {

    const currentUser = userSeeds[Math.floor(Math.random() * userSeeds.length)];

    const currentThought = await Thought.create({
      thoughtText: thoughts[i].thoughtText,
      username: currentUser.username
    })

    await User.findOneAndUpdate({
      _id: currentUser._id,

    },
    {$addToSet: {thoughts:currentThought._id}},{new: true})
  }

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

