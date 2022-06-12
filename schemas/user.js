export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'institute',
        title: 'Institute',
        type: 'string'
      },
      {
        name: 'password',
        type: 'string',
        hidden: true
      }
    ]
  };