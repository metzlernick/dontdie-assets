#target illustrator

/*
DONT_DIE_IMAGE_TRACE.jsx
Validated normal-cosmetic trace baseline:
- Color
- Max colors: 30
- Paths: 25%
- Corners: 70%
- Noise: 4 px
- Fills only
- Ignore White: OFF
- Auto-expand: ON

RECOMMENDED USE:
Select exactly ONE PlacedItem or RasterItem and run the script.
One-at-a-time execution is intentional for reliability and easier QC.
*/

(function () {
    if (app.documents.length === 0) {
        alert("Open an Illustrator document first.");
        return;
    }

    var doc = app.activeDocument;
    var sel = doc.selection;

    if (!sel || sel.length !== 1) {
        alert("Select exactly ONE placed/raster image, then run Don't Die Trace.");
        return;
    }

    var item = sel[0];
    if (item.typename !== "PlacedItem" && item.typename !== "RasterItem") {
        alert("The selected object must be a PlacedItem or RasterItem.");
        return;
    }

    var AUTO_EXPAND = true;

    // Validated UI baseline mapping.
    // Paths 25%   -> pathFitting ~7.5
    // Corners 70% -> cornerAngle ~54 degrees
    // Noise 4 px  -> minArea 4
    var PATH_FITTING = 7.5;
    var CORNER_ANGLE = 54;
    var MIN_AREA = 4;

    try {
        var plugin = item.trace();
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

        // Keep white: "Ignore Color: White" remains unchecked.
        o.ignoreWhite = false;

        o.outputToSwatches = false;
        o.livePaintOutput = false;

        // Illustrator tracing completes asynchronously.
        app.redraw();
        doc.selection = null;

        if (AUTO_EXPAND) {
            var group = tracing.expandTracing(false);
            group.selected = true;
        } else {
            plugin.selected = true;
        }

        app.redraw();

    } catch (e) {
        alert("Don't Die trace failed:\n" + e);
    }
})();
