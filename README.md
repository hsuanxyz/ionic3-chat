# ionic3-chat
 ionic3 chat example

 ## Running
 * Clone this repository: `https://github.com/HsuanXyz/ionic3-chat.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install -g ionic`)
 * Run `ionic serve` in a terminal from the project root.

 ## App Preview
 <img src="https://github.com/HsuanXyz/hsuanxyz.github.io/blob/master/assets/ionic3-chat/ionic3-chat-v2.gif?raw=true" alt="Preview">

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
 │   ├── providers
 │   │   └── chat-service.ts                  * chat-service
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
 cordova CLI: 6.4.0
 Ionic Framework Version: 3.0.0
 Ionic CLI Version: 2.2.1
 Ionic App Lib Version: 2.2.0
 Ionic App Scripts Version: 1.2.2
 ios-deploy version: 1.9.1
 ios-sim version: 5.0.13
 OS: macOS Sierra
 Node Version: v6.9.2
 Xcode version: Xcode 8.3 Build version 8E162
 ```
