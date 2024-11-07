const html = [
  {
    question: "Which HTML element is used to display a scalar measurement within a known range?",
    options: ["<output>", "<meter>", "<progress>", "<data>"],
    answer: "<meter>",
  },
  {
    question: "What is the purpose of the <fieldset> element in HTML?",
    options: [
      "To define a caption for a table",
      "To group related elements in a form",
      "To create a footer for a form",
      "To define a section in a document"
    ],
    answer: "To group related elements in a form",
  },
  {
    question: "Which attribute can you use to specify an image for the browser's favicon?",
    options: ["alt", "rel", "src", "icon"],
    answer: "rel",
  },
  {
    question: "What is the purpose of the <aside> element in HTML5?",
    options: [
      "To represent a section with related content",
      "To define a header for a document",
      "To specify navigation links",
      "To create a sidebar with tangential content"
    ],
    answer: "To create a sidebar with tangential content",
  },
  {
    question: "How do you specify an image as the bullet in an unordered list?",
    options: ["type='image'", "list-style-image", "bullet-image", "marker-image"],
    answer: "list-style-image",
  },
  {
    question: "Which HTML element is used to embed audio files in a webpage?",
    options: ["<video>", "<source>", "<embed>", "<audio>"],
    answer: "<audio>",
  },
  {
    question: "What is the function of the <datalist> element in HTML5?",
    options: [
      "To specify options for a drop-down list",
      "To create a list of data points",
      "To group options in a form",
      "To provide predefined options for input"
    ],
    answer: "To provide predefined options for input",
  },
  {
    question: "How do you mark text as emphasized in HTML?",
    options: ["<b>", "<i>", "<em>", "<mark>"],
    answer: "<em>",
  },
  {
    question: "Which attribute specifies the URL of an external script file in HTML?",
    options: ["href", "src", "link", "url"],
    answer: "src",
  },
  {
    question: "What does the 'defer' attribute do when added to a <script> tag?",
    options: [
      "Loads the script immediately",
      "Delays script execution until the page loads",
      "Executes the script when called",
      "Loads the script asynchronously"
    ],
    answer: "Delays script execution until the page loads",
  },
  {
    question: "Which element is used for a clickable button in HTML?",
    options: ["<button>", "<input type='link'>", "<submit>", "<a href='#'>"],
    answer: "<button>",
  },
  {
    question: "What does the <kbd> element represent in HTML?",
    options: [
      "Keyboard input",
      "Bold text",
      "Clickable link",
      "An audio shortcut"
    ],
    answer: "Keyboard input",
  },
  {
    question: "How do you specify that an input field should accept email addresses in HTML5?",
    options: ["type='text'", "type='url'", "type='email'", "type='address'"],
    answer: "type='email'",
  },
  {
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<dropdown>", "<datalist>", "<select>", "<option>"],
    answer: "<select>",
  },
  {
    question: "What attribute can you use to allow multiple file uploads in an input field?",
    options: ["multiple", "files", "upload", "many"],
    answer: "multiple",
  },
  {
    question: "Which tag is used to define a client-side image map?",
    options: ["<map>", "<imgmap>", "<imagemap>", "<img>"],
    answer: "<map>",
  },
  {
    question: "How do you specify a default option in a dropdown list?",
    options: ["<default>", "<selected>", "<option default>", "<option selected>"],
    answer: "<option selected>",
  },
  {
    question: "What attribute would you use to display text in a different language in HTML?",
    options: ["lang", "dir", "translate", "language"],
    answer: "lang",
  },
  {
    question: "How do you create an anchor link that opens in a new tab?",
    options: [
      "target='_self'",
      "target='_new'",
      "target='_tab'",
      "target='_blank'"
    ],
    answer: "target='_blank'",
  },
  {
    question: "What attribute is used with the <form> tag to specify where to send form data?",
    options: ["action", "method", "target", "submit"],
    answer: "action",
  }
];

