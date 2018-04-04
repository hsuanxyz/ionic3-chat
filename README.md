# ionic3-chat
 ionic3 chat example

[DEMO](https://stackblitz.com/edit/ionic3-chat)

 ## Running
 * Clone this repository: `https://github.com/HsuanXyz/ionic3-chat.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install -g ionic`)
 * Run `ionic serve` in a terminal from the project root.

 ## App Preview
 <img src="https://github.com/HsuanXyz/hsuanxyz.github.io/blob/master/assets/ionic3-chat/chat.gif?raw=true" alt="Preview">

 ## File Structure
 ```
 .
 ├── LICENSE
 ├── README.md
 ├── config.xml
 ├── ionic.config.json
 ├── package.json
 ├── resources
 ├── src
 │   ├── index.html
 │   ├── app
 │   │   ├── app.component.ts
 │   │   ├── app.html
 │   │   ├── app.module.ts
 │   │   ├── app.scss
 │   │   └── main.ts
 │   ├── assets
 │   │   └── mock
 │   │       └── msg-list.json                 * mock json
 │   │   └── icon
 │   │       └── favicon.ico
 │   │   └── to-user.jpg
 │   │   └── user.jpg
 │   ├── components/emoji-picker               * emoji-picker component
 │   │   └── emoji-picker.html
 │   │   └── emoji-picker.module.ts
 │   │   └── emoji-picker.scss
 │   │   └── emoji-picker.ts
 │   ├── providers
 │   │   └── chat-service.ts                  * chat-service
 │   │   └── emoji.ts                         * emoji-provider
 │   ├── pipes
 │   │   └── relative-time.ts                 * relative time pipes
 │   ├── pages
 │   │   ├── home
 │   │   │   ├── home.html        
 │   │   │   ├── home.scss         
 │   │   │   └── home.ts           
 │   │   ├── chat                             * chat page
 │   │   │   ├── chat.html                    * chat template
 │   │   │   ├── chat.scss                    * chat stylesheet
 │   │   │   ├── chat.ts                      * chat code
 │   │   │   └── chat.module.ts               * chat module
 │   │   └── tabs
 │   │       ├── tabs.html
 │   │       └── tabs.ts
 │   ├── service-worker.js
 │   └── theme
 │       └── variables.scss
 ├── tsconfig.json
 └── tslint.json
 ```

 ## Environment
 ```
cli packages: 

    @ionic/cli-utils  : 1.12.0
    ionic (Ionic CLI) : 3.13.1

global packages:

    Cordova CLI : 7.0.1 

local packages:

    @ionic/app-scripts : 2.1.4
    Cordova Platforms  : android 6.0.0 browser 4.1.0 ios 4.1.1
    Ionic Framework    : ionic-angular 3.7.1

System:

    ios-deploy : 1.9.1 
    ios-sim    : 6.0.0 
    Node       : v6.9.2
    npm        : 5.4.2 
    OS         : macOS Sierra
    Xcode      : Xcode 9.0 Build version 9A235 


 ```
