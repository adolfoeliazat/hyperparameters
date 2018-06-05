# ES6 hyperparameters optimization

[![Build Status](https://travis-ci.org/atanasster/hypersearch.svg?branch=master)](https://travis-ci.org/atanasster/hypersearch) [![dependencies Status](https://david-dm.org/atanasster/hyperjs/status.svg)](https://david-dm.org/atanasster/hyperjs) [![devDependencies Status](https://david-dm.org/atanasster/hyperjs/dev-status.svg)](https://david-dm.org/atanasster/hyperjs?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**THIS IS AN INITIAL CHECK-IN, NOT TO BE USED !!!!!!!!**



# Features

* **hyperopt compatible** - The library is mostly compatible with [Hyperopt(https://github.com/hyperopt/hyperopt)](https://github.com/hyperopt/hyperopt) 

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# Installation
Just clone this repo and remove `.git` folder.

# Function Signatures

```hp.choice(label, options)```

- Randomly return one of the options

```hp.randint(label, upper)```

- Return a random integer in the range [0, upper)

```hp.uniform(label, low, high)```

- Returns a single value uniformly between ```low``` and ```high``` i.e. any value between ```low``` and ```high``` has an equal probability of being selected

```hp.quniform(label, low, high, q)```

- returns a quantized value of ```hp.uniform``` i.e. ```round(uniform(low, high) / q) * q```

```hp.loguniform(label, low, high)```

- Returns a value ```exp(uniform(low, high))``` so the logarithm of the return value is uniformly distributed.

```hp.qloguniform(label, low, high, q)```

- Returns a value ```round(exp(uniform(low, high)) / q) * q```

```hp.normal(label, mu, sigma)```

- Returns a real number that's normally-distributed with mean mu and standard deviation sigma

```hp.qnormal(label, mu, sigma, q)```

- Returns a value ```round(normal(mu, sigma) / q) * q```

```hp.lognormal(label, mu, sigma)```

- Returns a value ```exp(normal(mu, sigma))```

```hp.qlognormal(label, mu, sigma, q)```

- Returns a value ```round(exp(normal(mu, sigma)) / q) * q```


# License

MIT © Atanas Stoyanov & Martin Stoyanov
