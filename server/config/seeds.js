const db = require('./connection');
const { User, Project } = require('../models');

db.once('open', async () => {

  // user
  await User.deleteMany();

  const user = await User.create({
    firstName: 'Will',
    lastName: 'Knowles',
    email: 'will@willknowles.com',
    password: 'password12345'
  });

  console.log('user created!', {user});

  await Project.deleteMany();

  const project = await Project.create({
    userID: user._id,
    status: 'draft',
    title: 'Sample Project 1',
    imageUrl: 'http://example.com',
    description: 'Lorem ipsum dolar sit amet'
,
    link: 'http://example.com',
    github: 'http://example.com',
    tech: {
      mongoose: true,
      javascript: true
    }
  });

  project.tech.forEach((v,k) => {
    console.log({k,v});
  });

  console.log('project created!', {project});

  process.exit();
});
