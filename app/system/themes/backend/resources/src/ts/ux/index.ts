import queue from './util/queue';
import asset from './util/asset';
import dom from './util/dom';
import ext from './util/ext';
import data from './util/data';
import route from './util/route';
import ajax from './util/ajax';

export default {
    ext, dom, queue, asset, data, route, ajax
}

require('./util/polyfill');
