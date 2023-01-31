// FOR PYTHON
let questions_and_options1 = [
    {
    question : 'How do you write a simple "Hello World" statement in python? ',
    answers: [
        {
            text : 'output("Hello World")', 
                correct : false
            },
            {
                text : 'console.log("Hello World")', 
                correct : false
            },
            {
                text : 'System.out.println("Hello World")', 
                correct : false
            },
            {
                text : 'print("Hello World")', 
                correct : true
            }
        ]
    },
    {
        question : "What is the 'def' keyword for?",
        answers: [
            {
                text : 'For declaring a variable', 
                correct : false
            },
            {
                text : 'For declaring a new function', 
                correct : true
            },
            {
                text : 'For initializing a list of items', 
                correct : false
            },
            {
                text : 'For importing a module', 
                correct : false
            }
        ]
    },
    {
        question : 'How do we write a for loop in Python? ',
        answers: [
            {
                text : `for fruit for fruits:
                            print(fruit)`, 
                correct : false
            },
            {
                text : `for fruit = fruits:
                print(fruit)`, 
                correct : false
            },
            {
                text : `for fruit in fruits:
                print(fruit)`, 
                correct : true
            },
            {
                text : `for i = 0; i<=10; i++: 
                            print(i)`, 
                correct : false
            }
        ]
        },
        {
        question : 'How do you insert COMMENTS in Python code?',
        answers: [
                {
                    text : '#This is a comment', 
                    correct : true 
                },
                {
                    text : '//This is a comment', 
                    correct : false 
                },
                {
                    text : '/*This is a comment', 
                    correct : false
                },
                {
                    text : '!This is a comment', 
                    correct : false
                }
            ]
        },
        {
        question : 'Which one is NOT a legal variable name?',
        answers: [
                {
                    text : 'Myvar', 
                    correct : false
                },
                {
                    text : '_myvar', 
                    correct : true
                },
                {
                    text : 'my_var', 
                    correct : false
                },
                {
                    text : 'my-var', 
                    correct : false
                }
            ]
        },
        {
        question : 'What is the correct file extension for Python files?',
        answers: [
                {
                    text : '.python', 
                    correct : false
                },
                {
                    text : '.pyc', 
                    correct : false
                },
                {
                    text : '.pyt', 
                    correct : true
                },
                {
                    text : '.pyn', 
                    correct : false
                }
            ]
        },
        {
        question : 'What is the correct syntax to output the type of a variable or object in Python?',
        answers: [
                {
                    text : 'print(typeof(var)', 
                    correct : false
                },
                {
                    text : 'print(typeOf(x))', 
                    correct : false
                },
                {
                    text : 'print(type(x))', 
                    correct : true 
                },
                {
                    text : 'print(typeof x)', 
                    correct : false
                }
            ]
        },
        {
        question : `In Python, 'Word', is the same as "Word"`,
        answers: [
                {
                    text : 'false', 
                    correct : false
                },
                {
                    text : 'Maybe', 
                    correct : false
                },
                {
                    text : 'Not really', 
                    correct : false
                },
                {
                    text : 'true', 
                    correct : true
                }
            ]
        },
        {
        question : 'What is a correct syntax to return the second character in a string?',
        answers: [
                {
                    text : 'var = "Sentence".[1]', 
                    correct : false
                },
                {
                    text : 'var = "Sentence".[0,1]', 
                    correct : false
                },
                {
                    text : 'var = "Sentence"[1]', 
                    correct : true
                },
                {
                    text : 'var = slice("Sentence")[1]', 
                    correct : false
                }
            ]
        },
        {
        question : 'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
        answers: [
                {
                    text : 'strip()', 
                    correct : false
                },
                {
                    text : 'trim()', 
                    correct : true
                },
                {
                    text : 'ptrim()', 
                    correct : false
                },
                {
                    text : 'len()', 
                    correct : false
                }
            ]
        },
        {
        question : 'Which operator can be used to compare two values?',
        answers: [
                {
                    text : '===', 
                    correct : false
                },
                {
                    text : '<>', 
                    correct : false
                },
                {
                    text : '==', 
                    correct : true
                },
                {
                    text : '=', 
                    correct : false
                }
            ]
        },
        {
        question : 'Which of these collections defines a LIST?',
        answers: [
                {
                    text : '{"name": "Python", "paradigm": "Functional"}', 
                    correct : false
                },
                {
                    text : '["python", "java", "c++", "c"]', 
                    correct : true
                },
                {
                    text : '{"python", "java", "c++", "c"}', 
                    correct : false
                },
                {
                    text : '("python", "java", "c++", "c")', 
                    correct : false
                }
            ]
        },
        {
        question : 'Which of these collections defines a TUPLE?',
        answers: [
                {
                    text : '{"name": "Python", "paradigm": "Functional"}', 
                    correct : false
                },
                {
                    text : '["python", "java", "c++", "c"]', 
                    correct : false
                },
                {
                    text : '{"python", "java", "c++", "c"}', 
                    correct : false
                },
                {
                    text : '("python", "java", "c++", "c")', 
                    correct : true
                }
            ]
        },
        {
        question : 'Which of these collections defines a DICTIONARY?',
        answers: [
                {
                    text : '{"name": "Python", "paradigm": "Functional"}', 
                    correct : true
                },
                {
                    text : '["python", "java", "c++", "c"]', 
                    correct : false
                },
                {
                    text : '{"python", "java", "c++", "c"}', 
                    correct : false
                },
                {
                    text : '("python", "java", "c++", "c")', 
                    correct : false
                }
            ]
        }
]