#target illustrator

/*
DONT_DIE_IMAGE_TRACE.jsx
Validated normal-cosmetic trace baseline:
- Color
- Automatic/Limited palette, max 30 colors
- Paths 25%
- Corners 70%
- Noise 4 px
- Fills only
- Ignore White
- Intended method: Abutting
- Auto-expand enabled by default

Select one or more PlacedItem/RasterItem objects and run this script.
*/

(function () {
    if (app.documents.length === 0) {
        alert("Open an Illustrator document first.");
        return;
    }

    var doc = app.activeDocument;
    var sel = doc.selection;

    if (!sel || sel.length === 0) {
        alert("Select one or more placed/raster images first.");
        return;
    }

    var AUTO_EXPAND = true;

    // Illustrator scripting uses internal units rather than the panel percentages.
    // Validated UI baseline mapping:
    // Paths 25%   -> pathFitting ~7.5 on Illustrator's 0..10 scale
    // Corners 70% -> corner threshold ~54 degrees on Illustrator's 0..180 scale
    // Noise 4 px  -> minArea 4
    var PATH_FITTING = 7.5;
    var CORNER_ANGLE = 54;
    var MIN_AREA = 4;

    var items = [];
    for (var i = 0; i < sel.length; i++) {
        if (sel[i].typename === "PlacedItem" || sel[i].typename === "RasterItem") {
            items.push(sel[i]);
        }
    }

    if (items.length === 0) {
        alert("Selection contains no PlacedItem or RasterItem objects.");
        return;
    }

    var traces = [];
    var failed = 0;

    for (var j = 0; j < items.length; j++) {
        try {
            var plugin = items[j].trace();
            var tracing = plugin.tracing;
            var o = tracing.tracingOptions;

            o.tracingMode = TracingModeType.TRACINGMODECOLOR;
            o.palette = "";
            o.maxColors = 30;
            o.pathFitting = PATH_FITTING;
            o.cornerAngle = CORNER_ANGLE;
            o.minArea = MIN_AREA;
            o.preprocessBlur = 0;
            o.fills = true;
            o.strokes = false;
            o.ignoreWhite = true;
            o.outputToSwatches = false;
            o.livePaintOutput = false;

            traces.push(tracing);
        } catch (e) {
            failed++;
        }
    }

    // Illustrator tracing is asynchronous; force completion before expand.
    app.redraw();
    doc.selection = null;

    var expanded = 0;
    for (var k = 0; k < traces.length; k++) {
        try {
            if (AUTO_EXPAND) {
                var group = traces[k].expandTracing(false);
                group.selected = true;
                expanded++;
            } else {
                traces[k].parent.selected = true;
            }
        } catch (e2) {
            failed++;
        }
    }

    app.redraw();

    if (failed > 0) {
        alert(
            "Don't Die trace completed with " + failed + " item(s) skipped/failed.\n" +
            (AUTO_EXPAND ? (expanded + " item(s) expanded.") : "Live traces left selected.")
        );
    }
})();
