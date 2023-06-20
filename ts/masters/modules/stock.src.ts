/**
 * @license Highstock JS v@product.version@ (@product.date@)
 * @module highcharts/modules/stock
 * @requires highcharts
 *
 * Highcharts Stock as a plugin for Highcharts
 *
 * (c) 2010-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import './broken-axis.src.js';
import './datagrouping.src.js';
import './mouse-wheel-zoom.src.js';
import Highcharts from '../../Core/Globals.js';
import DataModifyComposition from '../../Series/DataModifyComposition.js';
import Navigator from '../../Stock/Navigator/Navigator.js';
import RangeSelector from '../../Stock/RangeSelector/RangeSelector.js';
import StockChart from '../../Core/Chart/StockChart.js';
const G: AnyRecord = Highcharts;
// Classes
G.Navigator = Navigator;
G.RangeSelector = RangeSelector;

G.StockChart = G.stockChart = StockChart.stockChart;
// Compositions
DataModifyComposition.compose(G.Series, G.Axis, G.Point);

Navigator.compose(G.Axis, G.Chart, G.Series);

RangeSelector.compose(G.Axis, G.Chart);

