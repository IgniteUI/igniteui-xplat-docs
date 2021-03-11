---
title: $PlatformShort$ Financial Chart | Data Visualization | Infragistics
_description: Infragistics' $PlatformShort$ Financial Chart
_keywords: $PlatformShort$ Charts, Financial Chart, Infragistics
mentionedTypes: ["XamFinancialChart"]
---
# $PlatformShort$ Financial Chart

$PlatformShort$ Stock Chart, sometimes referred to as $PlatformShort$ Candlestick Chart, is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Stock ticker represents the company data (a ticker symbol, usually 1 to 5 characters) that you are analyzing. Stock charts show stock prices for a ticker over time in a Time Series X-Axis. Stock charts also show information for a company’s ticker data like Open Price, High Price, Low Price and Close Price (OHLC) for each time-period. The $PlatformShort$ Stock chart offers multiple ways in which the data can then be visualized and interpreted, including display modes for price and volume and a host of financial indicators. 

The typical stock chart is represented with ticker data in a candlestick chart which is used for the technical analysis of the price ranges. A candlestick chart compares the high and low prices of a day to the open and close of the ticker symbol.

- The body of the candlestick chart shows the open and close trade values (O/C).
- The wicks of the candlestick chart show the high and low trade prices (H/L).
- The distance between the top and bottom of the ticker value is the day range of the ticker price.
- The candlestick chart ticker value is hollow when the asset closed higher than it opened.
- The candlestick chart ticker value is filled when the asset closed lower than it opened.
- A black or red candle represents a price with a lower closing price than the prior candle's close.
- A white or green candle represents a higher closing price than the prior candle's close.

As a Stock Chart is meant to allow the user to perform data analysis functions, it includes interactive elements such as:

- Time-based Filters
- Prices View 
- Volume View
- Indicators View
- Trend Lines
- Navigation / Zoombar View

The type of Angular Stock Chart can be set to display one of the following: 

- Candlestick Chart 
- Bar Chart 
- Column Chart 
- Line Chart 

Data Structure:

- The data source must be an array or a list of data items.
- The data source must contain at least one data item.
- All data items must contain at least one date-time (or string) column that represents the date of the ticker data.
- All data items must contain 1 numeric column for Bar, Line, and Column chart.
- All data items must contain 4 numeric columns for Open, High, Low, Close (OHLC) for a Candlestick chart.
- All data items must contain 5 numeric columns for Open, High, Low, Close and Volume for a Candlestick chart.

## $PlatformShort$ Stock Chart with Multiple Series

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Stock Index Chart"></iframe>
</div>

<div class="divider--half"></div>

<div class="divider--half"></div>

## $PlatformShort$ Stock Chart

In this example the financial chart is representing the S&P 500 over the course of a year; useful for investors and conducting technical analysis and forecasting future pricing/reports.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-stock-index-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Stock Index Chart"></iframe>
</div>

<div class="divider--half"></div>

## $PlatformShort$ Stock Chart Styling

If you need a Financial Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the financial chart is comparing revenue between Amazon, Microsoft and Tesla.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-styling-chart" src='{environment:dvDemosBaseUrl}/charts/financial-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Stock Index Chart"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO use this iframe which will point to a new sample:
<iframe src='{environment:dvDemosBaseUrl}/charts/category-chart-type-Line' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Financial Chart Example"></iframe> -->

## $PlatformShort$ Chart Annotations


<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-annotations" src='{environment:dvDemosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Chart Annotations"></iframe>
</div>

<div class="divider--half"></div>

## $PlatformShort$ Chart Panes

In this example, the financial chart is plotting revenue for United States.

<div class="sample-container loading" style="height: 400px">
    <iframe id="fc-chart-panes" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="$PlatformShort$ Chart Panes"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO list API links used in this topic 
## API Members
-->