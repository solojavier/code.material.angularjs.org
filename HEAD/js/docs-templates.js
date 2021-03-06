angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demo.tmpl.html',
    '<docs-demo\n' +
    '    ng-repeat="demo in demos"\n' +
    '    demo-id="{{demo.id}}"\n' +
    '    demo-title="{{demo.label}}"\n' +
    '    demo-module="{{demo.ngModule.module}}">\n' +
    '  <demo-file\n' +
    '      ng-repeat="file in demo.$files"\n' +
    '      name="{{file.name}}"\n' +
    '      contents="file.httpPromise"></demo-file>\n' +
    '</docs-demo>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/docs-demo.tmpl.html',
    '<div class="doc-demo-content doc-content">\n' +
    '  <div flex layout="column" style="z-index:1">\n' +
    '\n' +
    '    <div class="doc-description" ng-bind-html="demoCtrl.demoDescription.contents | toHtml"></div>\n' +
    '\n' +
    '    <div ng-transclude></div>\n' +
    '\n' +
    '    <section class="demo-container md-whiteframe-z1"\n' +
    '      ng-class="{\'show-source\': demoCtrl.$showSource}" >\n' +
    '\n' +
    '      <md-toolbar class="demo-toolbar md-primary">\n' +
    '        <div class="md-toolbar-tools">\n' +
    '          <h3>{{demoCtrl.demoTitle}}</h3>\n' +
    '          <span flex></span>\n' +
    '          <md-button\n' +
    '            class="md-icon-button"\n' +
    '            aria-label="View Source"\n' +
    '            ng-class="{ active: demoCtrl.$showSource }"\n' +
    '            ng-click="demoCtrl.$showSource = !demoCtrl.$showSource">\n' +
    '              <md-tooltip md-autohide>View Source</md-tooltip>\n' +
    '              <md-icon md-svg-src="img/icons/ic_code_24px.svg"></md-icon>\n' +
    '          </md-button>\n' +
    '          <md-button\n' +
    '              ng-hide="{{exampleNotEditable}}"\n' +
    '              hide-sm\n' +
    '              ng-click="demoCtrl.editOnCodepen()"\n' +
    '              aria-label="Edit on CodePen"\n' +
    '              class="md-icon-button">\n' +
    '            <md-tooltip md-autohide>Edit on CodePen</md-tooltip>\n' +
    '            <md-icon md-svg-src="img/icons/codepen-logo.svg"></md-icon>\n' +
    '          </md-button>\n' +
    '        </div>\n' +
    '      </md-toolbar>\n' +
    '\n' +
    '      <!-- Source views -->\n' +
    '      <md-tabs class="demo-source-tabs md-primary" ng-show="demoCtrl.$showSource" style="min-height: 0;">\n' +
    '        <md-tab ng-repeat="file in demoCtrl.orderedFiles" label="{{file.name}}">\n' +
    '          <md-content md-scroll-y class="demo-source-container">\n' +
    '            <hljs class="no-header" code="file.contentsPromise" lang="{{file.fileType}}" should-interpolate="demoCtrl.interpolateCode">\n' +
    '            </hljs>\n' +
    '          </md-content>\n' +
    '        </md-tab>\n' +
    '      </md-tabs>\n' +
    '\n' +
    '      <!-- Live Demos -->\n' +
    '      <demo-include files="demoCtrl.files" module="demoCtrl.demoModule" class="{{demoCtrl.demoId}}">\n' +
    '      </demo-include>\n' +
    '    </section>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/getting-started.tmpl.html',
    '<div ng-controller="GuideCtrl" class="doc-content">\n' +
    '  <md-content>\n' +
    '    <p><em>New to Angular? Before getting into Angular Material, it might be helpful to:</em>\n' +
    '    <ul>\n' +
    '      <li>watch the videos about <a href="https://egghead.io/articles/new-to-angularjs-start-learning-here" target="_blank"\n' +
    '               title="Link opens in a new window">Angular.js framework</a></li>\n' +
    '      <li>\n' +
    '        read the\n' +
    '          <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank"\n' +
    '                 title="Link opens in a new window">Material Design </a> specifications for components, animations, styles, and layouts.\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <p></p>\n' +
    '    <h2>How do I start with Angular Material?</h2>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li>Visit the <a href="http://codepen.io/team/AngularMaterial/"\n' +
    '             target="_blank"\n' +
    '             title="Link opens in a new window">CodePen Community for Angular Material</a></li>\n' +
    '\n' +
    '      <li><a href="https://github.com/angular/material-start/tree/es5-tutorial" target="_blank"\n' +
    '                   title="Link opens in a new window">Learn with Material-Start: 8-step Tutorial (es5)</a></li>\n' +
    '      <li><a href="https://github.com/angular/material-start/tree/master" target="_blank"\n' +
    '                         title="Link opens in a new window">Learn with Material-Start: Completed (es5)</a></li>\n' +
    '      <li><a href="https://github.com/angular/material-start/tree/es6" target="_blank"\n' +
    '                               title="Link opens in a new window">Learn with Material-Start: Completed (es6)</a></li>\n' +
    '      <li style="font-weight: 400;color: #106CC8;"><a href="http://codepen.io/team/AngularMaterial/pen/RrbXyW" target="_blank">Start with a blank CodePen Material Application</a></li>\n' +
    '      <li style="margin-bottom: 30px;"><a href="https://github.com/angular/material-start" target="_blank"\n' +
    '             title="Link opens in a new window">Use the Github Starter Project</a></li>\n' +
    '\n' +
    '      <li style="font-weight: 400;color: #106CC8;">Use \'Edit on CodePen\' button on any of our Demos<br/>\n' +
    '        <img src="https://cloud.githubusercontent.com/assets/210413/11568997/ed86795a-99b4-11e5-898e-1da172be80da.png" style="width:75%;margin: 10px 30px 0 0">\n' +
    '      </li>\n' +
    '\n' +
    '\n' +
    '    </ul>\n' +
    '\n' +
    '    <p></p>\n' +
    '    <h3>Build a Material Application (blank shell)</h3>\n' +
    '\n' +
    '    See this example application on CodePen that loads\n' +
    '    the Angular Material library from the Google CDN:\n' +
    '\n' +
    '    <p></p>\n' +
    '\n' +
    '    <iframe height=\'777\' scrolling=\'no\'\n' +
    '            src=\'//codepen.io/team/AngularMaterial/embed/RrbXyW/?height=777&theme-id=21180&default-tab=html\'\n' +
    '            frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a\n' +
    '        href=\'http://codepen.io/team/AngularMaterial/pen/RrbXyW/\'>Angular Material - Blank Starter</a> by Angular\n' +
    '      Material (<a href=\'http://codepen.io/AngularMaterial\'>@AngularMaterial</a>) on <a\n' +
    '          href=\'http://codepen.io\'>CodePen</a>.\n' +
    '    </iframe>\n' +
    '\n' +
    '\n' +
    '    <p>Now just your add your Angular Material components and other HTML content to your Blank starter app.</p>\n' +
    '\n' +
    '    <br/>\n' +
    '\n' +
    '        <hr>\n' +
    '\n' +
    '        <h3>Our CodePen Community</h3>\n' +
    '    <p>\n' +
    '      You can also visit our <a href="http://codepen.io/team/AngularMaterial/" target="_blank"\n' +
    '                     title="Link opens in a new window">CodePen Community</a> to explore more samples and ideas.\n' +
    '    </p>\n' +
    '      <div layout-align="center" style="width: 100%">\n' +
    '      <a href="http://codepen.io/collection/XExqGz/" target="_blank"\n' +
    '                     title="Link opens in a new window" style="text-decoration:none; border: 0 none;">\n' +
    '      <img  src="https://cloud.githubusercontent.com/assets/210413/11613879/544f0b1e-9bf6-11e5-9923-27dd0d891bfd.png" style="text-decoration:none; border: 0 none;width: 100%">\n' +
    '      </a>\n' +
    '      </div>\n' +
    '\n' +
    '\n' +
    '    <br/><br/>\n' +
    '    <hr>\n' +
    '\n' +
    '    <h3>Installing the Angular Material Libraries</h3>\n' +
    '\n' +
    '    <br/>\n' +
    '    You can install the Angular Material library (and its dependent libraries) in your local project using either\n' +
    '    <a href="https://github.com/angular/bower-material/#installing-angular-material">NPM, JSPM, or Bower</a>.\n' +
    '\n' +
    '    <p>\n' +
    '      Angular Material also integrates with some additional, optional libraries which you may elect to include:\n' +
    '    </p>\n' +
    '\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li>\n' +
    '        <a href="https://docs.angularjs.org/api/ngMessages">ngMessages</a>\n' +
    '        - Provides a consistent mechanism for displaying form errors and other messages.\n' +
    '      </li>\n' +
    '      <li>\n' +
    '        <a href="https://docs.angularjs.org/api/ngSanitize">ngSanitize</a>\n' +
    '        - The ngSanitize module provides functionality to sanitize HTML content in Material components.\n' +
    '      </li>\n' +
    '\n' +
    '      <li>\n' +
    '        <a href="https://docs.angularjs.org/api/ngRoute">ngRoute</a>\n' +
    '        - Provides a clean routing system for your application.\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <hr>\n' +
    '\n' +
    '    <h3>Unsupported Integrations</h3>\n' +
    '    <p>\n' +
    '      Angular Material v1.0 has known integration issues with the following libraries:\n' +
    '    </p>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li>\n' +
    '        <a href="https://docs.angularjs.org/api/ngTouch">ngTouch</a>\n' +
    '        - ngMaterial conflicts with ngTouch for click, tap, and swipe support on touch-enabled devices.\n' +
    '      </li>\n' +
    '\n' +
    '      <li>\n' +
    '        <a href="http://ionicframework.com/">Ionic</a>\n' +
    '        - Open-source SDK for developing hybrid mobile apps with Web technologies has touch support\n' +
    '        that interferes with ngMaterial\'s mobile gesture features.\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2>Contributing to Angular Material</h2>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li>Please read our <a href="https://github.com/angular/material#contributing">contributor guidelines</a>.</li>\n' +
    '      <li>To contribute, fork our GitHub <a href="https://github.com/angular/material">repository</a>.</li>\n' +
    '      <li>For problems,\n' +
    '          <a href="https://github.com/angular/material/issues?q=is%3Aissue+is%3Aopen" target="_blank">\n' +
    '              search the GitHub Issues\n' +
    '          </a> and/or\n' +
    '          <a href="https://github.com/angular/material/issues/new" target="_blank">\n' +
    '              create a New Issue\n' +
    '          </a>.\n' +
    '      </li>\n' +
    '      <li>For questions,\n' +
    '          <a href="https://groups.google.com/forum/#!forum/ngmaterial" target="_blank">\n' +
    '              search the Forum\n' +
    '          </a> and/or post a new question.\n' +
    '      </li>\n' +
    '      <li>\n' +
    '        Join the\n' +
    '        <a href="https://gitter.im/angular/material" target="_blank">\n' +
    '          Gitter Chat\n' +
    '        </a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/home.tmpl.html',
    '<div ng-controller="HomeCtrl" class="doc-content">\n' +
    '  <md-content>\n' +
    '    <h2 class="md-headline" style="margin-top: 0;">What is Angular Material?</h2>\n' +
    '    <p>\n' +
    '      For developers using AngularJS, Angular Material is both a UI Component framework and a reference implementation of Google\'s\n' +
    '      Material Design Specification. This project provides a set of reusable, well-tested, and\n' +
    '      accessible UI components based on Material Design.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="50" flex-gt-md="25" ng-repeat="(index, link) in [\n' +
    '        { href: \'./getting-started\', icon: \'school\', text: \'Getting Started\' },\n' +
    '        { href: \'./demo\', icon: \'play_circle_fill\', text: \'Demos\' },\n' +
    '        { href: \'./CSS/typography\', icon: \'build\', text: \'Customization\' },\n' +
    '        { href: \'./api\', icon: \'code\', text: \'API Reference\' }\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            ng-href="{{link.href}}"\n' +
    '            aria-label="{{link.text}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.text}}\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2 class="md-headline">What about Angular 2?</h2>\n' +
    '    <p>\n' +
    '      Angular Material recently released Version 1 which we consider to be stable and ready for\n' +
    '      production use. Developers should note that Angular Material v1 works only with Angular 1.x.\n' +
    '    </p>\n' +
    '    <ul>\n' +
    '      <li>Current Angular Material v1.x development efforts are focused on bug fixes and minor improvements.</li>\n' +
    '      <li>Angular Material v2 development is also in-progress at the <a href="https://github.com/angular/material2">angular/material2</a> GitHub repository.</li>\n' +
    '    </ul>\n' +
    '    <p>\n' +
    '      Please refer to our changelog for up-to-date listings of all v1.x improvements and breaking changes.\n' +
    '    </p>\n' +
    '     <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="100" flex-gt-xs="50" ng-repeat="(index, link) in [\n' +
    '        {\n' +
    '          href: \'https://github.com/angular/material/blob/master/CHANGELOG.md\',\n' +
    '          icon: \'access_time\',\n' +
    '          text: \'Changelog\'\n' +
    '        }\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            ng-href="{{link.href}}"\n' +
    '            aria-label="{{link.text}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.text}}<br/>\n' +
    '          <div style="text-transform: none;margin-top:-15px;font-size:1.0em;">Angular Material v1.x </div>\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2 class="md-headline">Training Videos:</h2>\n' +
    '    <p>\n' +
    '      Here are some video courses that will help jump start your development with Angular Material.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="100" flex-gt-xs="50" ng-repeat="(index, link) in [\n' +
    '        { href: \'https://egghead.io/series/angular-material-introduction\', icon: \'ondemand_video\', text: \'Introduction to Angular Material\', site : \'EggHead\', access : \'free\'},\n' +
    '        { href: \'https://app.pluralsight.com/player?author=ajden-towfeek&name=angular-material-fundamentals-m0&mode=live&clip=0&course=angular-material-fundamentals\', icon: \'ondemand_video\', text: \'Angular Material Fundamentals\', site : \'Pluralsight\', access: \'member\'},\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            target="_blank"\n' +
    '            aria-label="{{link.text}}"\n' +
    '            ng-href="{{link.href}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.site}} | <span style="color: rgb(255,82,82); text-transform: none;">{{link.text}}</span> | <span class="training_info">{{link.access}}</span>\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2 class="md-headline">Conference Presentations:</h2>\n' +
    '    <p>\n' +
    '      Here are some conference presentations that will provide overviews for your development with Angular Material.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="100" flex-gt-xs="50" ng-repeat="(index, link) in [\n' +
    '        { href: \'https://www.youtube.com/watch?v=Qi31oO5u33U\', icon: \'ondemand_video\', text: \'Building with Angular Material\', site : \'ng-conf\',  date: \'2015\'},\n' +
    '        { href: \'https://www.youtube.com/watch?v=363o4i0rdvU\', icon: \'ondemand_video\', text: \'Angular Material in Practice\', site : \'AngularConnect\', date:\'2015\'},\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            target="_blank"\n' +
    '            aria-label="{{link.text}}"\n' +
    '            ng-href="{{link.href}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          <span class="training_site">{{link.site}}</span> | <span class="training_link">{{link.text}}</span> | <span class="training_info">{{link.date}}</span>\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2 class="md-headline">Google\'s Material Design</h2>\n' +
    '    <p>\n' +
    '      Material Design is a specification for a unified system of visual, motion, and interaction\n' +
    '      design that adapts across different devices and different screen sizes.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="100" flex-gt-xs="50" ng-repeat="(index, link) in [\n' +
    '        { href: \'https://www.youtube.com/watch?v=Q8TXgCzxEnw\', icon: \'ondemand_video\', text: \'Watch a video\', site : \'Google\' },\n' +
    '        { href: \'http://www.google.com/design/spec/material-design/\', icon: \'launch\', text: \'Learn More\', site : \'Google\' }\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            target="_blank"\n' +
    '            aria-label="{{link.text}}"\n' +
    '            ng-href="{{link.href}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.site}} | <span class="training_link"> {{link.text}} </span>\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <p class="md-caption" style="text-align: center; margin-bottom: 0;">\n' +
    '      These docs were generated from\n' +
    '      (<a ng-href="{{BUILDCONFIG.repository}}/{{menu.version.current.github}}" target="_blank" class="md-accent" >\n' +
    '      v{{BUILDCONFIG.version}} - SHA {{BUILDCONFIG.commit.substring(0,7)}}</a>)\n' +
    '      on (<strong>{{BUILDCONFIG.date}}</strong>) GMT.\n' +
    '    </p>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-alignment.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content" ng-cloak>\n' +
    '\n' +
    '  <p>\n' +
    '    The <code>layout-align</code> directive takes two words.\n' +
    '    The first word says how the children will be aligned in the layout\'s direction, and the second word says how the children will be aligned perpendicular to the layout\'s direction.</p>\n' +
    '\n' +
    '    <p>Only one value is required for this directive.\n' +
    '    For example, <code>layout="row" layout-align="center"</code> would make the elements\n' +
    '    center horizontally and use the default behavior vertically.</p>\n' +
    '\n' +
    '    <p><code>layout="column" layout-align="center end"</code> would make\n' +
    '    children align along the center vertically and along the end (right) horizontally. </p>\n' +
    '\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '         <thead>\n' +
    '           <tr>\n' +
    '             <th>API</th>\n' +
    '             <th>Sets child alignments within the layout container</th>\n' +
    '           </tr>\n' +
    '         </thead>\n' +
    '          <tr>\n' +
    '            <td>layout-align</td>\n' +
    '            <td>Sets default alignment unless overridden by another breakpoint.</td>\n' +
    '          </tr>\n' +
    '          <tr>\n' +
    '           <td>layout-align-xs</td>\n' +
    '           <td>width &lt; <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-gt-xs</td>\n' +
    '           <td>width &gt;= <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-sm</td>\n' +
    '           <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-gt-sm</td>\n' +
    '           <td>width &gt;= <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-md</td>\n' +
    '           <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-gt-md</td>\n' +
    '           <td>width &gt;= <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-lg</td>\n' +
    '           <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-gt-lg</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>layout-align-xl</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '        </table>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <p>\n' +
    '   Below is an interactive demo that lets you explore the visual results of the different settings:\n' +
    '  </p>\n' +
    '\n' +
    '  <div>\n' +
    '    <docs-demo demo-title=\'layout="{{layoutDemo.direction}}" &nbsp; &nbsp; &nbsp; layout-align="{{layoutAlign()}}"\'\n' +
    '               class="small-demo colorNested" interpolate-code="true">\n' +
    '      <demo-file name="index.html">\n' +
    '        <div layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}">\n' +
    '          <div>one</div>\n' +
    '          <div>two</div>\n' +
    '          <div>three</div>\n' +
    '        </div>\n' +
    '      </demo-file>\n' +
    '    </docs-demo>\n' +
    '  </div>\n' +
    '\n' +
    '  <div layout="column" layout-gt-sm="row" layout-align="space-around">\n' +
    '\n' +
    '    <div>\n' +
    '      <md-subheader>Layout Direction</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.direction">\n' +
    '        <md-radio-button value="row">row</md-radio-button>\n' +
    '        <md-radio-button value="column">column</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Layout Direction ({{layoutDemo.direction == \'row\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.mainAxis">\n' +
    '        <md-radio-button value="">none</md-radio-button>\n' +
    '        <md-radio-button value="start">start (default)</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '        <md-radio-button value="space-around">space-around</md-radio-button>\n' +
    '        <md-radio-button value="space-between">space-between</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Perpendicular Direction ({{layoutDemo.direction == \'column\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.crossAxis">\n' +
    '        <md-radio-button value="none"><em>none</em></md-radio-button>\n' +
    '        <md-radio-button value="start">start</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '        <md-radio-button value="stretch">stretch (default)</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-children.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content" ng-cloak>\n' +
    '\n' +
    '  <h3>Children within a Layout Container</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    To customize the size and position of elements in a layout <b>container</b>, use the\n' +
    '    <code>flex</code>, <code>flex-order</code>, and <code>flex-offset</code> attributes on the container\'s <u>child</u> elements:\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Directive" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex="20">\n' +
    '          [flex="20"]\n' +
    '        </div>\n' +
    '        <div flex="70">\n' +
    '          [flex="70"]\n' +
    '        </div>\n' +
    '        <div flex hide-sm hide-xs>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    Add the <code>flex</code> directive to a layout\'s child element and the element will flex (grow or shrink) to fit\n' +
    '    the area unused by other elements. <code>flex</code> defines how the element will adjust its size with respect to its\n' +
    '    <u>parent</u> container and the other elements within the container.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Percent Values" class="small-demo colorNested-noPad">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-wrap>\n' +
    '        <div flex="30">\n' +
    '          [flex="30"]\n' +
    '        </div>\n' +
    '        <div flex="45">\n' +
    '          [flex="45"]\n' +
    '        </div>\n' +
    '        <div flex="25">\n' +
    '          [flex="25"]\n' +
    '        </div>\n' +
    '        <div flex="33">\n' +
    '          [flex="33"]\n' +
    '        </div>\n' +
    '        <div flex="66">\n' +
    '          [flex="66"]\n' +
    '        </div>\n' +
    '        <div flex="50">\n' +
    '          [flex="50"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    A layout child\'s <code>flex</code> directive can be given an integer value from 0-100.\n' +
    '    The element will stretch to the percentage of available space matching the value. Currently, the <code>flex</code>\n' +
    '    directive value is restricted to multiples of five, 33 or 66.\n' +
    '  </p>\n' +
    '\n' +
    '  <p> For example: <code>flex="5", flex="20", flex="33", flex="50", flex="66", flex="75", ... flex="100"</code>.</p>\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Flex Directives" class="small-demo colorNested-noPad">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex-gt-sm="66" flex="33">\n' +
    '          flex 33% on mobile, <br/>and 66% on gt-sm devices.\n' +
    '        </div>\n' +
    '        <div flex-gt-sm="33" flex="66">\n' +
    '          flex 66%  on mobile, <br/>and 33% on gt-sm devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="layout/options">layout options page</a> for more information on responsive flex directives like\n' +
    '    <code>hide-sm</code> and <code>layout-wrap</code> used in the above examples.\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr>\n' +
    '  <br/>\n' +
    '\n' +
    '  <h3>Additional Flex Values</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    There are additional flex values provided by Angular Material to improve flexibility and to make the API\n' +
    '    easier to understand.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Other Flex Values" class="small-demo colorNested-noPad">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-wrap>\n' +
    '        <div flex="none">\n' +
    '          [flex="none"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex="nogrow">\n' +
    '          [flex="nogrow"]\n' +
    '        </div>\n' +
    '        <div flex="grow">\n' +
    '          [flex="grow"]\n' +
    '        </div>\n' +
    '        <div flex="initial">\n' +
    '          [flex="initial"]\n' +
    '        </div>\n' +
    '        <div flex="auto">\n' +
    '          [flex="auto"]\n' +
    '        </div>\n' +
    '        <div flex="noshrink">\n' +
    '          [flex="noshrink"]\n' +
    '        </div>\n' +
    '        <div flex="0">\n' +
    '          [flex="0"]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '    <tr>\n' +
    '      <td>flex</td>\n' +
    '      <td>Will grow and shrink as needed. Starts with a size of 0%. Same as <code>flex="0"</code>.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="none"</td>\n' +
    '      <td>Will not grow or shrink. Sized based on its <code>width</code> and <code>height</code> values.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="initial"</td>\n' +
    '      <td>Will shrink as needed. Starts with a size based on its <code>width</code> and <code>height</code> values.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="auto"</td>\n' +
    '      <td>Will grow and shrink as needed. Starts with a size based on its <code>width</code> and <code>height</code> values.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="grow"</td>\n' +
    '      <td>Will grow and shrink as needed. Starts with a size of 100%. Same as <code>flex="100"</code>.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="nogrow"</td>\n' +
    '      <td>Will shrink as needed, but won\'t grow. Starts with a size based on its <code>width</code> and <code>height</code> values.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex="noshrink"</td>\n' +
    '      <td>Will grow as needed, but won\'t shrink. Starts with a size based on its <code>width</code> and <code>height</code> values.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr>\n' +
    '  <br/>\n' +
    '\n' +
    '  <h3>Ordering HTML Elements</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Add the <code>flex-order</code> directive to a layout child to set its\n' +
    '    order position within the layout container. Any integer value from -20 to 20 is accepted.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex-Order Directive" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex flex-order="-1">\n' +
    '          <p>[flex-order="-1"]</p>\n' +
    '        </div>\n' +
    '        <div flex flex-order="1" flex-order-gt-md="3">\n' +
    '          <p hide-gt-md>[flex-order="1"]</p>\n' +
    '          <p hide show-gt-md>[flex-order-gt-md="3"]</p>\n' +
    '        </div>\n' +
    '        <div flex flex-order="2">\n' +
    '          <p>[flex-order="2"]</p>\n' +
    '        </div>\n' +
    '        <div flex flex-order="3" flex-order-gt-md="1">\n' +
    '          <p hide-gt-md>[flex-order="3"]</p>\n' +
    '          <p hide show-gt-md>[flex-order-gt-md="1"]</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th>API</th>\n' +
    '          <th>Device <b>width</b> when breakpoint overrides default</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '       <tr>\n' +
    '         <td>flex-order</td>\n' +
    '         <td>Sets default layout order unless overridden by another breakpoint.</td>\n' +
    '       </tr>\n' +
    '    <tr>\n' +
    '        <td>flex-order-xs</td>\n' +
    '           <td>width &lt; <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-gt-xs</td>\n' +
    '           <td>width &gt;= <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-sm</td>\n' +
    '           <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-gt-sm</td>\n' +
    '           <td>width &gt;= <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-md</td>\n' +
    '           <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-gt-md</td>\n' +
    '           <td>width &gt;= <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-lg</td>\n' +
    '           <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-gt-lg</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-order-xl</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '     </table>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="layout/options">layout options page</a> for more information on directives like\n' +
    '    <code>hide</code>, <code>hide-gt-md</code>, and <code>show-gt-md</code> used in the above examples.\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr>\n' +
    '  <br/>\n' +
    '\n' +
    '  <h3>Add Offsets to the Preceding HTML Elements</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Add the <code>flex-offset</code> directive to a layout child to set its\n' +
    '    offset percentage within the layout container. Values must be multiples\n' +
    '    of <code>5</code> or <code>33</code> / <code>66</code>. These offsets establish a <code>margin-left</code>\n' +
    '    with respect to the preceding element or the containers left boundary.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '      When using <code>flex-offset</code> the margin-left offset is applied... regardless of your choice of <code>flex-order</code>.\n' +
    '      or if you use a <code>flex-direction: reverse</code>.\n' +
    '    </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex-Offset Directive" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex="66" flex-offset="15">\n' +
    '          [flex-offset="15"]\n' +
    '          [flex="66"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '        <thead>\n' +
    '          <tr>\n' +
    '            <th>API</th>\n' +
    '            <th>Device width when breakpoint overrides default</th>\n' +
    '          </tr>\n' +
    '        </thead>\n' +
    '         <tr>\n' +
    '           <td>flex-offset</td>\n' +
    '           <td>Sets default margin-left offset (<b>%-based</b>) unless overridden by another breakpoint.</td>\n' +
    '         </tr>\n' +
    '    <tr>\n' +
    '           <td>flex-offset-xs</td>\n' +
    '           <td>width &lt; <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-gt-xs</td>\n' +
    '           <td>width &gt;= <b>600</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-sm</td>\n' +
    '           <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-gt-sm</td>\n' +
    '           <td>width &gt;= <b>960</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-md</td>\n' +
    '           <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-gt-md</td>\n' +
    '           <td>width &gt;= <b>1280</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-lg</td>\n' +
    '           <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-gt-lg</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '         <tr>\n' +
    '           <td>flex-offset-xl</td>\n' +
    '           <td>width &gt;= <b>1920</b>px</td>\n' +
    '         </tr>\n' +
    '       </table>\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-container.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content" ng-cloak>\n' +
    '\n' +
    '  <h3>Layout and Containers</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Use the <code>layout</code> directive on a container element to specify the layout direction for its children:\n' +
    '    horizontally in a row (<code>layout="row"</code>) or vertically in a column (<code>layout="column"</code>).\n' +
    '    Note that <code>row</code> is the default layout direction if you specify the <code>layout</code> directive without a value.\n' +
    '  </p>\n' +
    '\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td style="font-weight: bold; background-color: #DBEEF5">row</td>\n' +
    '      <td style="padding-left: 10px;">Items arranged horizontally. <code>max-height = 100%</code> and <code>max-width</code>  is the width of the items in the container.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td style="font-weight: bold; background-color: #DBEEF5 ">column</td>\n' +
    '      <td style="padding-left: 10px;">Items arranged vertically. <code>max-width = 100%</code>  and <code>max-height</code> is the height of the items in the container.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <docs-demo demo-title="Layout Directive" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '    <div layout="row">\n' +
    '      <div flex>First item in row</div>\n' +
    '      <div flex>Second item in row</div>\n' +
    '    </div>\n' +
    '    <div layout="column">\n' +
    '      <div flex>First item in column</div>\n' +
    '      <div flex>Second item in column</div>\n' +
    '    </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '      Note that <code>layout</code> only affects the flow direction for that container\'s <b>immediate</b> children.\n' +
    '    </p>\n' +
    '\n' +
    '  <hr>\n' +
    '\n' +
    '  <br/>\n' +
    '  <h3>Layouts and Responsive Breakpoints</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    As discussed in the <a href="layout/introduction">Layout Introduction page</a> you can\n' +
    '    make your layout change depending upon the device view size by using <b>breakpoint alias</b> suffixes.\n' +
    '   </p>\n' +
    '\n' +
    '  <p>\n' +
    '    To make your layout automatically change depending upon the device screen size, use one to the following <code>layout</code>\n' +
    '    APIs to set the layout direction for devices with view widths:\n' +
    '  </p>\n' +
    '\n' +
    '   <table class="md-api-table">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th>API</th>\n' +
    '        <th>Device width when breakpoint overrides default</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '     <tr>\n' +
    '       <td>layout</td>\n' +
    '       <td>Sets default layout direction unless overridden by another breakpoint.</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-xs</td>\n' +
    '       <td>width &lt; <b>600</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-gt-xs</td>\n' +
    '       <td>width &gt;= <b>600</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-sm</td>\n' +
    '       <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-gt-sm</td>\n' +
    '       <td>width &gt;= <b>960</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-md</td>\n' +
    '       <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-gt-md</td>\n' +
    '       <td>width &gt;= <b>1280</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-lg</td>\n' +
    '       <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-gt-lg</td>\n' +
    '       <td>width &gt;= <b>1920</b>px</td>\n' +
    '     </tr>\n' +
    '     <tr>\n' +
    '       <td>layout-xl</td>\n' +
    '       <td>width &gt;= <b>1920</b>px</td>\n' +
    '     </tr>\n' +
    '   </table>\n' +
    '   <br/>\n' +
    '\n' +
    '  <p><a\n' +
    '      href="https://camo.githubusercontent.com/ad81ae92f8b4285747ce4e48007bf3f104dd5630/687474703a2f2f6d6174657269616c2d64657369676e2e73746f726167652e676f6f676c65617069732e636f6d2f7075626c6973682f6d6174657269616c5f765f342f6d6174657269616c5f6578745f7075626c6973682f3042386f6c5631354a3761625053474678656d46695156527462316b2f6c61796f75745f61646170746976655f627265616b706f696e74735f30312e706e67"\n' +
    '      target="_blank" style="text-decoration: none;border: 0 none;">\n' +
    '      <img\n' +
    '      src="https://camo.githubusercontent.com/ad81ae92f8b4285747ce4e48007bf3f104dd5630/687474703a2f2f6d6174657269616c2d64657369676e2e73746f726167652e676f6f676c65617069732e636f6d2f7075626c6973682f6d6174657269616c5f765f342f6d6174657269616c5f6578745f7075626c6973682f3042386f6c5631354a3761625053474678656d46695156527462316b2f6c61796f75745f61646170746976655f627265616b706f696e74735f30312e706e67"\n' +
    '      alt=""\n' +
    '      style="max-width:100%;text-decoration: none;border: 0 none;"></a>\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    For the demo below, as you shrink your browser window width notice the flow direction changes to <code>column</code>\n' +
    '    for mobile devices (<code>xs</code>). And as you expand it will reset to <code>row</code>\n' +
    '    for <code>gt-sm</code> view sizes.\n' +
    '\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Layouts" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-xs="column">\n' +
    '        <div flex>\n' +
    '          I\'m above on mobile, and to the left on larger devices.\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          I\'m below on mobile, and to the right on larger devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="layout/options">Layout Options page</a> for more options such as padding, alignments, etc.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '\n' +
    ' </div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-introduction.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content" ng-cloak>\n' +
    '\n' +
    '  <h3>Overview</h3>\n' +
    '  <p>\n' +
    '    Angular Material\'s Layout features provide sugar to enable developers to more easily create modern,\n' +
    '    responsive layouts on top of CSS3 <a href="http://www.w3.org/TR/css3-flexbox/">flexbox</a>.\n' +
    '    The layout API consists of a set of Angular directives that can\n' +
    '    be applied to any of your application\'s HTML content.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    Using <b> HTML Directives</b> as the API provides an easy way to set a value (eg. <code>layout="row"</code>) and\n' +
    '    helps with separation of concerns: Attributes define layout while CSS classes assign styling.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th>HTML Markup API</th>\n' +
    '      <th>Allowed values (raw or interpolated)</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr>\n' +
    '      <td>layout</td>\n' +
    '      <td><code>row | column</code></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex</td>\n' +
    '      <td> integer (increments of 5 for 0%->100%)</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order</td>\n' +
    '      <td>integer values from -20 to 20</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-offset</td>\n' +
    '      <td>integer (increments of 5 for 0%->100%, 100%/3, 200%/3)</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align</td>\n' +
    '      <td><code>start|center|end|space-around|space-between</code> <code>start|center|end|stretch</code></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-fill</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-wrap</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-nowrap</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-margin</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-padding</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide</td>\n' +
    '      <td></td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '\n' +
    '  <p>And if we use Breakpoints as specified in Material Design:</p>\n' +
    '  <p><a\n' +
    '      href="https://camo.githubusercontent.com/ad81ae92f8b4285747ce4e48007bf3f104dd5630/687474703a2f2f6d6174657269616c2d64657369676e2e73746f726167652e676f6f676c65617069732e636f6d2f7075626c6973682f6d6174657269616c5f765f342f6d6174657269616c5f6578745f7075626c6973682f3042386f6c5631354a3761625053474678656d46695156527462316b2f6c61796f75745f61646170746976655f627265616b706f696e74735f30312e706e67"\n' +
    '      target="_blank"><img\n' +
    '      src="https://camo.githubusercontent.com/ad81ae92f8b4285747ce4e48007bf3f104dd5630/687474703a2f2f6d6174657269616c2d64657369676e2e73746f726167652e676f6f676c65617069732e636f6d2f7075626c6973682f6d6174657269616c5f765f342f6d6174657269616c5f6578745f7075626c6973682f3042386f6c5631354a3761625053474678656d46695156527462316b2f6c61796f75745f61646170746976655f627265616b706f696e74735f30312e706e67"\n' +
    '      alt=""\n' +
    '      style="max-width:100%;"></a>\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <p>We can associate breakpoints with mediaQuery definitions using breakpoint <strong>alias(es)</strong>:</p>\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th>Breakpoint</th>\n' +
    '      <th>MediaQuery (pixel range)</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr>\n' +
    '      <td>xs</td>\n' +
    '      <td>\'(max-width: <b>599</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>gt-xs</td>\n' +
    '      <td>\'(min-width: <b>600</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>sm</td>\n' +
    '      <td>\'(min-width: <b>600</b>px) and (max-width: <b>959</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>gt-sm</td>\n' +
    '      <td>\'(min-width: <b>960</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>md</td>\n' +
    '      <td>\'(min-width: <b>960</b>px) and (max-width: <b>1279</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>gt-md</td>\n' +
    '      <td>\'(min-width: <b>1280</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>lg</td>\n' +
    '      <td>\'(min-width: <b>1280</b>px) and (max-width: <b>1919</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>gt-lg</td>\n' +
    '      <td>\'(min-width: <b>1920</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>xl</td>\n' +
    '      <td>\'(min-width: <b>1920</b>px)\'</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr>\n' +
    '  <h3>\n' +
    '    API with Responsive Breakpoints\n' +
    '  </h3>\n' +
    '\n' +
    '  <p>Now we can combine the breakpoint <code>alias</code> with the Layout API to easily support Responsive breakpoints\n' +
    '    with our simple Layout markup convention. The <code>alias</code> is simply used as <b>suffix</b> extensions to the Layout\n' +
    '    API keyword.\n' +
    '    <br/>e.g.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    This notation results in, for example, the following table for the <code>layout</code> and <code>flex</code> APIs:\n' +
    '  </p>\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '      <thead>\n' +
    '      <tr>\n' +
    '        <th>layout API</th>\n' +
    '        <th>flex API</th>\n' +
    '        <th>Activates when device</th>\n' +
    '      </tr>\n' +
    '      </thead>\n' +
    '      <tr>\n' +
    '        <td>layout</td>\n' +
    '        <td>flex</td>\n' +
    '        <td>Sets default layout direction &amp; flex unless overridden by another breakpoint.</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-xs</td>\n' +
    '        <td>flex-xs</td>\n' +
    '        <td>width &lt; <b>600</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-gt-xs</td>\n' +
    '        <td>flex-gt-xs</td>\n' +
    '        <td>width &gt;= <b>600</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-sm</td>\n' +
    '        <td>flex-sm</td>\n' +
    '        <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-gt-sm</td>\n' +
    '        <td>flex-gt-sm</td>\n' +
    '        <td>width &gt;= <b>960</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-md</td>\n' +
    '        <td>flex-md</td>\n' +
    '        <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-gt-md</td>\n' +
    '        <td>flex-gt-md</td>\n' +
    '        <td>width &gt;= <b>1280</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-lg</td>\n' +
    '        <td>flex-lg</td>\n' +
    '        <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-gt-lg</td>\n' +
    '        <td>flex-gt-lg</td>\n' +
    '        <td>width &gt;= <b>1920/b>px</td>\n' +
    '      </tr>\n' +
    '      <tr>\n' +
    '        <td>layout-xl</td>\n' +
    '        <td>flex-xl</td>\n' +
    '        <td>width &gt;= <b>1920</b>px</td>\n' +
    '      </tr>\n' +
    '    </table>\n' +
    '\n' +
    '  <p>Below is an example usage of the Responsive Layout API:</p>\n' +
    '\n' +
    '  <hljs lang="html">\n' +
    '    <div layout=\'column\' class="zero">\n' +
    '\n' +
    '      <div flex="33" flex-md="{{ vm.box1Width }}" class="one"></div>\n' +
    '      <div flex="33" layout="{{ vm.direction }}" layout-md="row" class="two">\n' +
    '\n' +
    '        <div flex="22" flex-md="10" hide-lg class="two_one"></div>\n' +
    '        <div flex="30px" show hide-md="{{ vm.hideBox }}" flex-md="25" class="two_two"></div>\n' +
    '        <div flex="20" flex-md="65" class="two_three"></div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div flex class="three"></div>\n' +
    '\n' +
    '    </div>\n' +
    '  </hljs>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <p>\n' +
    '  This Layout API means it is much easier to set up and maintain flexbox layouts vs. defining everything via CSS.\n' +
    '  The developer uses the Layout HTML API to specify <b><i>intention</i></b> and the Layout engine handles all the issues of CSS flexbox styling.\n' +
    '  </p>\n' +
    '\n' +
    '  <p class="layout_note">\n' +
    '    The Layout engine will log console warnings when it encounters conflicts or known issues.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <br/><br/>\n' +
    '  <hr>\n' +
    '  <br/>\n' +
    '\n' +
    '  <h3>Under-the-Hood</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Due to performance problems when using Attribute Selectors with <b>Internet Explorer</b> browsers; see the following for more details:\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    Layout directives dynamically generate class selectors at runtime. And the Layout CSS classNames and styles have each been\n' +
    '    predefined in the <code>angular-material.css</code> stylesheet.\n' +
    '  </p>\n' +
    '\n' +
    '  <p class="layout_note">\n' +
    '    Developers should continue to use Layout directives in the HTML\n' +
    '    markup as the classes may change between releases.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    Let\'s see how this directive-to-className transformation works. Consider the simple use of the <code>layout</code> and <code>flex</code> directives (API):\n' +
    '  </p>\n' +
    '\n' +
    '  <hljs lang="html">\n' +
    '    <div>\n' +
    '\n' +
    '      <div layout="row">\n' +
    '\n' +
    '        <div flex>First item in row</div>\n' +
    '        <div flex="20">Second item in row</div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div layout="column">\n' +
    '\n' +
    '        <div flex="66">First item in column</div>\n' +
    '        <div flex="33">Second item in column</div>\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </hljs>\n' +
    '\n' +
    '\n' +
    '  <p>\n' +
    '    At runtime, these attributes are transformed to CSS classes.\n' +
    '  </p>\n' +
    '\n' +
    '  <hljs lang="html">\n' +
    '    <div>\n' +
    '\n' +
    '      <div class="ng-scope layout-row">\n' +
    '\n' +
    '        <div class="flex">First item in row</div>\n' +
    '        <div class="flex-20">Second item in row</div>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="ng-scope layout-column">\n' +
    '\n' +
    '        <div class="flex-33">First item in column</div>\n' +
    '        <div class="flex-66">Second item in column</div>\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </hljs>\n' +
    '\n' +
    '  <p>\n' +
    '    Using the style classes above defined in <code>angular-material.css</code>\n' +
    '  </p>\n' +
    '\n' +
    '  <hljs lang="css">\n' +
    '\n' +
    '    .flex {\n' +
    '      -webkit-flex: 1 1 0%;\n' +
    '          -ms-flex: 1 1 0%;\n' +
    '              flex: 1 1 0%;\n' +
    '      box-sizing: border-box;\n' +
    '    }\n' +
    '    .flex-20 {\n' +
    '      -webkit-flex: 1 1 20%;\n' +
    '          -ms-flex: 1 1 20%;\n' +
    '              flex: 1 1 20%;\n' +
    '      max-width: 20%;\n' +
    '      max-height: 100%;\n' +
    '      box-sizing: border-box;\n' +
    '    }\n' +
    '\n' +
    '    .layout-row .flex-33 {\n' +
    '      -webkit-flex: 1 1 calc(100% / 3);\n' +
    '          -ms-flex: 1 1 calc(100% / 3);\n' +
    '              flex: 1 1 calc(100% / 3);\n' +
    '      box-sizing: border-box;\n' +
    '    }\n' +
    '\n' +
    '    .layout-row  .flex-66 {\n' +
    '      -webkit-flex: 1 1 calc(200% / 3);\n' +
    '          -ms-flex: 1 1 calc(200% / 3);\n' +
    '              flex: 1 1 calc(200% / 3);\n' +
    '      box-sizing: border-box;\n' +
    '    }\n' +
    '\n' +
    '\n' +
    '    .layout-row .flex-33 {\n' +
    '      max-width: calc(100% / 3);\n' +
    '      max-height: 100%;\n' +
    '    }\n' +
    '\n' +
    '    .layout-row  .flex-66 {\n' +
    '      max-width: calc(200% / 3);\n' +
    '      max-height: 100%;\n' +
    '    }\n' +
    '\n' +
    '    .layout-column .flex-33 {\n' +
    '      max-width: 100%;\n' +
    '      max-height: calc(100% / 3);\n' +
    '    }\n' +
    '\n' +
    '    .layout-column  .flex-66 {\n' +
    '      max-width: 100%;\n' +
    '      max-height: calc(200% / 3);\n' +
    '    }\n' +
    '  </hljs>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-options.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content layout-options" ng-cloak>\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Layout" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-sm="column">\n' +
    '        <div flex>\n' +
    '          I\'m above on mobile, and to the left on larger devices.\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          I\'m below on mobile, and to the right on larger devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="layout/container">Container Elements</a> page for a basic explanation\n' +
    '    of layout directives.\n' +
    '    <br/>\n' +
    '    To make your layout change depending upon the device screen size, there are\n' +
    '    other <code>layout</code> directives available:\n' +
    '  </p>\n' +
    '\n' +
    '  <table class="md-api-table">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th>API</th>\n' +
    '      <th>Activates when device</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tr>\n' +
    '      <td>layout</td>\n' +
    '      <td>Sets default layout direction unless overridden by another breakpoint.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-xs</td>\n' +
    '      <td>width &lt; <b>600</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-xs</td>\n' +
    '      <td>width &gt;= <b>600</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-sm</td>\n' +
    '      <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-sm</td>\n' +
    '      <td>width &gt;= <b>960</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-md</td>\n' +
    '      <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-md</td>\n' +
    '      <td>width &gt;= <b>1280</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-lg</td>\n' +
    '      <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-lg</td>\n' +
    '      <td>width &gt;= <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-xl</td>\n' +
    '      <td>width &gt;= <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '  <br/>\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr>\n' +
    '  <br/>\n' +
    '\n' +
    '  <h3>Layout Margin, Padding, Wrap and Fill</h3>\n' +
    '  <br/>\n' +
    '\n' +
    '\n' +
    '  <docs-demo demo-title="Layout Margin, Padding, and Fill" class="small-demo colorNested-noPad">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-margin>\n' +
    '        <div flex>Parent layout and this element have margins.</div>\n' +
    '      </div>\n' +
    '      <div layout="row" layout-padding>\n' +
    '        <div flex>Parent layout and this element have padding.</div>\n' +
    '      </div>\n' +
    '      <div layout="row" layout-fill style="min-height: 224px;">\n' +
    '        <div flex>Parent layout is set to fill available space.</div>\n' +
    '      </div>\n' +
    '      <div layout="row" layout-padding layout-margin layout-fill style="min-height: 224px;">\n' +
    '        <div flex>I am using all three at once.</div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    <code>layout-margin</code> adds margin around each <code>flex</code> child. It also adds a margin to the layout\n' +
    '    container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-padding</code> adds padding inside each <code>flex</code> child. It also adds padding to the layout\n' +
    '    container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-fill</code> forces the layout element to fill its parent container.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <p>Here is a non-trivial group of <code>flex</code> elements using <code>layout-wrap</code></p>\n' +
    '\n' +
    '  <docs-demo demo-title="Wrap" class="small-demo colorNested-noPad">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-wrap>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '        <div flex="66">[flex=66]</div>\n' +
    '        <div flex="66">[flex=66]</div>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    <code>layout-wrap</code> allows <code>flex</code> children to wrap within the container if the elements use more\n' +
    '    than 100%.\n' +
    '    <br/>\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <br/>\n' +
    '    <hr>\n' +
    '    <br/>\n' +
    '\n' +
    '    <h3>Show &amp; Hide </h3>\n' +
    '\n' +
    '  <p>Use the <code>show</code> <code>hide</code> APIs to responsively show or hide elements. While these work similar\n' +
    '  to <code>ng-show</code> and <code>ng-hide</code>, these Angular Material Layout directives are mediaQuery-aware.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Hide and Show Directives" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div hide show-gt-sm flex>\n' +
    '          Only show on gt-sm devices.\n' +
    '        </div>\n' +
    '        <div hide-gt-sm flex>\n' +
    '          Shown on small and medium.<br/>\n' +
    '          Hidden on gt-sm devices.\n' +
    '        </div>\n' +
    '        <div show hide-gt-md flex>\n' +
    '          Shown on small and medium size devices.<br/>\n' +
    '          Hidden on gt-md devices.\n' +
    '        </div>\n' +
    '        <div hide show-md flex>\n' +
    '          Shown on medium size devices only.\n' +
    '        </div>\n' +
    '        <div hide show-gt-lg flex>\n' +
    '          Shown on devices larger than 1200px wide only.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <br/>\n' +
    '  <table class="md-api-table">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th>hide (display: none)</th>\n' +
    '        <th>show (negates hide)</th>\n' +
    '        <th>Activates when:</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tr>\n' +
    '      <td>hide-xs</td>\n' +
    '      <td>show-xs</td>\n' +
    '      <td>width &lt; <b>600</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-xs</td>\n' +
    '      <td>show-gt-xs</td>\n' +
    '      <td>width &gt;= <b>600</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-sm</td>\n' +
    '      <td>show-sm</td>\n' +
    '      <td><b>600</b>px &lt;= width &lt; <b>960</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-sm</td>\n' +
    '      <td>show-gt-sm</td>\n' +
    '      <td>width &gt;= <b>960</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-md</td>\n' +
    '      <td>show-md</td>\n' +
    '      <td><b>960</b>px &lt;= width &lt; <b>1280</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-md</td>\n' +
    '      <td>show-gt-md</td>\n' +
    '      <td>width &gt;= <b>1280</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-lg</td>\n' +
    '      <td>show-lg</td>\n' +
    '      <td><b>1280</b>px &lt;= width &lt; <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-lg</td>\n' +
    '      <td>show-gt-lg</td>\n' +
    '      <td>width &gt;= <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-xl</td>\n' +
    '      <td>show-xl</td>\n' +
    '      <td>width &gt;= <b>1920</b>px</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-tips.tmpl.html',
    '<style>\n' +
    '  ul.spaced li {\n' +
    '    margin-bottom: 15px;\n' +
    '  }\n' +
    '</style>\n' +
    '<div ng-controller="LayoutTipsCtrl as tips" class="layout-content">\n' +
    '  <h3>Overview</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    The Angular Material Layout system uses the current\n' +
    '    <a href="http://www.w3.org/TR/css3-flexbox/">Flexbox</a> feature set. More importantly, it also\n' +
    '    adds syntactic sugar to allow developers to easily and quickly add Responsive features to HTML\n' +
    '    containers and elements.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    As you use the Layout features, you may encounter scenarios where the layouts do not render as\n' +
    '    expected; especially with IE 10 and 11 browsers. There may also be cases where you need to add\n' +
    '    custom HTML, CSS and Javascript to achieve your desired results.\n' +
    '  </p>\n' +
    '\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr/>\n' +
    '\n' +
    '  <h3>Resources</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    If you are experiencing an issue in a particular browser, we highly recommend using the\n' +
    '    following resources for known issues and workarounds.\n' +
    '  </p>\n' +
    '\n' +
    '  <ul>\n' +
    '    <li><a href="https://github.com/philipwalton/flexbugs#flexbugs" target="_blank">FlexBugs</a></li>\n' +
    '    <li><a href="https://philipwalton.github.io/solved-by-flexbox/" target="_blank">Solved by FlexBugs</a></li>\n' +
    '    <li><a href="http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/" target="_blank">Normalizing Cross-browser Flexbox Bugs</a></li>\n' +
    '    <li style="margin-bottom: 20px;"><a href="http://caniuse.com/#search=flex" target="_blank">Can I use flexbox...? ( see the <code>Known Issues</code> tab)</a></li>\n' +
    '    <li><a href="https://groups.google.com/forum/#!forum/ngmaterial">Angular Material Forum</a></li>\n' +
    '    <li style="margin-top: 20px;"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a></li>\n' +
    '    <li style="margin-bottom: 20px;"><a href="https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties" target="_blank">A Visual Guide to CSS3 Flexbox Properties</a></li>\n' +
    '  </ul>\n' +
    '\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr/>\n' +
    '\n' +
    '  <h3>General Tips</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Below, you will find solutions to some of the more common scenarios and problems that may arise\n' +
    '    when using Material\'s Layout system. The following sections offer general guidelines and tips when using the <code>flex</code> and\n' +
    '        <code>layout</code> directives within your own applications.\n' +
    '  </p>\n' +
    '\n' +
    '  <ul class="spaced">\n' +
    '    <li>\n' +
    '      When building your application\'s Layout, it is usually best to start with a mobile version\n' +
    '      that looks and works correctly, and then apply styling for larger devices using the\n' +
    '      <code>flex-gt-*</code> or <code>hide-gt-*</code> attributes. This approach typically leads\n' +
    '      to less frustration than starting big and attempting to fix issues on smaller devices.\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      Some elements like <code>&lt;fieldset&gt;</code> and <code>&lt;button&gt;</code> do not always\n' +
    '      work correctly with flex. Additionally, some of the Angular Material components provide their\n' +
    '      own styles. If you are having difficulty with a specific element/component, but not\n' +
    '      others, try applying the flex attributes to a parent or child <code>&lt;div&gt;</code> of the\n' +
    '      element instead.\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      Some Flexbox properties such as <code>flex-direction</code> <u>cannot</u> be animated.\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      Flexbox can behave differently on different browsers. You should test as many as possible on\n' +
    '      a regular basis so that you can catch and fix layout issues more quickly.\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr/>\n' +
    '\n' +
    '  <h3>Layout Column</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    In some scenarios <code>layout="column"</code> and breakpoints (xs, gt-xs, xs, gt-sm, etc.) may not work\n' +
    '    as expected due to CSS specificity rules.\n' +
    '  </p>\n' +
    '\n' +
    '  <div class="md-whiteframe-3dp">\n' +
    '\n' +
    '    <iframe height=\'700\' scrolling=\'no\'\n' +
    '            src=\'//codepen.io/team/AngularMaterial/embed/obgapg/?height=700&theme-id=21180&default-tab=result\'\n' +
    '            frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a\n' +
    '        href=\'http://codepen.io/team/AngularMaterial/pen/obgapg/\'>Card Layouts (corrected)</a> by Angular Material (<a\n' +
    '        href=\'http://codepen.io/AngularMaterial\'>@AngularMaterial</a>) on <a href=\'http://codepen.io\'>CodePen</a>.\n' +
    '    </iframe>\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '    <p>\n' +
    '      This is easily fixed simply by inverting the layout logic so that the default is <code>layout=\'row\'</code>.\n' +
    '      To see how the layout changes, shrink the browser window its width is <600px;\n' +
    '    </p>\n' +
    '\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr/>\n' +
    '\n' +
    '  <h3>Layout Column and Container Heights</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    In Flexbox, some browsers will determine size of the flex containers based on the size of their\n' +
    '    content. This is particularly noticable if you have a non-flex item (say a toolbar), followed by\n' +
    '    two flex items in a column layout.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Height - Odd (Chrome )" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="column" style="height: 450px !important;">\n' +
    '        <div style="height: 50px;">Toolbar</div>\n' +
    '\n' +
    '        <div flex layout="column" style="overflow: auto;">\n' +
    '          <md-content flex layout-margin>\n' +
    '            <p>Flex with smaller content...</p>\n' +
    '\n' +
    '            <p ng-repeat="i in [0,1,2,3,4]">Line {{i}}</p>\n' +
    '          </md-content>\n' +
    '\n' +
    '          <md-content flex layout-margin>\n' +
    '            <p>\n' +
    '              Flex with larger content...\n' +
    '            </p>\n' +
    '\n' +
    '            <p ng-repeat="i in [0,1,2,3,4]">Line {{i}}</p>\n' +
    '\n' +
    '            <div id="toHide">\n' +
    '              <p ng-repeat="i in [5,6,7,8,9]">Line {{i}}</p>\n' +
    '            </div>\n' +
    '          </md-content>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    Notice how in Chrome the second scrollable area is nearly twice as tall as the first. This is\n' +
    '    because we are using nested flex items and the contents of the second\n' +
    '    <code>&lt;md-content&gt;</code> are twice as large as the first. Try clicking the button below\n' +
    '    to toggle the light blue box; this will make the containers the same size.\n' +
    '  </p>\n' +
    '\n' +
    '  <p layout="row" layout-align="center center">\n' +
    '    <md-button class="md-raised" ng-click="tips.toggleContentSize()">\n' +
    '      {{tips.toggleButtonText}} Blue Box\n' +
    '    </md-button>\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    In order to fix this, we must specify the height of the outer flex item. The easiest way to\n' +
    '    achieve this is to simply set the height to <code>100%</code>. When paired with the\n' +
    '    <code>flex</code> attribute, this achieves the desired result.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    <em>\n' +
    '      <strong>Note:</strong> When <code>height: 100%</code> is used without the <code>flex</code>\n' +
    '      attribute, the container will take up as much space as available and squish the toolbar which\n' +
    '      has been set to a height of <code>50px</code>.\n' +
    '    </em>\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Chrome Flex Height - Fixed" class="small-demo colorNested">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="column" style="height: 450px !important;">\n' +
    '        <div style="height: 50px;">Toolbar</div>\n' +
    '\n' +
    '        <div flex layout="column" style="overflow: auto; height: 100%;">\n' +
    '          <md-content flex layout-margin>\n' +
    '            <p>Flex with smaller content...</p>\n' +
    '\n' +
    '            <p ng-repeat="i in [0,1,2,3,4]">Line {{i}}</p>\n' +
    '          </md-content>\n' +
    '\n' +
    '          <md-content flex layout-margin>\n' +
    '            <p>\n' +
    '              Flex with larger content...\n' +
    '            </p>\n' +
    '\n' +
    '            <p ng-repeat="i in [0,1,2,3,4]">Line {{i}}</p>\n' +
    '\n' +
    '            <div>\n' +
    '              <p ng-repeat="i in [5,6,7,8,9]">Line {{i}}</p>\n' +
    '            </div>\n' +
    '          </md-content>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '\n' +
    '  <br/>\n' +
    '  <hr/>\n' +
    '\n' +
    '  <h3>Flex Element Heights</h3>\n' +
    '\n' +
    '  <p>\n' +
    '    Firefox currently has an issue calculating the proper height of flex containers whose children\n' +
    '    are flex, but have more content than can properly fit within the container.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    This is particularly problematic if the <code>flex</code> children are <code>md-content</code> components as\n' +
    '    it will prevent the content from scrolling correctly, instead scrolling the entire body.\n' +
    '  </p>\n' +
    '\n' +
    '  <div class="md-whiteframe-3dp">\n' +
    '    <iframe height=\'376\' scrolling=\'no\'\n' +
    '            src=\'//codepen.io/team/AngularMaterial/embed/NxKBwW/?height=376&theme-id=0&default-tab=result\'\n' +
    '            frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>\n' +
    '      See the Pen <a href=\'http://codepen.io/team/AngularMaterial/pen/NxKBwW/\'>Angular Material Basic App</a>\n' +
    '      by Angular Material (<a href=\'http://codepen.io/AngularMaterial\'>@AngularMaterial</a>)\n' +
    '      on <a href=\'http://codepen.io\'>CodePen</a>.\n' +
    '    </iframe>\n' +
    '  </div>\n' +
    '\n' +
    '  <p>\n' +
    '    Notice in the above Codepen how we must set <code>overflow: auto</code> on the div with the\n' +
    '    <code>change-my-css</code> class in order for Firefox to properly calculate the height and\n' +
    '    shrink to the available space.\n' +
    '  </p>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/license.tmpl.html',
    '<div ng-controller="GuideCtrl" class="doc-content">\n' +
    '  <md-content>\n' +
    '    <p>The MIT License</p>\n' +
    '\n' +
    '    <p>\n' +
    '      Copyright (c) 2014-2016 Google, Inc.\n' +
    '      <a href="http://angularjs.org">http://angularjs.org</a>\n' +
    '    </p>\n' +
    '\n' +
    '    <p>\n' +
    '      Permission is hereby granted, free of charge, to any person obtaining a copy\n' +
    '      of this software and associated documentation files (the "Software"), to deal\n' +
    '      in the Software without restriction, including without limitation the rights\n' +
    '      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n' +
    '      copies of the Software, and to permit persons to whom the Software is\n' +
    '      furnished to do so, subject to the following conditions:\n' +
    '    </p>\n' +
    '\n' +
    '    <p>\n' +
    '      The above copyright notice and this permission notice shall be included in\n' +
    '      all copies or substantial portions of the Software.\n' +
    '    </p>\n' +
    '\n' +
    '    <p>\n' +
    '      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
    '      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n' +
    '      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n' +
    '      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n' +
    '      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n' +
    '      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n' +
    '      THE SOFTWARE.\n' +
    '    </p>\n' +
    '  </md-content>\n' +
    '</div>');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/menu-link.tmpl.html',
    '<md-button\n' +
    '    ng-class="{\'active\' : isSelected()}"\n' +
    '    ng-href="{{section.url}}"\n' +
    '    ng-click="focusSection()">\n' +
    '  {{section | humanizeDoc}}\n' +
    '  <span class="_md-visually-hidden"\n' +
    '    ng-if="isSelected()">\n' +
    '    current page\n' +
    '  </span>\n' +
    '</md-button>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/menu-toggle.tmpl.html',
    '<md-button class="md-button-toggle"\n' +
    '  ng-click="toggle()"\n' +
    '  aria-controls="docs-menu-{{section.name | nospace}}"\n' +
    '  aria-expanded="{{isOpen()}}">\n' +
    '  <div flex layout="row">\n' +
    '    {{section.name}}\n' +
    '    <span flex></span>\n' +
    '    <span aria-hidden="true" class="md-toggle-icon"\n' +
    '    ng-class="{\'toggled\' : isOpen()}">\n' +
    '      <md-icon md-svg-src="md-toggle-arrow"></md-icon>\n' +
    '    </span>\n' +
    '  </div>\n' +
    '  <span class="md-visually-hidden">\n' +
    '    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n' +
    '  </span>\n' +
    '</md-button>\n' +
    '\n' +
    '<ul id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n' +
    '  <li ng-repeat="page in section.pages">\n' +
    '    <menu-link section="page"></menu-link>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/view-source.tmpl.html',
    '<md-dialog class="view-source-dialog">\n' +
    '\n' +
    '  <md-tabs>\n' +
    '    <md-tab ng-repeat="file in files"\n' +
    '                  active="file === data.selectedFile"\n' +
    '                  ng-click="data.selectedFile = file" >\n' +
    '        <span class="window_label">{{file.viewType}}</span>\n' +
    '    </md-tab>\n' +
    '  </md-tabs>\n' +
    '\n' +
    '  <md-dialog-content md-scroll-y flex>\n' +
    '    <div ng-repeat="file in files">\n' +
    '      <hljs code="file.content"\n' +
    '        lang="{{file.fileType}}"\n' +
    '        ng-show="file === data.selectedFile" >\n' +
    '      </hljs>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '\n' +
    '  <md-dialog-actions layout="horizontal">\n' +
    '    <md-button class="md-primary" ng-click="$hideDialog()">\n' +
    '      Done\n' +
    '    </md-button>\n' +
    '  </md-dialog-actions>\n' +
    '</md-dialog>\n' +
    '');
}]);
