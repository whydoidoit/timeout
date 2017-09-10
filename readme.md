### Introduction

A setTimeout equivalent that operates in PlayCanvas game time, that might be slowed or paused.

### Installation

```language-shell
npm install --save playcanvas-timeout
```

### Usage

```language-javascript
import timeout form 'playcanvas-timeout'

...

timeout(function() {
    //Called after 1 second of GAME TIME
    ...
}, 1000); 
 

```

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
