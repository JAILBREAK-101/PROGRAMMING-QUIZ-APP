
// FOR JAVASCRIPT.
let questions_and_options = [
    {
    question : "What is the full meaning of AJAX",
    answers: [
            {
                text : "Asynchronous Javascript and XML", 
                correct : true
            },
            {
                text : "Ajavascript", 
                correct : false
            },
            {
                text : "Async JS ax", 
                correct : false
            },
            {
                text : "Asynchronous java and xml", 
                correct : false
            }
        ]
    },
    
    {
    question : "What is 1 + '1'? ",
    answers: [
            {
                text : "2", 
                correct : false
            },
            {
                text : "eleven", 
                correct : false
            },
            {
                text : "'11'", 
                correct : true
            },
            {
                text : "11", 
                correct : false
            }
        ]
    },

    // {
    //     question : "Inside which HTML element do we put the JavaScript?", 
    //     answers : [
    //         {
    //             text : "<scripting>",
    //             correct : false
    //         },
    //         {
    //             text : "<javascript>",
    //             correct : false
    //         },
    //         {
    //             text : "<script>",
    //             correct : true
    //         },
    //         {
    //             text : "<js>",
    //             correct : false
    //         }
    //     ]
    // }, 
    {
        question : `What is the correct JavaScript syntax to change the content of the HTML paragraph element below? 
        
        <p id="demo">Hello!!!</p>`, 
        answers : [
            {
                text : 'document.getElementById("demo").innerHTML = "Hello World"',
                correct : true
            },
            {
                text : '#demo.innerHTML = "HELLO WORLD!";',
                correct : false
            },
            {
                text : 'document.getElement("p").innerHTML = "Hello World";',
                correct : false
            },
            {
                text : 'document.getElementByName("p").innerHTML = "Hello World"',
                correct : false
            }
        ]
    }, 
    {
        question : "Where is the correct place to insert a JavaScript?", 
        answers : [
            {
                text : "the <head> section",
                correct : false
            },
            {
                text : "Both the <head> and <body> section are correct.",
                correct : true
            },
            {
                text : "the <body> section",
                correct : false
            },
            {
                text : "None of the above",
                correct : false
            }
        ]
    }, 
    {
        question : 'What is the correct syntax for declariing a class template for declaring an object?', 
        answers : [
            {
                text : `class MyClass { 
                    constructor (value1, value2) {
                    // Code goes in here
                }
            }`,
                correct : true
            },
            {
                text : `class { 
                    constructor Class (value1, value2) {
                    // Code goes in here
                }
            }`,
                correct : false
            },
            {
                text : `function MyClass { 
                    object (value1, value2) {
                    // Code goes in here
                }
            }`,
                correct : false
            },
            {
                text : `class MyClass {
                    function () {
                        object1 {
                            // Code goes in here
                        }
                    } 
            }`,
                correct : false
            }
        ]
    }, 
    {
        question : 'How do you write "Javascript is fun" in an alert box?', 
        answers : [
            {
                text : 'msgBox("Javascript is fun");',
                correct : false
            },
            {
                text : 'msg("Javascript is fun");',
                correct : false
            },
            {
                text : 'alertBox("Javascript is fun");',
                correct : false
            },
            {
                text : 'alert("Javascript is fun");',
                correct : true
            }
        ]
    }, 
    {
        question : "How do you create a function in JavaScript?", 
        answers : [
            {
                text : "function = myFunction()",
                correct : false
            },
            {
                text : "function=myFunction",
                correct : false
            },
            {
                text : "function myFunction()",
                correct : true
            },
            {
                text : "function:myFunction()",
                correct : false
            }
        ]
    }, 
    {
        question : 'How do you write an IF statement for executing some code if "i" is NOT equal to 7?', 
        answers : [
            {
                text : "if(i <> 7)",
                correct : false
            },
            {
                text : "if(i != 7)",
                correct : true
            },
            {
                text : "if i =! 7 then",
                correct : false
            },
            {
                text : "if i <> 7",
                correct : false
            }
        ]
    }, 
    {
        question : "How does a WHILE loop start?", 
        answers : [
            {
                text : "while(i <= 10; i++>)",
                correct : true
            },
            {
                text : "while(i <= 10)",
                correct : false
            },
            {
                text : "while(i++, i<=10>)",
                correct : false
            },
            {
                text : "while(i = 10 to 10)",
                correct : false
            }
        ]
    }, 
    {
        question : "How do you round the number 7.67, to the nearest integer?", 
        answers : [
            {
                text : "Roundup(7.67)",
                correct : false
            },
            {
                text : "rnd(7.67)",
                correct : false
            },
            {
                text : "Math.round(7.67)",
                correct : true
            },
            {
                text : "Math.rnd(7.67)",
                correct : false
            }
        ]
    }, 
    {
        question : "How do you insert a comment that has more than one line?", 
        answers : [
            {
                text : "<--This is a multi-line comment-->",
                correct : false
            },
            {
                text : "/* This is a multi-line comment*/",
                correct : true
            },
            {
                text : "// This is a multi-line comment//",
                correct : false
            },
            {
                text : "# This is a multi-line comment",
                correct : false
            }
        ]
    }, 
    {
        question : 'What is the correct JavaScript syntax for opening a new window called "new_window" ?', 
        answers : [
            {
                text : 'new_window = window.endorse("http://www.google.com)',
                correct : false
            },
            {
                text : 'new_window = window.new("http://www.google.com)',
                correct : false
            },
            {
                text : 'new_window = window.open("http://www.wikipedia.com)',
                correct : true
            },
            {
                text : 'new_window = window.init("http://www.google.com)',
                correct : false
            }
        ]
    }, 
    {
        question : "How can you detect the client's browser name?", 
        answers : [
            {
                text : "navigator.appName",
                correct : true
            },
            {
                text : "browser.name",
                correct : false
            },
            {
                text : "clientName",
                correct : false
            },
            {
                text : "client.navName",
                correct : false
            }
        ]
    }, 
    {
        question : 'What is the result of "5" == 5?', 
        answers : [
            {
                text : "true",
                correct : true
            },
            {
                text : "undefined",
                correct : false
            },
            {
                text : "false",
                correct : false
            },
            {
                text : "null",
                correct : false
            }
        ]
    }, 
    {
        question : "How do you declare a JavaScript variable?", 
        answers : [
            {
                text : "cons freshVariable;",
                correct : false
            },
            {
                text : "v freshVariable;",
                correct : false
            },
            {
                text : "declare freshVariable;",
                correct : false
            },
            {
                text : "const freshVariable;",
                correct : true
            }
        ]
    }, 
    {
        question : 'How do you call a function named "new_function"?', 
        answers : [
            {
                text : "call new_function()",
                correct : false
            },
            {
                text : "new_function()",
                correct : true
            },
            {
                text : "function newFunction call it()",
                correct : false
            },
            {
                text : "call function new_function()",
                correct : false
            }
        ]
    }, 
    // this is dynamic
]