const { posts } = require('../posts');

const max = 10;

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>EQuimper's Blog</title>
    <subtitle>Articles</subtitle>
    <link href="https://equimper.me/atom" rel="self"/>
    <link href="https://equimper.me/"/>
    <updated>${posts[0].date}</updated>
    <id>https://equimper.me/</id>
    <author>
      <name>Emanuel Quimper</name>
      <email>quimperemanuel@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://equimper.me/${post.date.match(/\d{4}/)[0]}/${post.id}" />
          <updated>${post.date}</updated>
        </entry>`, '')}
  </feed>
`
