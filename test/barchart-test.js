// barchart-test.js
var tape = require('tape-catch'),
    jsdom = require('jsdom'),
    d3_svg = require('d3-svg'),
    bar_chart = require('../');

tape('bar chart is callable on a svg element', function(test) {
  var dom = new jsdom.JSDOM();
  global.document = dom.window.document;
  var svg = d3_svg.create('body');
  test.ok(svg, 'svg element exists');
  var chart = bar_chart.chart();

  test.doesNotThrow(function() {
    chart.data([]);
    svg.call(chart);
  });

  delete global.document;
  test.end();
});
