'use strict';

const fs = require('fs');
const path = require('path');

const phrases = fs
  .readFileSync(path.join(__dirname, '../data/phrases.txt'), 'utf-8')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0);

function getRandom() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

module.exports = { getRandom };
