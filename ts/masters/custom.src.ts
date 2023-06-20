/**
 * @license Highcharts JS v@product.version@ (@product.date@)
 * @module highcharts/highcharts
 *
 * (c) 2009-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../Core/Globals.js';
import Defaults from '../Core/Defaults.js';
import Animation from '../Core/Animation/AnimationUtilities.js';
import SVGElement from '../Core/Renderer/SVG/SVGElement.js';
import SVGRenderer from '../Core/Renderer/SVG/SVGRenderer.js';
import HTMLElement from '../Core/Renderer/HTML/HTMLElement.js';
import HTMLRenderer from '../Core/Renderer/HTML/HTMLRenderer.js';
import Axis from '../Core/Axis/Axis.js';
import DateTimeAxis from '../Core/Axis/DateTimeAxis.js';
import Tooltip from '../Core/Tooltip.js';
import Pointer from '../Core/Pointer.js';
import Legend from '../Core/Legend/Legend.js';
import Chart from '../Core/Chart/Chart.js';
import StackingAxis from '../Core/Axis/Stacking/StackingAxis.js';
import StackItem from '../Core/Axis/Stacking/StackItem.js';
import Series from '../Core/Series/Series.js';
import '../Series/Line/LineSeries.js';
import '../Series/AreaSpline/AreaSplineSeries.js';
import ColumnSeries from '../Series/Column/ColumnSeries.js';
import ColumnDataLabel from '../Series/Column/ColumnDataLabel.js';
import '../Series/Bar/BarSeries.js';
import DataLabel from '../Core/Series/DataLabel.js';
import '../Extensions/BorderRadius.js';
import Responsive from '../Core/Responsive.js';
import Color from '../Core/Color/Color.js';
import Templating from '../Core/Templating.js';
const G: AnyRecord = Highcharts;
// Animation
G.animate = Animation.animate;
G.animObject = Animation.animObject;
G.getDeferredAnimation = Animation.getDeferredAnimation;
G.setAnimation = Animation.setAnimation;
G.stop = Animation.stop;
// Classes
G.Axis = Axis;
G.Chart = Chart;
G.chart = Chart.chart;
G.Legend = Legend;
G.Series = Series;
G.StackItem = StackItem;
G.SVGElement = SVGElement;
G.SVGRenderer = SVGRenderer;
G.Tooltip = Tooltip;
// Color
G.Color = Color;
G.color = Color.parse;
// Compositions
HTMLRenderer.compose(SVGRenderer);
HTMLElement.compose(SVGElement);
Legend.compose(Chart);
// DefaultOptions
G.defaultOptions = Defaults.defaultOptions;
G.getOptions = Defaults.getOptions;
G.time = Defaults.defaultTime;
G.setOptions = Defaults.setOptions;
// Format Utilities
G.dateFormat = Templating.dateFormat;
G.format = Templating.format;
G.numberFormat = Templating.numberFormat;
// Utilities

// Compositions
ColumnDataLabel.compose(ColumnSeries);
DataLabel.compose(Series);
DateTimeAxis.compose(Axis);
Responsive.compose(Chart);
StackingAxis.compose(Axis, Chart, Series);
Tooltip.compose(Pointer);
// Default Export
export default G;
