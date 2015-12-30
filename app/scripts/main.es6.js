require('../styles/scss/main.scss');
require('./debug-conf');

import Game from './Game';
import debug from 'debug';

let game = new Game();
let log = debug('game');

game.mainChannel.subscribe('*', (data, { topic }) => {
    log(topic);
});

game.setup();
