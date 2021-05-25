// this file defines redirects for xplat topics and generates redirect rules
// that are inserted in the "web.config" file in this repo
// when you execute the "npm run generateRedirects" command in VS terminal

// see TODO comments to complete SEO redirects for React/WC topics in the 21.2 release

// definition of platforms and regular expression that matches their URLs
var platforms: any[] = [
    // note that double backslashes (\\) are required in these regular expressions
    { name: "Angular",  match: "^(products\\/ignite-ui-angular\\/angular\\/components)/" },
    { name: "Blazor",   match: "^(products\\/ignite-ui-blazor\\/blazor\\/components)/" },
    { name: "React",    match: "^(products\\/ignite-ui-react\\/react\\/components)/" },
    { name: "WC",       match: "^(products\\/ignite-ui-web-components\\/web-components\\/components)/" },
    { name: "XPLAT",    match: "^(products\\/ignite-ui-.*\\/.*\\/components)\\/" },
];

// this array contains config for redirects
var configurations: any[] = [
    // redirects for previously renamed topics across all platforms
    { platforms: ["XPLAT"],
      redirects: [
        { from: "spreadsheet_overview.html$", to: "spreadsheet-overview" },
        { from: "spreadsheet_activation.html$", to: "spreadsheet-activation" },
        { from: "spreadsheet_clipboard.html$", to: "spreadsheet-clipboard" },
        { from: "spreadsheet_configuring.html$", to: "spreadsheet-configuring" },
        { from: "spreadsheet_commands.html$", to: "spreadsheet-commands" },
        { from: "spreadsheet_hyperlinks.html$", to: "spreadsheet-hyperlinks" },
        { from: "spreadsheet_chart_adapter.html$", to: "spreadsheet-chart-adapter" },
        { from: "spreadsheet_conditional_formatting.html$", to: "spreadsheet-conditional-formatting" },
        { from: "spreadsheet_data_validation.html$", to: "spreadsheet-data-validation" },
        { from: "excel_library.html$", to: "excel-library" },
        { from: "excel_library_using_cells.html$", to: "excel-library-using-cells" },
        { from: "excel_library_using_tables.html$", to: "excel-library-using-tables" },
        { from: "excel_library_using_workbooks.html$", to: "excel-library-using-workbooks" },
        { from: "excel_library_using_worksheets.html$", to: "excel-library-using-worksheets" },
        { from: "excel_library_working_with_charts.html$", to: "excel-library-working-with-charts" },
        { from: "excel_library_working_with_sparklines.html$", to: "excel-library-working-with-sparklines" },
        { from: "excel_utility.html$", to: "excel-utility" },
        { from: "map_overview.html$", to: "geo-map" },
        { from: "map_binding_geographic_csv_files.html$", to: "geo-map-binding-data-csv" },
        { from: "map_binding_geographic_json_files.html$", to: "geo-map-binding-data-json-points" },
        { from: "map_binding_geographic_data_models.html$", to: "eo-map-binding-data-model" },
        { from: "map_binding_geographic_shape_files.html$", to: "geo-map-binding-shp-file" },
        { from: "map_binding_multiple_shapes_files.html$", to: "geo-map-binding-multiple-shapes" },
        { from: "map_binding_multiple_data_sources.html$", to: "geo-map-binding-multiple-sources" },
        { from: "map_displaying_bing_imagery.html$", to: "geo-map-display-bing-imagery" },
        { from: "map_displaying_esri_imagery.html$", to: "geo-map-display-esri-imagery" },
        { from: "map_displaying_heat_imagery.html$", to: "geo-map-display-heat-imagery" },
        { from: "map_displaying_osm_imagery.html$", to: "geo-map-display-osm-imagery" },
        { from: "map_navigating_map_content.html$", to: "geo-map-navigation" },
        { from: "map_geographic_scatter_area_series.html$", to: "geo-map-type-scatter-area-series" },
        { from: "map_geographic_scatter_contour_series.html$", to: "geo-map-type-scatter-contour-series" },
        { from: "map_geographic_scatter_density_series.html$", to: "geo-map-type-scatter-density-series" },
        { from: "map_geographic_scatter_proportional_series.html$", to: "geo-map-type-scatter-bubble-series" },
        { from: "map_geographic_scatter_symbol_series.html$", to: "geo-map-type-scatter-symbol-series" },
        { from: "map_geographic_shape_polygon_series.html$", to: "geo-map-type-shape-polygon-series" },
        { from: "map_geographic_shape_polyline_series.html$", to: "geo-map-type-shape-polyline-series" },
        { from: "map_resources_world_connections.html$", to: "geo-map-resources-world-connections" },
        { from: "map_resources_world_locations.html$", to: "geo-map-resources-world-locations" },
        { from: "map_resources_world_util.html$", to: "geo-map-resources-world-util" },
        { from: "bulletgraph.html$", to: "bullet-graph" },
        { from: "lineargauge.html$", to: "linear-gauge" },
        { from: "radialgauge.html$", to: "radial-gauge" },
        { from: "zoomslider_overview.html$", to: "zoomslider-overview" },
      ]
    },
    // redirects for renamed React data-grid topics
    { platforms: ["React"],
      redirects: [
        // NOTE keep the following redirects here
        { from: "grid_table.html$", to: "data-grid" },
        { from: "grid_table_remote_databinding.html$", to: "data-grid-remote-data" },
        { from: "grid_table_cell_activation.html$", to: "data-grid-cell-activation" },
        { from: "grid_table_cell_selection.html$", to: "data-grid-cell-selection" },
        { from: "grid_table_column_animation.html$", to: "data-grid-column-animation" },
        { from: "grid_table_column_filtering.html$", to: "data-grid-column-filtering" },
        { from: "grid_table_column_moving.html$", to: "data-grid-column-moving" },
        { from: "grid_table_column_resizing.html$", to: "data-grid-column-resizing" },
        { from: "grid_table_column_sorting.html$", to: "data-grid-column-sorting" },
        { from: "grid_table_column_sparkline.html$", to: "data-grid-type-sparkline-table" },
        { from: "grid_table_column_types.html$", to: "data-grid-column-types" },
        { from: "grid_table_performance.html$", to: "data-grid-performance" },
        { from: "grid_table_horizontal_scrolling.html$", to: "data-grid-horizontal-scrolling" },
        { from: "grid_table_row_grouping.html$", to: "data-grid-row-grouping" },
        { from: "grid_table_row_paging.html$", to: "data-grid-row-paging" },
        { from: "grid_table_row_pinning.html$", to: "data-grid-row-pinning" },
    ]},
    // redirects for renamed topics only for React/WC
    { platforms: ["React", "WC"],
      // TODO remove the following redirects when React/WC topics have SEO improvement samples
      redirects: [
        { from: "categorychart.md$",                                 to: "category-chart" },
        { from: "categorychart.html$",                               to: "category-chart" },
        { from: "categorychart_annotation_layers.md$",               to: "category-chart-annotations" },
        { from: "categorychart_annotation_layers.html$",             to: "category-chart-annotations" },
        { from: "categorychart_axis_options.md$",                    to: "category-chart-axis-options" },
        { from: "categorychart_axis_options.html$",                  to: "category-chart-axis-options" },
        { from: "categorychart_real_time_data.md$",                  to: "category-chart-high-frequency" },
        { from: "categorychart_real_time_data.html$",                to: "category-chart-high-frequency" },
        { from: "categorychart_high_volume_data.md$",                to: "category-chart-high-volume" },
        { from: "categorychart_high_volume_data.html$",              to: "category-chart-high-volume" },
        { from: "categorychart_configuration_options.md$",           to: "category-chart-config-options" },
        { from: "categorychart_configuration_options.html$",         to: "category-chart-config-options" },
        { from: "categorychart_highlighting.md$",                    to: "category-chart-highlighting" },
        { from: "categorychart_highlighting.html$",                  to: "category-chart-highlighting" },
        { from: "categorychart_tooltip_types.md$",                   to: "category-chart-tooltip-types" },
        { from: "categorychart_tooltip_types.html$",                 to: "category-chart-tooltip-types" },
        { from: "categorychart_tooltip_templates.md$",               to: "category-chart-tooltip-types" },
        { from: "categorychart_tooltip_templates.html$",             to: "category-chart-tooltip-types" },
        { from: "datachart.md$",                                     to: "data-chart" },
        { from: "datachart.html$",                                   to: "data-chart" },
        { from: "datachart_axis_types.md$",                          to: "data-chart-axis-types" },
        { from: "datachart_axis_types.html$",                        to: "data-chart-axis-types" },
        { from: "datachart_axis_annotations.md$",                    to: "data-chart-axis-annotations" },
        { from: "datachart_axis_annotations.html$",                  to: "data-chart-axis-annotations" },
        { from: "datachart_axis_settings.html$",                     to: "data-chart-axis-settings" },
        { from: "datachart_axis_settings.md$",                       to: "data-chart-axis-settings" },
        { from: "datachart_axis_sharing.html$",                      to: "data-chart-axis-sharing" },
        { from: "datachart_axis_sharing.md$",                        to: "data-chart-axis-sharing" },
        { from: "datachart_chart_legends.md$",                       to: "data-chart-legends" },
        { from: "datachart_chart_legends.html$",                     to: "data-chart-legends" },
        { from: "datachart_chart_navigation.md$",                    to: "data-chart-navigation" },
        { from: "datachart_chart_navigation.html$",                  to: "data-chart-navigation" },
        { from: "datachart_chart_synchronization.md$",               to: "data-chart-synchronization" },
        { from: "datachart_chart_synchronization.html$",             to: "data-chart-synchronization" },
        { from: "datachart_chart_titles.html$",                      to: "data-chart-titles" },
        { from: "datachart_chart_titles.md$",                        to: "data-chart-titles" },
        { from: "datachart_data_sources.md$",                        to: "data-chart-data-sources" },
        { from: "datachart_data_sources.html$",                      to: "data-chart-data-sources" },
        { from: "datachart_series_annotations.md$",                  to: "data-chart-series-annotations" },
        { from: "datachart_series_annotations.html$",                to: "data-chart-series-annotations" },
        { from: "datachart_series_highlighting.md$",                 to: "data-chart-series-highlighting" },
        { from: "datachart_series_highlighting.html$",               to: "data-chart-series-highlighting" },
        { from: "datachart_series_markers.md$",                      to: "data-chart-series-markers" },
        { from: "datachart_series_markers.html$",                    to: "data-chart-series-markers" },
        { from: "datachart_series_tooltips.md$",                     to: "data-chart-series-tooltips" },
        { from: "datachart_series_tooltips.html$",                   to: "data-chart-series-tooltips" },
        { from: "datachart_series_trendlines.md$",                   to: "data-chart-series-trendlines" },
        { from: "datachart_series_trendlines.html$",                 to: "data-chart-series-trendlines" },
        { from: "datachart_series_value_overlay.md$",                to: "data-chart-value-overlay" },
        { from: "datachart_series_value_overlay.html$",              to: "data-chart-value-overlay" },
        { from: "datachart_series_types.html$",                      to: "data-chart-series-types" },
        { from: "datachart_series_types.md$",                        to: "data-chart-series-types" },
        { from: "datachart_series_types_category.md$",               to: "data-chart-series-types" },
        { from: "datachart_series_types_category.html$",             to: "data-chart-series-types" },
        { from: "datachart_series_types_financial.md$",              to: "data-chart-types-overview-financial" },
        { from: "datachart_series_types_financial.html$",            to: "data-chart-types-overview-financial" },
        { from: "datachart_series_types_polar.md$",                  to: "data-chart-type-polar-line-series" },
        { from: "datachart_series_types_polar.html$",                to: "data-chart-type-polar-line-series" },
        { from: "datachart_series_types_radial.md$",                 to: "data-chart-type-radial-line-series" },
        { from: "datachart_series_types_radial.html$",               to: "data-chart-type-radial-line-series" },
        { from: "datachart_series_types_range.md$",                  to: "data-chart-type-range-column-series" },
        { from: "datachart_series_types_range.html$",                to: "data-chart-type-range-column-series" },
        { from: "datachart_series_types_scatter_bubble.md$",         to: "data-chart-type-scatter-bubble-series" },
        { from: "datachart_series_types_scatter_bubble.html$",       to: "data-chart-type-scatter-bubble-series" },
        { from: "datachart_series_types_scatter_area.md$",           to: "data-chart-type-scatter-area-series" },
        { from: "datachart_series_types_scatter_area.html$",         to: "data-chart-type-scatter-area-series" },
        { from: "datachart_series_types_scatter_contour.md$",        to: "data-chart-type-scatter-contour-series" },
        { from: "datachart_series_types_scatter_contour.html$",      to: "data-chart-type-scatter-contour-series" },
        { from: "datachart_series_types_scatter_marker.md$",         to: "data-chart-type-scatter-point-series" },
        { from: "datachart_series_types_scatter_marker.html$",       to: "data-chart-type-scatter-point-series" },
        { from: "datachart_series_types_shape.md$",                  to: "data-chart-type-scatter-polygon-series" },
        { from: "datachart_series_types_shape.html$",                to: "data-chart-type-scatter-polygon-series" },
        { from: "datachart_series_types_stacked.md$",                to: "data-chart-type-stacked-column-series" },
        { from: "datachart_series_types_stacked.html$",              to: "data-chart-type-stacked-column-series" },
        { from: "financialchart.html$",                              to: "financial-chart" },
        { from: "financialchart_binding_live_data.html$",            to: "financial-chart-high-frequency" },
        { from: "financialchart_binding_large_data.html$",           to: "financial-chart-high-volume" },
        { from: "financialchart_binding_multiple_sources.html$",     to: "financial-chart-multiple-data" },
        { from: "financialchart_chart_annotations.html$",            to: "financial-chart-chart-annotations" },
        { from: "financialchart_chart_configuration.html$",          to: "financial-chart" },
        { from: "financialchart_chart_display_types.html$",          to: "financial-chart" },
        { from: "financialchart_chart_panes.html$",                  to: "financial-chart-chart-panes" },
        { from: "financialchart_chart_performance.html$",            to: "financial-chart-chart-performance" },
        { from: "financialchart_custom_indicators.html$",            to: "financial-chart" },
        { from: "financialchart_tooltip_types.html$",                to: "financial-chart" },
        { from: "financialchart_tooltip_templates.html$",            to: "financial-chart" },
        { from: "doughnutchart.md$",                                 to: "doughnut-chart" },
        { from: "doughnutchart.html$",                               to: "doughnut-chart" },
        { from: "piechart.md$",                                      to: "pie-chart" },
        { from: "piechart.html$",                                    to: "pie-chart" },
    ]},
    // redirects for renamed topics only for Angular/Blazor
    { platforms: ["Angular", "Blazor"],
      // TODO move all these redirects to XPLAT redirects when React/WC topics have SEO improvement samples
      redirects: [
        { from: "categorychart.md$", to: "charts/chart-overview" },
        { from: "categorychart.html$", to: "charts/chart-overview" },
        { from: "categorychart_annotation_layers.md$", to: "charts/features/chart-annotations" },
        { from: "categorychart_annotation_layers.html$", to: "charts/features/chart-annotations" },
        { from: "categorychart_axis_options.md$", to: "charts/features/chart-axis-options" },
        { from: "categorychart_axis_options.html$", to: "charts/features/chart-axis-options" },
        { from: "categorychart_real_time_data.md$", to: "charts/features/chart-performance" },
        { from: "categorychart_real_time_data.html$", to: "charts/features/chart-performance" },
        { from: "categorychart_high_volume_data.md$", to: "charts/features/chart-performance" },
        { from: "categorychart_high_volume_data.html$", to: "charts/features/chart-performance" },
        { from: "categorychart_configuration_options.md$", to: "charts/chart-overview" },
        { from: "categorychart_configuration_options.html$", to: "charts/chart-overview" },
        { from: "categorychart_highlighting.md$", to: "charts/features/chart-highlighting" },
        { from: "categorychart_highlighting.html$", to: "charts/features/chart-highlighting" },
        { from: "categorychart_tooltip_types.md$", to: "charts/features/chart-tooltips" },
        { from: "categorychart_tooltip_types.html$", to: "charts/features/chart-tooltips" },
        { from: "categorychart_tooltip_templates.md$", to: "charts/features/chart-tooltips" },
        { from: "categorychart_tooltip_templates.html$", to: "charts/features/chart-tooltips" },
        { from: "datachart.md$", to: "charts/chart-overview" },
        { from: "datachart.html$", to: "charts/chart-overview" },
        { from: "datachart_axis_types.md$", to: "charts/chart-features" },
        { from: "datachart_axis_types.html$", to: "charts/chart-features" },
        { from: "datachart_axis_annotations.md$", to: "charts/features/chart-annotations" },
        { from: "datachart_axis_annotations.html$", to: "charts/features/chart-annotations" },
        { from: "datachart_axis_settings.html$", to: "charts/features/chart-axis-options" },
        { from: "datachart_axis_settings.md$", to: "charts/features/chart-axis-options" },
        { from: "datachart_axis_sharing.html$", to: "charts/features/chart-axis-layouts" },
        { from: "datachart_axis_sharing.md$", to: "charts/features/chart-axis-layouts" },
        { from: "datachart_chart_legends.md$", to: "charts/chart-overview" },
        { from: "datachart_chart_legends.html$", to: "charts/chart-overview" },
        { from: "datachart_chart_navigation.md$", to: "charts/features/chart-navigation" },
        { from: "datachart_chart_navigation.html$", to: "charts/features/chart-navigation" },
        { from: "datachart_chart_synchronization.md$", to: "charts/chart-features" },
        { from: "datachart_chart_synchronization.html$", to: "charts/chart-features" },
        { from: "datachart_chart_titles.html$", to: "charts/chart-overview" },
        { from: "datachart_chart_titles.md$", to: "charts/chart-overview" },
        { from: "datachart_data_sources.md$", to: "charts/chart-overview" },
        { from: "datachart_data_sources.html$", to: "charts/chart-overview" },
        { from: "datachart_series_annotations.md$", to: "charts/features/chart-annotations" },
        { from: "datachart_series_annotations.html$", to: "charts/features/chart-annotations" },
        { from: "datachart_series_highlighting.md$", to: "charts/features/chart-highlighting" },
        { from: "datachart_series_highlighting.html$", to: "charts/features/chart-highlighting" },
        { from: "datachart_series_markers.md$", to: "charts/features/chart-markers" },
        { from: "datachart_series_markers.html$", to: "charts/features/chart-markers" },
        { from: "datachart_series_tooltips.md$", to: "charts/features/chart-tooltips" },
        { from: "datachart_series_tooltips.html$", to: "charts/features/chart-tooltips" },
        { from: "datachart_series_trendlines.md$", to: "charts/features/chart-trendlines" },
        { from: "datachart_series_trendlines.html$", to: "charts/features/chart-trendlines" },
        { from: "datachart_series_value_overlay.md$", to: "charts/features/chart-overlays" },
        { from: "datachart_series_value_overlay.html$", to: "charts/features/chart-overlays" },
        { from: "datachart_series_types.html$", to: "charts/chart-overview" },
        { from: "datachart_series_types.md$", to: "charts/chart-overview" },
        { from: "datachart_series_types_category.md$", to: "charts/types/column-chart" },
        { from: "datachart_series_types_category.html$", to: "charts/types/column-chart" },
        { from: "datachart_series_types_financial.md$", to: "charts/types/stock-chart" },
        { from: "datachart_series_types_financial.html$", to: "charts/types/stock-chart" },
        { from: "datachart_series_types_polar.md$", to: "charts/types/polar-chart" },
        { from: "datachart_series_types_polar.html$", to: "charts/types/polar-chart" },
        { from: "datachart_series_types_radial.md$", to: "charts/types/radial-chart" },
        { from: "datachart_series_types_radial.html$", to: "charts/types/radial-chart" },
        { from: "datachart_series_types_range.md$", to: "charts/types/column-chart" },
        { from: "datachart_series_types_range.html$", to: "charts/types/column-chart" },
        { from: "datachart_series_types_scatter_bubble.md$", to: "charts/types/bubble-chart" },
        { from: "datachart_series_types_scatter_bubble.html$", to: "charts/types/bubble-chart" },
        { from: "datachart_series_types_scatter_area.md$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_scatter_area.html$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_scatter_contour.md$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_scatter_contour.html$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_scatter_marker.md$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_scatter_marker.html$", to: "charts/types/scatter-chart" },
        { from: "datachart_series_types_shape.md$", to: "charts/types/shape-chart" },
        { from: "datachart_series_types_shape.html$", to: "charts/types/shape-chart" },
        { from: "datachart_series_types_stacked.md$", to: "charts/types/stacked-chart" },
        { from: "datachart_series_types_stacked.html$", to: "charts/types/stacked-chart" },
        { from: "financialchart.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_binding_live_data.html$", to: "charts/features/chart-performance" },
        { from: "financialchart_binding_large_data.html$", to: "charts/features/chart-performance" },
        { from: "financialchart_binding_multiple_sources.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_chart_annotations.html$", to: "charts/features/chart-annotations" },
        { from: "financialchart_chart_configuration.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_chart_display_types.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_chart_panes.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_chart_performance.html$", to: "charts/features/chart-performance" },
        { from: "financialchart_custom_indicators.html$", to: "charts/types/stock-chart" },
        { from: "financialchart_tooltip_types.html$", to: "charts/features/chart-tooltips" },
        { from: "financialchart_tooltip_templates.html$", to: "charts/features/chart-tooltips" },
        { from: "doughnutchart.md$", to: "charts/types/donut-chart" },
        { from: "doughnutchart.html$", to: "charts/types/donut-chart" },
        { from: "piechart.md$", to: "charts/types/pie-chart" },
        { from: "piechart.html$", to: "charts/types/pie-chart" },
    ]},
    // redirects for new SEO topics
    { platforms: ["Angular", "Blazor"],
      // TODO move these redirects to XPLAT redirects when React/WC topics have SEO improvement samples
      redirects: [
        { from: "category-chart.html$", to: "charts/chart-overview" },
        { from: "category-chart-annotations.html$", to: "charts/features/chart-annotations" },
        { from: "category-chart-axis-options.html$", to: "charts/features/chart-axis-options" },
        { from: "category-chart-config-options.html$", to: "charts/features/chart-markers" },
        { from: "category-chart-high-volume.html$", to: "charts/features/chart-performance" },
        { from: "category-chart-highlighting.html$", to: "charts/features/chart-highlighting" },
        { from: "category-chart-high-frequency.html$", to: "charts/features/chart-performance" },
        { from: "category-chart-tooltip-types.html$", to: "charts/features/chart-tooltips" },
        { from: "data-chart.html$", to: "charts/chart-overview" },
        { from: "data-chart-axis-types.html$", to: "charts/chart-features" },
        { from: "data-chart-axis-annotations.html$", to: "charts/features/chart-annotations" },
        { from: "data-chart-axis-locations.html$", to: "charts/features/chart-axis-layouts" },
        { from: "data-chart-axis-settings.html$", to: "charts/features/chart-axis-options" },
        { from: "data-chart-axis-sharing.html$", to: "charts/features/chart-axis-layouts" },
        { from: "data-chart-data-sources.html$", to: "charts/chart-overview" },
        { from: "data-chart-legends.html$", to: "charts/chart-overview" },
        { from: "data-chart-navigation.html$", to: "charts/features/chart-navigation" },
        { from: "data-chart-synchronization.html$", to: "charts/chart-features" },
        { from: "data-chart-titles.html$", to: "charts/chart-features" },
        { from: "data-chart-series-types.html$", to: "charts/chart-overview" },
        { from: "data-chart-series-annotations.html$", to: "charts/features/chart-annotations" },
        { from: "data-chart-series-highlighting.html$", to: "charts/features/chart-highlighting" },
        { from: "data-chart-series-markers.html$", to: "charts/features/chart-markers" },
        { from: "data-chart-series-tooltips.html$", to: "charts/features/chart-tooltips" },
        { from: "data-chart-series-trendlines.html$", to: "charts/features/chart-trendlines" },
        { from: "data-chart-value-overlay.html$", to: "charts/features/chart-overlays" },
        { from: "data-chart-types-overview-area.html$", to: "charts/types/area-chart" },
        { from: "data-chart-types-overview-column.html$", to: "charts/types/column-chart" },
        { from: "data-chart-types-overview-line.html$", to: "charts/types/line-chart" },
        { from: "data-chart-types-overview-financial.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-types-overview-pie.html$", to: "charts/types/pie-chart" },
        { from: "data-chart-types-overview-point.html$", to: "charts/types/point-chart" },
        { from: "data-chart-type-category-point-series.html$", to: "charts/types/point-chart" },
        { from: "data-chart-type-category-area-series.html$", to: "charts/types/area-chart" },
        { from: "data-chart-type-category-bar-series.html$", to: "charts/types/bar-chart" },
        { from: "data-chart-type-category-column-series.html$", to: "charts/types/column-chart" },
        { from: "data-chart-type-category-spline-area-series.html$", to: "charts/types/spline-chart" },
        { from: "data-chart-type-category-step-area-series.html$", to: "charts/types/area-chart" },
        { from: "data-chart-type-category-step-line-series.html$", to: "charts/types/step-chart" },
        { from: "data-chart-type-category-waterfall-series.html$", to: "charts/types/column-chart" },
        { from: "data-chart-type-category-line-series.html$", to: "charts/types/line-chart" },
        { from: "data-chart-type-category-spline-series.html$", to: "charts/types/scatter-chart" },
        { from: "data-chart-type-financial-area-indicators.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-financial-candlestick-series.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-financial-column-indicators.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-financial-line-indicators.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-financial-ohlc-series.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-financial-overlays.html$", to: "charts/types/stock-chart" },
        { from: "data-chart-type-polar-area-series.html$", to: "charts/types/polar-chart" },
        { from: "data-chart-type-polar-spline-area-series.html$", to: "charts/types/polar-chart" },
        { from: "data-chart-type-polar-line-series.html$", to: "charts/types/polar-chart" },
        { from: "data-chart-type-polar-spline-series.html$", to: "charts/types/polar-chart" },
        { from: "data-chart-type-polar-scatter-series.html$", to: "charts/types/polar-chart" },
        { from: "data-chart-type-radial-area-series.html$", to: "charts/types/radial-chart" },
        { from: "data-chart-type-radial-column-series.html$", to: "charts/types/radial-chart" },
        { from: "data-chart-type-radial-pie-series.html$", to: "charts/types/radial-chart" },
        { from: "data-chart-type-radial-line-series.html$", to: "charts/types/radial-chart" },
        { from: "data-chart-type-range-area-series.html$", to: "charts/types/area-chart" },
        { from: "data-chart-type-range-column-series.html$", to: "charts/types/column-chart" },
        { from: "data-chart-type-scatter-area-series.html$", to: "charts/types/scatter-chart" },
        { from: "data-chart-type-scatter-polygon-series.html$", to: "charts/types/shape-chart" },
        { from: "data-chart-type-scatter-contour-series.html$", to: "charts/types/scatter-chart" },
        { from: "data-chart-type-scatter-line-series.html$", to: "charts/types/scatter-chart" },
        { from: "data-chart-type-scatter-polyline-series.html$", to: "charts/types/shape-chart" },
        { from: "data-chart-type-scatter-spline-series.html$", to: "charts/types/scatter-chart" },
        { from: "data-chart-type-scatter-bubble-series.html$", to: "charts/types/bubble-chart" },
        { from: "data-chart-type-scatter-point-series.html$", to: "charts/types/point-chart" },
        { from: "data-chart-type-stacked-area-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-bar-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-column-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-line-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-spline-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-spline-area-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-area-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-bar-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-column-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-line-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-spline-series.html$", to: "charts/types/stacked-chart" },
        { from: "data-chart-type-stacked-100-spline-area-series.html$", to: "charts/types/stacked-chart" },
        { from: "financial-chart.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-high-volume.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-multiple-data.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-high-frequency.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-annotations.html$", to: "charts/features/chart-annotations" },
        { from: "financial-chart-axis-types.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-panes.html$", to: "charts/types/stock-chart" },
        { from: "financial-chart-performance.html$", to: "charts/features/chart-performance" },
        { from: "financial-chart-trendlines.html$", to: "charts/types/stock-chart" },
        { from: "doughnut-chart.html$", to: "charts/types/donut-chart" },
        { from: "pie-chart.html$", to: "charts/types/pie-chart" },
        { from: "sparkline.html$", to: "charts/types/sparkline-chart" },
        { from: "treemap-overview.html$", to: "charts/types/treemap-chart" },
    ]},
];

