import Head from 'next/head';

import Meta from '../../components/Meta';
import Code from '../../components/Code';
import Youtube from '../../components/Youtube';
import Img from '../../components/Img';
import Post from '../../layout/Post';
import A from '../../components/text/A';
import P from '../../components/text/P';
import Title from '../../components/text/Title';
import SubTitle from '../../components/text/SubTitle';
import Li from '../../components/text/Li';

const packagesList = [
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
    >
      Path Intelisense
    </A>
    <P>
      This helps you get the relative path of your file and help you to autocomplete
      path names when you do something like…
    </P>
    <Code>import MyComponent from './src/components/MyComponent';</Code>
    <P>
      Plus, this works with dependencies from your <Code>packages.json</Code>.
    </P>
  </div>,
  <div>
    <A
      href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"
      className="small"
    >
      Project Manager
    </A>
    <P>
      This extension helps my life so much. When you have a lot of projects and don't want to waste
      time finding each one on your computer, you can just save them right inside the
      window. Just press
      {' '}
      <Code>shift + cmd + p</Code>
      {' '}
      and
      {' '}
      <Code>Project Manager: Save Project</Code>
      . Afterwards,
      you can just come back to your text editor and search right in the project
      manager by typing
      {' '}
      <Code>shift + cmd + p</Code>
      {' '}
      and
      {' '}
      <Code>Project Manager: List Projects to Open</Code>
      .
    </P>
  </div>,
  <div>
    <A
      href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
      className="small"
    >
      Auto Rename Tag
    </A>
    <P>
      This one doesn't do much. But what it does do is a huge help! For example, you’re working on a
      React project and you want to change your
      component
      {' '}
      <Code>MyApp</Code>
      {' '}
      to be
      {' '}
      <Code>YourApp</Code>
      . This extension will rename rename
      every <Code>MyApp</Code> to <Code>YourApp</Code> at the same time.
    </P>
  </div>,
  <div>
    <A
      href="https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets"
      className="small"
    >
      JavaScript (ES6) code snippets
    </A>
    <P>Some es6 snippets you help you write code faster.</P>
  </div>,
  <div>
    <A
      href="https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer"
      className="small"
    >
      Output Colorizer
    </A>
    <P>
      Add color to the internal terminal. Did I mention there is a built in terminal in VSC?!?
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring"
    >
      Babel ES6/ES7
    </A>
    <P>You need this if you work with React.</P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
    >
      Color Highlight
    </A>
    <P>
      This will highlight your color variables inside CSS and JS. So,
      when you type something like
      {' '}
      <Code>#fff</Code>
      {' '}
      you’ll see a white colored highlight on it.
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"
    >
      EditorConfig
    </A>
    <P>
      If you follow me on
      {' '}
      <A href="https://www.youtube.com/channel/UC7R7bcH9-KEBDiGNP1mZnmw">
        Youtube
      </A>
      {' '}
      you have surely
      seen how much I like this little tool. It makes your code more consistent for multiple users.
      What do I mean by this? It allows you to not worry so much about your Text Editor settings
      and will add some handy settings like
      {' '}
      <Code>indentation</Code>
      {' '}
      or
      {' '}
      <Code>trim whitespace</Code>
      . This is useful for
      teams because it can be painful to see some 4 space indents on one page and 2 space indents on another.
      This works on almost every code editor too, so if your friends don't use want to use your new favorite
      text editor, it will work for them too.
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=nepaul.editorconfiggenerator"
    >
      EditorConfig Generator
    </A>
    <P>
      This will generate a
      {' '}
      <Code>.editorConfig</Code>
      {' '}
      file for you with some nice editor settings.
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
    >
      Eslint
    </A>
    <P>
      Again, this is a tool I use on every project. This tool will help you to make your code better
      and let you know about errors before your code runs. For example, eslint will show you when you
      miss a semicolon or when you declare a variable but you never use it. But these errors depend on your eslint config.
    </P>
    <P>
      PS I have created my own. You can install it from npm
      {' '}
      <Code>npm i -D eslint-config-equimper</Code>
      . This one is an extension of the Airbnb linter.
    </P>
    <A href="https://www.npmjs.com/package/eslint-config-equimper">
      Link to mine
    </A>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode"
    >
      Flow Language Support
    </A>
    <P>
      If you are like me and you like Flow you need this tool. Less laggy than the nuclide
      one in Atom plus it's the better solution for VSC I’ve found.
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy"
    >
      Jumpy
    </A>
    <P>
      This is an awesome extension, but I don't really use it. But for the those who don’t
      like using their mouse, this is something you need.
      It will help you navigate your file really quickly without using your mouse.
    </P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native"
    >
      React Native Tools
    </A>
    <P>React-Native user? This tool it's for you.</P>
  </div>,
  <div>
    <A
      className="small"
      href="https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime"
    >
      Wakatime
    </A>
    <P>
      This plugin will track your time spent in your text editor each week. It's like a
      Fitbit for a programmer. It will tell you which project you spend the most time on,
      which language you use the most and can even keep track of goals you set during the week.
    </P>
  </div>,
];

