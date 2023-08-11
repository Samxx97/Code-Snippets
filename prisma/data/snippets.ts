const snippets: {
    name: string
    description: string
    code: string 
    language: string

}[] = [
   {
        name: "Display Videos",
        description: "React app for displaying videos with count",
        code: `function VideoList({ videos, emptyHeading }) {
            const count = videos.length;
            let heading = emptyHeading;
            if (count > 0) {
              const noun = count > 1 ? 'Videos' : 'Video';
              heading = count + ' ' + noun;
            }
            return (
              <section>
                <h2>{heading}</h2>
                {videos.map(video =>
                  <Video key={video.id} video={video} />
                )}
              </section>
            );
          }`,
        language: "javascript"
    }, {
        name: "React Hello world",
        description: "React app for Hello world",
        code: `import React from 'react';
        const MyComponent = () => {
            return (⏎
                <main>Hello world</main>⏎
            );
        };
        export default MyComponent;`,
        language: "javascript"
    }, {
        name: "Object oriented",
        description: "object oriented snippet code",
        code: `class Person {
            public Person(int e) {
            this.e = e;
            }
            }`,
        language: "java"
    }, {
        name: "Encryption Base64",
        description: "a snippet showing encryption of messages with base64",
        code: `import base64

        def base64(text):
            if isinstance(text, str):
                text = text.encode('utf-8')
            encrypted_bytes = base64.b64encode(text)
            encrypted_text = encrypted_bytes.decode('utf-8')
            return encrypted_text
        
        input = "Type this if you like trans males."
        message = base64(input)
        print("Encrypted message:", message)`,
        language: "python"
    }, {
        name: "Object oriented",
        description: "object oriented snippet code in php",
        code: `class Person
        {
            /**
             * @var string
             */
            public $name;
        
            public function __construct(string $name)
            {
                $this->name = $name;
            }
        
            public function sayHello()
            {
                echo "Hello, my name is {$this->name}.";
            }
        }
        
        $person = new Person('John Doe');
        $person->sayHello();`,
        language: "php"
    }, {
        name: "Interfaces & Types",
        description: "Interfaces & Types in typescript",
        code: `interface MyInterface {
            id: number;
            name: string;
            properties: string[];
          }
          
          type MyShortType = Pick<MyInterface, 'name' | 'id'>;`,
        language: "typescript"
    }, {
        name: "Loops in java",
        description: "code showing inner and outer loops",
        code: `// Outer loop
        for (int i = 1; i <= 2; i++) {
          System.out.println("Outer: " + i); // Executes 2 times
          
          // Inner loop
          for (int j = 1; j <= 3; j++) {
            System.out.println(" Inner: " + j); // Executes 6 times (2 * 3)
          }
        }`,
        language: "java"
    }, {
        name: "Tax computation",
        description: "calculating taxes in india",
        code: `def tax_india_2019(income: float) -> float:
        if income < 2_50_000:
            return 0
        elif income < 5_00_000:
            return income * 0.05
        elif income < 10_00_000:
            return income * 0.2
        
        return income * 0.3`,
        language: "python"
    },
]

export default snippets;