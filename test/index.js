import { assert } from 'chai';
import hp from '../src';
import RandomState from '../src/utils/RandomState';
import { sample } from '../src/pyll/stochastic';

const seededSample = (space) => sample(space, {rng: new RandomState(12345)});

describe('choice.', () => {
  it('is a string', () => {
    const val = seededSample(hp.choice('choice', ['cat', 'dog']));
    assert.typeOf(val, 'string');
  });
  it('picks a number', () => {
    const val = seededSample(hp.choice('numbers', [1, 2, 3, 4]));
    assert(val===4, 'val was actually: ' + val);
  });
  it('is one of the elements', () => {
    const val = seededSample(hp.choice('choice', ['cat', 'dog']));
    assert(val==='dog', 'val was actually ' + val);
  });
});

describe('randint test.', () => {
  it('should be in range [0,5)', () => {
    const val  = seededSample(hp.randint('randint', 5));
    assert(val >= 0 && val < 5, 'Value not in range :(. val was actually' + val);
  });
});

describe('uniform test.', () => {
  it('should be between 0 and 1', () => {
    const val  = seededSample(hp.uniform('uniform', 0, 1));
    assert(val >= 0 && val <= 1, 'Value not in range :(. val was actually' + val);
  });
});

describe('quniform test.', () => {
  it('should be between 0 and 1', () => {
    const val  = seededSample(hp.quniform('quniform', 0, 1, 0.2));
    assert(val >= 0 && val <= 1, 'Value not in range :(. val was actually' + val);
  });
});

describe('loguniform test.', () => {
  it('should be between e^0 and e^1', () => {
    const low = 0;
    const high = 1;
    const val  = seededSample(hp.loguniform('loguniform', low, high));
    assert(val >= Math.exp(low) && val <= Math.exp(high), 'Value not in range :(. val was actually' + val);
  });
});

describe('qloguniform test.', () => {
  it('should be between e^0 and e^1', () => {
    const low = 0;
    const high = 1;
    const val  = seededSample(hp.qloguniform('qloguniform', low, high, 0.2));
    assert(val >= Math.exp(low) && val <= Math.exp(high), 'Value not in range :(. val was actually' + val);
  });
});

describe('normal test.', () => {
  it('is a number', () => {
    const mu = -1;
    const sigma = 1;
    const val  = seededSample(hp.normal('normal', mu, sigma));
    assert(!isNaN(val), 'Value not in range :(. val was actually' + val);
  });
  it('is within 3 standard deviations of mean', () => {
    const mu = 0;
    const sigma = 1;
    const val  = seededSample(hp.normal('normal', mu, sigma));
    assert(val >= mu - (3*sigma) && val <= mu + (3*sigma), 'Value not in range :(. val was actually' + val);
  });
});

describe('qnormal test.', () => {
  it('is a number', () => {
    const mu = -1;
    const sigma = 1;
    const val  = seededSample(hp.normal('normal', mu, sigma));
    assert(!isNaN(val), 'Value not in range :(. val was actually' + val);
  });
  it('is within 3 standard deviations of mean', () => {
    const mu = 0;
    const sigma = 1;
    const val  = seededSample(hp.qnormal('qnormal', mu, sigma, 0.1));
    assert(val >= mu - (3*sigma) && val <= mu + (3*sigma), 'Value not in range :(. val was actually' + val);
  });
});

describe('lognormal test.', () => {
  it('should be positive', () => {
    const mu = 0;
    const sigma = 1;
    const val  = seededSample(hp.lognormal('lognormal', mu, sigma));
    assert(val >= 0, 'Value not in range :(. val was actually' + val);
  });
  it('should be less ~e^3 from the mean, or less than ~3 standard deviations from it', () => {
    const mu = 0;
    const sigma = 1;
    const val  = seededSample(hp.lognormal('lognormal', mu, sigma));
    assert(val <= 50, 'Value not in range :(. val was actually' + val);
  });
});

