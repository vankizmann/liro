import queue from './util/queue';
import asset from './util/asset';
import dom from './util/dom';
import ext from './util/ext';

(<any> window).queue = queue;
(<any> window).asset = asset;
(<any> window).dom = dom;
(<any> window).ext = ext;

export default {

}

require('./util/polyfill');
