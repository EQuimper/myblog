import Head from 'next/head';

import Meta from '../../components/Meta';
import CodeContainer from '../../components/CodeContainer';
import Code from '../../components/Code';
import Img from '../../components/Img';
import Post from '../../layout/Post';
import A from '../../components/text/A';
import P from '../../components/text/P';
import Title from '../../components/text/Title';
import SubTitle from '../../components/text/SubTitle';

export default () => (
  <Post>
    <Head>
      <title>Testing your API with Postman</title>
    </Head>
    <Meta date="2017-01-28" />
    <Title>Testing your API with Postman</Title>
    <P>
      I'm sure you already know the famous tool call
      {' '}
      <A href="https://www.getpostman.com">Postman</A>
      .
      This is a super useful tool for test your API and looks at the response you get from your server.
      But I see a lot of people just using it as a manual tester.
      This is not wrong but you can get much better productivity with if you use some of Postman features.
    </P>
    <SubTitle>Create your first Simple Test</SubTitle>
    <P>
      First thing this is a simple controller in your app where you can
      fetch a unique post with is ID as params.
    </P>
    <P>
      /posts/controller.js
    </P>
    <CodeContainer>{`
      import Post from './model';
      /**
      * GET BY ID
      */
      export const fetchPostById = async (req, res) => {
        try {
          res.status(200).json({ post: await Post.findById(req.params.id) });
        } catch (e) {
          res.status(e.status).json({ error: true, message: e.message });
        }
      };
    `}</CodeContainer>
    <P>/posts/routes.js</P>
    <CodeContainer>{`
      import { Router } from 'express';
      import * as PostController from './controller';

      const routes = new Router();

      routes.route('/posts/:id').get(PostController.fetchPostById);

      export default routes;
    `}</CodeContainer>
    <P>
      Now time to open Postman. In your left, you gonna see
      <Img>http://i.imgur.com/sB0MxDA.png</Img>
      a little folder with a plus sign. If you click there you can now create a collection.
      <Img>http://i.imgur.com/fH7iOrk.png</Img>
      Give a little name for your collection.
      For me, I'm using <Code>Postman-Tuto</Code>. With that collection, we make
      our life much easier to test route already create.
    </P>
    <P>
      Add the route and the <Code>GET</Code> method in the main area.
      For me, I add
      {' '}
      <Code>http://localhost:3000/api/v1/posts/588ce463f4741431c918a04b</Code>
      {' '}
      cause I
      have already created a fake post.
    </P>
    <Img>http://i.imgur.com/8IjnuIJ.png</Img>
    <P>
      Now when I click send I receive this.
      <Img>http://i.imgur.com/bTBgJYa.png</Img>
      Perfect the route is working and the controller + model do their job.
    </P>
    <SubTitle>Write your first Postman test</SubTitle>
    <P>
      If you click on Test right below the URL container you gonna see
      this
      {' '}
      <Img>http://i.imgur.com/yl3ocAW.png</Img>
      Now time to write some test. First thing in the
      right you can see a select menu with test already create by Postman. We can select
      one already <Code>Status code: Code is 200</Code>.
    </P>
    <Img>http://i.imgur.com/ykMf8Mb.png</Img>
    <P>If you click send now we can see the test pass <Code>1/1</Code>.</P>
    <Img>http://i.imgur.com/Yft8e5Y.png</Img>
    <P>
      Now add the
      {' '}
      <Code>Response body: JSON value check</Code>
      {' '}
      again in your right snippets.
    </P>
    <CodeContainer>{`
      var jsonData = JSON.parse(responseBody);
      tests["Post should have title of Title 1"] = jsonData.post.title === "Title 1";
    `}</CodeContainer>
    <P>Add this line and now click send.</P>
    <P>This is the result.</P>
    <Img>http://i.imgur.com/q90y932.png</Img>
    <SubTitle>Add more test</SubTitle>
    <P>Now an example of a complete test for this routes.</P>
    <CodeContainer>{`
      tests["GET By Id Posts - Status code is 200"] = responseCode.code === 200;

      var jsonData = JSON.parse(responseBody);

      tests["Post should have title of Title 1"] = jsonData.post.title === "Title 1";

      tests["Post should have id of 588ce463f4741431c918a04b"] = jsonData.post._id === "588ce463f4741431c918a04b";

      tests["Should have no error"] = jsonData.error === false;
    `}</CodeContainer>
    <Img>http://i.imgur.com/aNgcIXm.png</Img>
    <SubTitle>Time to save and add new one</SubTitle>
    <P>
      Now in the top left, you can see a big Save button.
      Click on the arrow and <Code>save as</Code>. Give a name to this route.
      <Img>http://i.imgur.com/rZfw6fP.png</Img>
      {' '}
      + you need to add it to your collection.
    </P>
    <SubTitle>The runner</SubTitle>
    <P>
      In the top left you can see the button Runner if you click it Postman open a new window.
      Select your collection in the dropdown.
    </P>
    <Img>http://i.imgur.com/wZRSxWz.png</Img>
    <P>If you click Start Run you can get this.</P>
    <Img>http://i.imgur.com/p2luDGi.png</Img>
    <P>
      As you can see I add some new test for show how awesome this tool can be.
      You can also import your test run and give that to another dev in your team.
    </P>
    <P>
      Last thing you can also export all your route if you click it in your collection.
      After the other dev just need to import it and he gets all your route.
      Now I start to export it in my postman folder inside my server so I can
      import it if I delete mine on my GUI.
    </P>
    <P>
      Hope you like this little tutorial and you learn something new today :).
    </P>
    <P>
      P.S You still need to run some test in your controller etc but with the Runner of Postman +
      the test etc that give you just much more confirmation.
    </P>
    <SubTitle>Ressources</SubTitle>
    <A className="small" href="https://www.getpostman.com/docs">
      Docs of Postman
    </A>
  </Post>
);
