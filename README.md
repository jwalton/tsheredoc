# tsheredoc

[![NPM version](https://badge.fury.io/js/tsheredoc.svg)](https://npmjs.org/package/tsheredoc)
![Build Status](https://github.com/jwalton/tsheredoc/workflows/GitHub%20CI/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What is it?

This makes is so you can generate multi-line strings without messing up your indents in Javascript/Typescript:

```ts
import heredoc from 'tsheredoc';

const usage = heredoc`
   Usage: mycommand [arguments]
   Does cool stuff.
`;
// Usage will be "Usage: mycommand [arguments]\nDoes cool stuff.\n"
```

This can be used either as a template string (as above) or as a function:

```ts
import heredoc from 'tsheredoc';

const usage = heredoc(`
   Usage: mycommand [arguments]
   Does cool stuff.
`;
// Same as above
```
