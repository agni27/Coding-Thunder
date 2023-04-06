# Coding-Thunder
Blog to learn about various coding technologies(Used express js)

This is  an Express.js app that serves as a blog for teaching various coding technologies. The app covers topics such as HTML, CSS, JavaScript, React JS and Node.js.

The blog features a clean and user-friendly interface that makes it easy for users to navigate and find the content they are looking for. Each post is written in a clear and concise manner, with plenty of examples and code snippets to help users understand the concepts being discussed.

Overall, this project was a great opportunity for me to showcase my skills in Express.js development. I am proud of the final product and I believe it will be a valuable resource for anyone looking to learn more about these technologies.


//Important Info about the project! The data folder isn't uploading for some reason, so please make a folder named data on your own device and make a 'blogs.js' file in it and paste the following code:



blogs=[
      {

          content1:"React JS is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers.",
          title:"Learning React JS",
          content2:"In this blog post, we will explore the basics of React JS and how to get started with it.",
          heading1:"What is React JS?",
          content3:"React JS is a JavaScript library for building user interfaces. It allows developers to create reusable components that can be easily managed and updated.",
          heading2:"Getting Started With React JS",
          content4:"To get started with React JS, you will need to have some basic knowledge of HTML, CSS, and JavaScript. You will also need to install Node.js and npm (Node Package Manager) on your computer.",
          content5:"Once you have these prerequisites installed, you can create a new React project by using the create-react-app command:",
          code1:"npx create-react-app  my-app",
          code2:"cd my-app",
          code3:"npm start",
          content6:"This will create a new React project in a directory called my-app and start a development server. You can now open your browser and navigate to http://localhost:3000 to see your new React app in action.",
          slug:"react-learn",
          image:'https://res.cloudinary.com/practicaldev/image/fetch/s--goETGOXU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x3x5w638kkixi9s3h3vw.gif',
          color:""
      } ,
      {
        content1: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in a markup language.",
        title: "Learning CSS",
        content2: "In this blog post, we will explore the basics of CSS and how to get started with it.",
        heading1: "What is CSS?",
        content3: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in a markup language such as HTML. It allows developers to separate the presentation of a web page from its content.",
        heading2: "Getting Started with CSS",
        content4: "To get started with CSS, you will need to have some basic knowledge of HTML. You can write CSS code directly in your HTML files using the `style` tag or by linking to an external stylesheet.",
        content5: "Here is an example of how you might add some simple CSS code to an HTML file:",
        code1: "<!DOCTYPE html>",
        code2: "<html>",
        code3: "<head>",
        code4: "<title>My CSS Page</title>",
        code5: "<style>",
        code6: "body {",
        code7: "  font-family: Arial, sans-serif;",
        code8: "}",
        code9: "h1 {",
        code10: "  color: blue;",
        code11: "}",
        code12: "</style>",
        code13: "</head>",
        code14: "<body>",
        code15: "<h1>My CSS Page</h1>",
        code16: "</body>",
        code17: "</html>",
        content6: "In this example, we added a `style` element to the `head` section of the HTML file and included some CSS code that specifies the font family for the `body` element and the color for `h1` elements. When this HTML file is rendered in a web browser, the text inside the `h1` element will be displayed in blue and the font for the entire page will be set to Arial, sans-serif.",
        slug: "css-learn",
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
      } ,
      {
        content1: "JavaScript is a high-level, interpreted programming language that is commonly used for building web applications.",
        title: "Learning JavaScript",
        content2: "In this blog post, we will explore the basics of JavaScript and how to get started with it.",
        heading1: "What is JavaScript?",
        content3: "JavaScript is a high-level, interpreted programming language that is commonly used for building web applications. It allows developers to add interactivity and dynamic behavior to web pages.",
        heading2: "Getting Started with JavaScript",
        content4: "To get started with JavaScript, you will need to have some basic knowledge of HTML and CSS. You can write JavaScript code directly in your HTML files using the `script` tag.",
        content5: "Here is an example of how you might add some simple JavaScript code to an HTML file:",
        code1: "<!DOCTYPE html>",
        code2: "<html>",
        code3: "<head>",
        code4: "<title>My JavaScript Page</title>",
        code5: "</head>",
        code6: "<body>",
        code7: "<h1>My JavaScript Page</h1>",
        code8: "<button onclick=\"alert('Hello, World!')\">Click me!</button>",
        code9: "</body>",
        code10: "</html>",
        content6: "In this example, we added a `button` element to the page with an `onclick` attribute that specifies some JavaScript code to run when the button is clicked. When the user clicks the button, an alert box will be displayed with the message 'Hello, World!'.",
        slug: "javascript-learn",
        image: 'https://allvectorlogo.com/img/2016/04/js-logo.png'
      } ,
      

      {
        content1: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser.",
        title: "Learning HTML",
        content2: "In this blog post, we will explore the basics of HTML and how to get started with it.",
        heading1: "What is HTML?",
        content3: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It allows developers to structure and format content using a set of markup elements or tags.",
        heading2: "Getting Started with HTML",
        content4: "To get started with HTML, you don't need any prior knowledge or special software. You can write HTML code using any text editor and save it with the .html file extension.",
        content5: "Here is an example of a simple HTML file:",
        code1: "<!DOCTYPE html>",
        code2: "<html>",
        code3: "<head>",
        code4: "<title>My HTML Page</title>",
        code5: "</head>",
        code6: "<body>",
        code7: "<h1>My HTML Page</h1>",
        code8: "<p>This is some text on my HTML page.</p>",
        code9: "</body>",
        code10: "</html>",
        content6: "In this example, we created a simple HTML file that includes a `DOCTYPE` declaration, an `html` element, a `head` element with a `title` element inside it, and a `body` element with an `h1` and a `p` element inside it. When this HTML file is opened in a web browser, it will display a page with a title of 'My HTML Page' and some text on the page.",
        slug: "html-learn",
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
      } ,
      {

        
            content1: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side.",
            title: "Learning Node.js",
            content2: "In this blog post, we will explore the basics of Node.js and how to get started with it.",
            heading1: "What is Node.js?",
            content3: "Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It is commonly used for building back-end services and APIs.",
            heading2: "Getting Started with Node.js",
            content4: "To get started with Node.js, you will need to have some basic knowledge of JavaScript. You will also need to install Node.js on your computer.",
            content5: "Once you have Node.js installed, you can create a new Node.js project by creating a new directory and initializing it with npm:",
            code1: "mkdir my-node-app",
            code2: "cd my-node-app",
            code3: "npm init -y",
            content6: "This will create a new Node.js project in a directory called my-node-app and initialize it with a package.json file. You can now start writing your Node.js code in this directory.",
            slug: "node-learn",
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
          }

      
]

module.exports=blogs
