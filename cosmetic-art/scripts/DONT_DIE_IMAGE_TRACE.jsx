#target illustrator

/*
DONT_DIE_IMAGE_TRACE.jsx
VALIDATED production Illustrator step for normal flat cosmetics.

Select exactly ONE PlacedItem or RasterItem.

Trace settings:
- Color
- Max Colors: 30
- pathFitting: 1.5
- cornerAngle: 35
- minArea: 2
- Fills ON
- Strokes OFF
- Ignore White OFF

Sequence:
1. Image Trace
2. Expand Image Trace
3. Live Pathfinder Divide
4. Expand Appearance (bakes scripted live Divide)
5. Ungroup

The final Expand Appearance is required because ExtendScript invokes the live-effect
Pathfinder Divide command rather than the destructive Pathfinder-panel button.
The final artwork is ordinary vector paths for responsive manual cleanup/deletion.
*/

(function () {
    if (app.documents.length === 0) {
        alert("Open an Illustrator document first.");
        return;
    }

    var doc = app.activeDocument;
    var sel = doc.selection;

    if (!sel || sel.length !== 1) {
        alert("Select exactly ONE placed/raster image.");
        return;
    }

    var item = sel[0];
    if (item.typename !== "PlacedItem" && item.typename !== "RasterItem") {
        alert("Selection must be a PlacedItem or RasterItem.");
        return;
    }

    try {
        var plugin = item.trace();
        var tracing = plugin.tracing;
        var o = tracing.tracingOptions;

        o.tracingMode = TracingModeType.TRACINGMODECOLOR;
        o.palette = "";
        o.maxColors = 30;
        o.pathFitting = 1.5;
        o.cornerAngle = 35;
        o.minArea = 2;
        o.preprocessBlur = 0;
        o.fills = true;
        o.strokes = false;
        o.ignoreWhite = false;
        o.outputToSwatches = false;
        o.livePaintOutput = false;

        app.redraw();
        doc.selection = null;

        var expanded = tracing.expandTracing(false);
        expanded.selected = true;
        app.redraw();

        app.executeMenuCommand("Live Pathfinder Divide");
        app.redraw();

        app.executeMenuCommand("expandStyle");
        app.redraw();

        app.executeMenuCommand("ungroup");
        app.redraw();

    } catch (e) {
        alert("Don't Die trace failed:\n" + e);
    }
})();
