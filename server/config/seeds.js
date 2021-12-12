const db = require('./connection');
const { User, Project, Options, MessageTemplate } = require('../models');

db.once('open', async () => {

  await User.deleteMany();
  await Options.deleteMany();
  await Project.deleteMany();
  await MessageTemplate.deleteMany();

  const user = await User.create({
    firstName: 'Will',
    lastName: 'Knowles',
    email: 'will@willknowles.com',
    password: 'password12345'
  });

  console.log('user created!', user);

  const messageTemplate = await MessageTemplate.create({
    user: user._id,
    templateID: 'test',
    serviceID: 'test',
    userID: 'test',
    accessToken: 'test'
  });

  console.log('messageTemplate created!', messageTemplate);

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

  console.log('project created!', project);

  process.exit();
});
