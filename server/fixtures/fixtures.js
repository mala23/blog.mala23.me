if (Posts.find().count() === 0 ) {
  Posts.insert({
    title: 'Hello World!',
    teaser: 'This is my very first blog post.',
    author: 'mala23',
    date: new Date(),
    tags: 'prose; hello'
  });
};