const css = [
  {
    question: "Which CSS property controls the spacing between lines of text?",
    options: ["line-height", "letter-spacing", "text-spacing", "word-spacing"],
    answer: "line-height",
  },
  {
    question: "How do you center an element horizontally using flexbox?",
    options: [
      "align-items: center",
      "justify-content: center",
      "align-content: center",
      "text-align: center"
    ],
    answer: "justify-content: center",
  },
  {
    question: "What is the CSS property to create rounded corners?",
    options: ["border", "border-radius", "corner-radius", "border-style"],
    answer: "border-radius",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-family", "font-weight", "font-variant"],
    answer: "font-family",
  },
  {
    question: "How do you apply a shadow to a text in CSS?",
    options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    answer: "text-shadow",
  },
  {
    question: "What does the z-index property control in CSS?",
    options: [
      "Font size",
      "Color intensity",
      "Vertical positioning",
      "Stacking order of elements"
    ],
    answer: "Stacking order of elements",
  },
  {
    question: "Which CSS property is used to make an element invisible but still take up space?",
    options: ["display: none", "opacity: 0", "visibility: hidden", "opacity: 1"],
    answer: "visibility: hidden",
  },
  {
    question: "How can you apply a specific style to the first letter of a paragraph?",
    options: [":first-letter", ":first-word", ":first-line", ":before"],
    answer: ":first-letter",
  },
  {
    question: "What does the 'display: inline-block' property do?",
    options: [
      "Displays elements on the same line but as block elements",
      "Displays elements as blocks with line breaks",
      "Displays elements as inline text only",
      "Displays elements stacked vertically"
    ],
    answer: "Displays elements on the same line but as block elements",
  },
  {
    question: "How do you create a responsive layout using CSS?",
    options: [
      "Using float properties",
      "Using margin and padding",
      "Using media queries",
      "Using z-index"
    ],
    answer: "Using media queries",
  },
  {
    question: "Which CSS property is used to control the space between an element's border and content?",
    options: ["padding", "margin", "border-spacing", "spacing"],
    answer: "padding",
  },
  {
    question: "How can you make a font bold in CSS?",
    options: ["font-weight: bold", "font-size: large", "font-style: bold", "text-weight: bold"],
    answer: "font-weight: bold",
  },
  {
    question: "What is the function of the 'position: absolute' property?",
    options: [
      "Positions an element based on the document flow",
      "Positions an element relative to its closest positioned ancestor",
      "Positions an element based on viewport",
      "Fixes the position relative to the window"
    ],
    answer: "Positions an element relative to its closest positioned ancestor",
  },
  {
    question: "How do you set a background image to be fixed, so it doesn't scroll with the page?",
    options: ["background-repeat", "background-attachment", "background-fixed", "background-position"],
    answer: "background-attachment",
  },
  {
    question: "What property would you use to change the text color of an element?",
    options: ["color", "text-color", "font-color", "text-style"],
    answer: "color",
  },
  {
    question: "Which CSS property would you use to change the size of an image without distorting it?",
    options: ["width", "height", "object-fit", "background-size"],
    answer: "object-fit",
  },
  {
    question: "How do you create space between two HTML elements?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "margin",
  },
  {
    question: "Which pseudo-class is used to select an element when the user hovers over it?",
    options: [":hover", ":focus", ":active", ":visited"],
    answer: ":hover",
  },
  {
    question: "What property is used to specify the stack order of elements in CSS?",
    options: ["order", "position", "z-index", "stack"],
    answer: "z-index",
  },
  {
    question: "How do you set the background color of an element in CSS?",
    options: ["background", "color", "background-color", "bgcolor"],
    answer: "background-color",
  }
];

const js = [
  {
    question: "What is the correct syntax to print a message in the console?",
    options: [
      "console.log('Hello World')",
      "print('Hello World')",
      "console.print('Hello World')",
      "log.console('Hello World')"
    ],
    answer: "console.log('Hello World')",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "let", "float"],
    answer: "var",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "function = myFunction() {}",
      "def myFunction() {}",
      "function: myFunction() {}"
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "!="],
    answer: "=",
  },
  {
    question: "What will 'typeof' return for a null value?",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Which built-in method can be used to convert a string to lowercase?",
    options: ["toLower()", "changeCase()", "toLowerCase()", "makeLowerCase()"],
    answer: "toLowerCase()",
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "** This is a comment"
    ],
    answer: "// This is a comment",
  },
  {
    question: "What is the result of 5 + '5' in JavaScript?",
    options: ["10", "'10'", "55", "'55'"],
    answer: "'55'",
  },
  {
    question: "How do you round a number to the nearest integer in JavaScript?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.random()"],
    answer: "Math.round()",
  },
  {
    question: "Which method can be used to combine two arrays in JavaScript?",
    options: ["concat()", "merge()", "push()", "combine()"],
    answer: "concat()",
  },
  {
    question: "What will the code 'Boolean(0)' return?",
    options: ["true", "false", "0", "undefined"],
    answer: "false",
  },
  {
    question: "How can you find the length of a string in JavaScript?",
    options: ["'string'.size", "'string'.length", "'string'.count", "'string'.index"],
    answer: "'string'.length",
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: ["No Argument Null", "Not a Number", "Non Active Node", "Number and Null"],
    answer: "Not a Number",
  },
  {
    question: "Which array method removes the last element from an array?",
    options: ["pop()", "shift()", "remove()", "last()"],
    answer: "pop()",
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "'22'", "NaN", "'4'"],
    answer: "'22'",
  },
  {
    question: "How do you declare a constant variable in JavaScript?",
    options: ["var", "let", "constant", "const"],
    answer: "const",
  },
  {
    question: "Which method can you use to remove whitespace from both ends of a string?",
    options: ["strip()", "cut()", "trim()", "slice()"],
    answer: "trim()",
  },
  {
    question: "How can you add a new element to the end of an array?",
    options: ["push()", "pop()", "add()", "insert()"],
    answer: "push()",
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      "To output the function result to the console",
      "To end the function execution and return a value",
      "To repeat the function",
      "To create a new variable"
    ],
    answer: "To end the function execution and return a value",
  },
  {
    question: "What is the result of 3 === '3' in JavaScript?",
    options: ["true", "false", "undefined", "null"],
    answer: "false",
  }
];


