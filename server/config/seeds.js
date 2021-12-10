const db = require('./connection');
const { User, Project, Options } = require('../models');

db.once('open', async () => {

  await User.deleteMany();
  await Options.deleteMany();
  await Project.deleteMany();

  const user = await User.create({
    firstName: 'Will',
    lastName: 'Knowles',
    email: 'will@willknowles.com',
    password: 'password12345'
  });

  console.log('user created!', {user});

  const project = await Project.create({
    user: user._id,
    status: 'draft',
    title: 'Sample Project 1',
    imageUrl: 'http://example.com',
    description: 'Lorem ipsum dolar sit amet',
    link: 'http://example.com',
    github: 'http://example.com',
    tech: {
      mongoose: true,
      javascript: true
    }
  });

  // project.tech.forEach((v,k) => {
  //   console.log({k,v});
  // });

  console.log('project created!');

  process.exit();
});
