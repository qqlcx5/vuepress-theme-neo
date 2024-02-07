# vuepress-plugin-chart@next

[![npm](https://img.shields.io/npm/v/vuepress-plugin-chart/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-plugin-chart/v/next) [![docs](https://img.shields.io/badge/Docs-vuepress--plugin--chart-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/chart.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `vuepress-plugin-chart@next` for adding JavaScript charting library [Chart.js](https://www.chartjs.org) to [VuePress 2](https://v2.vuepress.vuejs.org/) to create interactive charts in Markdown.

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/chart.html)


&nbsp;

## Install

```bash
# pnpm
pnpm install vuepress-plugin-chart@next
# yarn
yarn add vuepress-plugin-chart@next
# npm
npm install vuepress-plugin-chart@next
```

Then add it to your `.vuepress/config.js`:

```js
const { chartPlugin } = require("vuepress-plugin-chart");

module.exports = {
  plugins: [
    chartPlugin()
  ]
}
```


&nbsp;

## Options

### token

- Type: `string`

- Default: `"chart"`

- Details: Custom token of the fenced code block.


&nbsp;

## Usage

The token info of the code block should be `chart` (or `options.token` if you set), for example:

~~~json
```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [10, 20, 30],
      "backgroundColor": [
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(54, 162, 235)"
      ]
    }],
    "labels": ["Red", "Yellow", "Blue"]
  }
}
```
~~~

**Notice:** The **key** should be in quotes, or some unexpected errors will occured.

Functions should be stringified before being passed through `callback`. The following example shows how to change the tick marks of y-axis using `callback`:

~~~json
```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "Salary",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return '￥' + value + 'k'; }"
        }
      }
    }
  }
}
```
~~~

Refer to the [documentation of Chart.js](https://www.chartjs.org/docs/latest/) for more information.


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE)
