import Head from 'next/head';

import Meta from '../../components/Meta';
import Post from '../../layout/Post';
import A from '../../components/text/A';
import P from '../../components/text/P';
import Title from '../../components/text/Title';
import SubTitle from '../../components/text/SubTitle';
import Li from '../../components/text/Li';

const projectsLists = [
  <A className="small" href="http://www.shneed.com/">1.ShortNeed</A>,
  <A className="small" href="https://givemethatidea.com/">2.GiveMeThatIdea</A>,
  <A className="small" href="https://www.youtube.com/watch?v=Hy5r_gXRPaw&t=3s">
    3.React-Native Twitch
  </A>,
];

const goalsList = [
  <P className="list">1.Get 500+ Subscribers on my youtube channel.</P>,
  <P className="list">2.Post 25 videos at least on youtube.</P>,
  <P className="list">3.Create 2 apps for my startup idea.</P>,
  <P className="list">
    4.Get better as a Mentor and see student smile after graduating.
  </P>,
  <P className="list">5.Get better and better on JavaScript.</P>,
  <P className="list">6.Learn Golang or Elixir a bit more.</P>,
  <P className="list">7.Wrote 30 posts on this blogs.</P>,
  <P className="list">
    8.Create 3 tutorials and post it on Youtube and Udemy for free.
  </P>,
  <P className="list">9.Create 1 awesome library for the community.</P>,
  <P className="list">10.Contribute on at least 3 open source project.</P>,
  <P className="list">11.Get better in English.</P>,
  <P className="list">12.Start to learn Spanish.</P>,
  <P className="list">13.Read 10 books about business.</P>,
  <P className="list">14.Read 20 books about programming.</P>,
  <P className="list">15.Get 1500 points on StackOverflow (652 currently).</P>,
];

export default () => (
  <Post>
    <Head>
      <title>My goals for 2017</title>
    </Head>
    <Meta date="2017-01-06" />
    <Title>My goals for 2017</Title>
    <SubTitle>Intro</SubTitle>
    <P>
      2016 was a big year for me. First thing, I start coding the 6 January 2016 so today
      is my first full year finish. Coming from an Army background this was one of the
      biggest moves of my life. I've always done a physical job and this one we all know
      is really more technical. I found by coding every day in the year "Yes 365days last
      year I have touched my PC and coded" that I love that more and more.
    </P>
    <P>
      When I started that was really hard to be sure this is more than a passion.
      I was really not that good and everything was too much for me.
      I things the facts I'm french and everything is English didn't help me either.
      So after 1 big month of using Html and CSS I jump on the Ruby On Rails part.
      I follow a lot of tutorial on the internet where I make a clone of some app like Pinterest, Twitter, Airbnb etc.
    </P>
    <P>
      In April 2016 I know at this time I want to do a career.
      So I join a BootCamp call <A href="https://www.thinkful.co">Thinkful</A>.
      That's was one my best moved so far.
      I meet one of the best programmer and more than that he was my mentor.
      His name is <A href="https://github.com/shiftyp">Ryan Lynch</A>.
      This guy makes me understand the hard concept and make everything look easier.
      He pushes me on the Redux world and now I use that everywhere. Thank you, Ryan!
    </P>
    <P>
      When I finish the boot camp I was struggling finding job.
      But I continue to work on my experience and continue to build stuff.
      At this time the only project has built was this little
      {' '}
      <A href="http://equimper.github.io/streamingAppRedux">app</A>
      .
      That's wasn't enough so I continue to build and put the commitment into my learning.
      With the help of the Thinkful team, I found my first as a freelance developer where I have built a
      full-stack application using React, Redux, React-Native, Meteor, Node etc.
    </P>
    <P>
      In end November, I get a job at Thinkful where I help people with the React-Redux part
      of the course. I really like that, I learn much more by teaching. I liked helping people and
      this is a place where I'm happy to help the student understand react and redux much more.
      I know where we struggle and that's why I think that give me a good idea how I can help them.
    </P>
    <P>
      In December, I start to challenge myself a bit more. The first thing I created
      a
      {' '}
      <A href="https://www.youtube.com/channel/UC7R7bcH9-KEBDiGNP1mZnmw">
        youtube channel
      </A>
      . This thing was something
      I have to think for a long time but with my bad English + my experience I wasn't sure that was a
      good idea. But finally I really liked it and this is something I want to put energy this year. The second
      thing I start to restream myself on
      {' '}
      <A href="https://www.livecoding.tv/equimper/">livecoding.tv</A>
      .
      I start to stream almost the first day of my journey of learning code. Now I grow up a good
      audience and I think that push myself a bit more than doing nothing.
    </P>
    <P>
      One thing too I'm proud for this year was my commitment on
      {' '}
      <A href="https://github.com/EQuimper">Github</A>
      .
      I contribute on some open source project.
    </P>
    <P>
      One of my best choice this year was to challenge myself doing 12 apps in 12 weeks.
      Right now I have finished the first 3 apps.
    </P>
    <Li lists={projectsLists} />
    <P>
      That challenge myself so much, I learn stuff with this challenge
      so quickly and now that pushed me some time on a place I never been.
    </P>
    <SubTitle>My goals for 2017</SubTitle>
    <Li lists={goalsList} />
    <SubTitle>End Words</SubTitle>
    <P>
      So I hope you have big goals this year too. Don't hesitate to write a
      little hello in the chat and let me know what is your goal this year too.
    </P>
    <P>
      Happy coding!
    </P>
  </Post>
);