const react = [
  {
    question: "What is a React component?",
    options: [
      "A part of the React library",
      "A function or class that returns HTML using JSX",
      "A method used to fetch data",
      "A CSS style in React"
    ],
    answer: "A function or class that returns HTML using JSX",
  },
  {
    question: "What is JSX in React?",
    options: [
      "JavaScript Extension",
      "A syntax extension that allows writing HTML in JavaScript",
      "A type of JavaScript function",
      "A React method to fetch data"
    ],
    answer: "A syntax extension that allows writing HTML in JavaScript",
  },
  {
    question: "Which hook would you use to manage state in a functional component?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useState",
  },
  {
    question: "How can you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using events", "Using context"],
    answer: "Using props",
  },
  {
    question: "Which command is used to create a new React application?",
    options: [
      "npx create-react-app my-app",
      "npm init react-app my-app",
      "react create my-app",
      "npm install react my-app"
    ],
    answer: "npx create-react-app my-app",
  },
  {
    question: "What does the useEffect hook do?",
    options: [
      "It handles events in a component",
      "It lets you perform side effects in functional components",
      "It is a replacement for class components",
      "It manages state in functional components"
    ],
    answer: "It lets you perform side effects in functional components",
  },
  {
    question: "What is the purpose of the key prop in lists?",
    options: [
      "To provide unique identifiers for list items",
      "To style list items",
      "To identify which items are clickable",
      "To bind data to list items"
    ],
    answer: "To provide unique identifiers for list items",
  },
  {
    question: "What is the default state management tool for React?",
    options: ["Redux", "Context API", "Flux", "useState"],
    answer: "useState",
  },
  {
    question: "How do you import a CSS file in a React component?",
    options: [
      "import './style.css'",
      "import style from './style.css'",
      "require('./style.css')",
      "link href='./style.css'"
    ],
    answer: "import './style.css'",
  },
  {
    question: "What will happen if you try to update the state directly in React?",
    options: [
      "The state will update immediately",
      "React will throw an error",
      "The component will not re-render",
      "The browser will refresh"
    ],
    answer: "The component will not re-render",
  },
  {
    question: "Which hook is used to access the value of a DOM element in React?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    answer: "useRef",
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "To style components",
      "To fetch data from APIs",
      "To handle routing/navigation in a React app",
      "To manage global state"
    ],
    answer: "To handle routing/navigation in a React app",
  },
  {
    question: "How can you optimize a React component to prevent unnecessary re-renders?",
    options: [
      "Using componentDidUpdate",
      "Using React.memo",
      "Using useEffect",
      "Using useCallback"
    ],
    answer: "Using React.memo",
  },
  {
    question: "What does lifting state up mean in React?",
    options: [
      "Moving state to a higher component so it can be shared",
      "Removing state from a component",
      "Storing state in a database",
      "Using state in functional components only"
    ],
    answer: "Moving state to a higher component so it can be shared",
  },
  {
    question: "What is the context API in React?",
    options: [
      "A way to manage component lifecycle",
      "A solution for prop drilling",
      "A way to fetch data in components",
      "A replacement for useState"
    ],
    answer: "A solution for prop drilling",
  },
  {
    question: "Which hook would you use to memoize a function in React?",
    options: ["useState", "useMemo", "useCallback", "useEffect"],
    answer: "useCallback",
  },
  {
    question: "How do you create a conditional rendering in React?",
    options: [
      "Using if statements in JSX",
      "Using ternary operators or && in JSX",
      "Using switch cases in JSX",
      "Using return statements only"
    ],
    answer: "Using ternary operators or && in JSX",
  },
  {
    question: "How can you access props in a class component?",
    options: [
      "this.propName",
      "props.propName",
      "this.props.propName",
      "props(this).propName"
    ],
    answer: "this.props.propName",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A duplicate of the real DOM that syncs with it periodically",
      "A lightweight copy of the real DOM used for faster updates",
      "An outdated concept in React",
      "A plugin for data management"
    ],
    answer: "A lightweight copy of the real DOM used for faster updates",
  },
  {
    question: "Which lifecycle method is called after the component is rendered in the DOM?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "constructor"
    ],
    answer: "componentDidMount",
  }
];


export {html,css,js,react};