export default () => (
  <Post>
    <Head>
      <title>
        Why I moved away from Atom to Visual Studio Code and my Setup
      </title>
    </Head>
    <Meta date="2017-02-25" />
    <Title>Why I moved away from Atom to Visual Studio Code and my Setup</Title>
    <Youtube videoId="baJyGTJr9so" />
    <P>VSC: Visual Studio Code</P>
    <SubTitle>Why I moved away from Atom</SubTitle>
    <P>
      I was an Atom user for nearly a year. Everything about this text editor
      was perfect for me. For starters, the packages manager was much more beginner
      friendly than Sublime. Also, there were always new updates which seemed to make my text
      editor more and more powerful with each update. But 4 months ago I started to feel
      the pain of the slow speed of Atom. This nearly broke my heart as I had put so much
      time and effort customizing the perfect setup for my needs. I built custom packages, created
      color syntax for different languages and even made my own code snippets.
    </P>
    <SubTitle>So VS Code?</SubTitle>
    <P>
      Yes, I choose <A href="http://code.visualstudio.com">VS Code</A>
      and yes I wasn't sold the first time I saw it. I don't like Microsoft products, but this one had something I really liked.
    </P>
    <SubTitle>Fast</SubTitle>
    <P>Open VSC took me less than 10 seconds.</P>
    <SubTitle>CPU</SubTitle>
    <P>
      VSC took almost no CPU! I got some weird stuff with code helper in the activity monitor of my MAC but I quickly
      resolved the issue by tweakng the settings(I’ll show these magic settings at the end of this post).
    </P>
    <SubTitle>Intelisense</SubTitle>
    <P>
      The Atom JavaScript autocomplete was really great but when I switched to VSC I
      never missed it. The fact than you can mouse over a function and see what it does
      or
      {' '}
      <Code>cmd + click</Code>
      {' '}
      on a file path and go right to the file is awesome!
      You can do the same thing in Atom. I know. But it’s just not as smooth as VSC.
    </P>
    <SubTitle>Packages</SubTitle>
    <P>
      Like Atom, VSC has a lot of packages. The
      VSC community put a lot of effort into making your experience with this text editor better everyday.
      I miss some of Atom packages but at the same time, I have some new favorites for VSC.
    </P>
    <SubTitle>My Top Packages</SubTitle>
    <P>Here you can click on the packages name. This is a link :)</P>
    <Li lists={packagesList} />
    <SubTitle>My Editor</SubTitle>
    <Img>http://i.imgur.com/RmEXgyy.png</Img>
    <P>
      My color schema is
      {' '}
      <A href="https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai">
        One Monokai
      </A>
    </P>
    <P>
      For icons I use
      {' '}
      <A href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">
        Material Icon Theme
      </A>
    </P>
    <SubTitle>My settings</SubTitle>
    <P>
      You can add some of my settings to your.
      {' '}
      <A href="https://gist.github.com/EQuimper/e619cdcd555798ea2f06aa009ec7fa8d">
        Gist
      </A>
    </P>
    <A href="https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux#review-details">
      My Snippets Packages
    </A>
    <SubTitle>Hidden Gem</SubTitle>
    <P>
      One of my friends have started his own youtube channel where he talk
      about programming in general.
      {' '}
      <A href="https://www.youtube.com/channel/UCxdr1zRpfUfZw_5GqrpvXGg">
        Take a look at his channel :)
      </A>
    </P>
    <P>
      If you want to learn React-Native with NodeJS for your server side,
      I'm building a tutorial on youtube.
      {' '}
      <A href="https://www.youtube.com/playlist?list=PLzQWIQOqeUSNX_ZDqt9L3TMSwFa9GbIwp">
        Build a Meetups App With React-Native and Node.JS
      </A>
    </P>
  </Post>
);