// generates redirect rules for all platforms using above configuration arrays
export function generateRedirectRules(): string {

    // an example of redirect rule from UrlRewriting.config file:
    // ------------------------------------------
    // <rule name="Redirect for Ignite UI Angular categorychart_annotation_layers.md" enabled="true" stopProcessing="true">
    //     <match  url="^(products\/ignite-ui-angular\/angular\/components)\/categorychart_annotation_layers.md$" />   <conditions logicalGrouping="MatchAll" trackAllCaptures="false" />
    //     <action url="{R:1}/category-chart-annotations" type="Redirect" redirectType="Permanent" />
    // </rule>

    console.log(">> generating redirect rules... ");
    var ret = '\n';
    ret += '  <!-- ========================================================================================== --> \n';
    ret += '  <!-- warning: do not manually change the following rules because they are generated from        --> \n';
    ret += '  <!-- https://github.com/IgniteUI/igniteui-xplat-docs/blob/vnext/src/ext/RedirectManager.ts file --> \n';
    ret += '  <!-- by running "npm run generateRedirects" command which update "the web.config" file in:      --> \n';
    ret += '  <!-- https://github.com/IgniteUI/igniteui-xplat-docs/blob/vnext/web.config                      --> \n';
    ret += '  <!-- ========================================================================================== --> \n';

    // looping over all platforms in the order they are defined in the start of file
    // this way, all rules for a given platform are listed next to each other
    for (const platform of platforms) {
        var rules = '';
        let rulesCount = 0;
        // console.log(">> generating rules for " + platform.name + " platform");
        for (const config of configurations) {

            if (config.platforms.includes(platform.name)) {
                console.log(">> generating " + config.redirects.length + " redirect rules from '" + config.platforms.toString() + "' config");

                // looping over all redirects in a given config
                for (const redirect of config.redirects) {
                  let name = 'Redirect for Ignite UI ' + platform.name.toUpperCase() + ' topic: ' + redirect.from + '';
                  let matchURL = platform.match + redirect.from;

                  let actionURL = redirect.to;
                  if (!actionURL.startsWith('/')) actionURL = '/' + actionURL;

                  // ensure that redirects for the following platforms have .html in their URLs
                  if (platform.name === "Blazor" || platform.name === "React" ||
                      platform.name === "XPLAT" || platform.name === "WC") {
                    if (!actionURL.endsWith('.html'))
                         actionURL += '.html';
                  }

                  // TODO add logic for checking if the actionURL exists for .md file in ./doc/en/component folder

                  // generating redirect rule
                  rules += '  <rule name="' + name + '" enabled="true" stopProcessing="true"> \n';
                  rules += '     <match  url="' + matchURL + '" /> <conditions logicalGrouping="MatchAll" trackAllCaptures="false" /> \n';
                  rules += '     <action url="{R:1}' + actionURL + '" type="Redirect" redirectType="Permanent" /> \n';
                  rules += '  </rule> \n';
                  rulesCount++;
                }
            }
        }
        ret += '  <!-- auto-generated ' + rulesCount + ' rules for IgniteUI ' + platform.name.toUpperCase() + ' platform: --> \n';
        ret += rules;
        ret += '  <!-- ========================================================================================== --> \n';

        console.log(">> generated  " + rulesCount + " redirect rules for '" + platform.name + "' platform");
    }
    ret += '  <!-- end of auto-generated rules --> \n';

    // console.log("generateRedirectRules \n" + ret);
    console.log(">> generating redirect rules... done ");

    return ret;
}