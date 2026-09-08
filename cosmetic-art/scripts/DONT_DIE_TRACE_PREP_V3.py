#!/usr/bin/env python3
"""
DONT_DIE_TRACE_PREP_V3.py

Batch prepares normal Don't Die cosmetic rasters for Illustrator Image Trace.
Validated pipeline:
1. Detect non-white artwork conservatively.
2. Reconstruct/smooth the OUTER artwork silhouette at 4x.
3. Preserve original interior colors with Lanczos enlargement.
4. Composite on pure white.
5. Apply a very light 4x final blur to remove residual pixel chatter.

Usage:
    python DONT_DIE_TRACE_PREP_V3.py file1.png file2.png ...
or:
    python DONT_DIE_TRACE_PREP_V3.py input_folder output_folder

Requires: Pillow, numpy
"""

from pathlib import Path
import sys
import numpy as np
from PIL import Image, ImageFilter


def process_image(src: Path, dst: Path):
    with Image.open(src) as im:
        rgb = im.convert("RGB")
        arr = np.asarray(rgb).astype(np.int16)

        dist = 255 - arr.min(axis=2)
        mask = Image.fromarray((dist > 10).astype(np.uint8) * 255, "L")

        size4 = (rgb.width * 4, rgb.height * 4)

        mask4 = mask.resize(size4, Image.Resampling.LANCZOS)
        mask4 = mask4.filter(ImageFilter.GaussianBlur(radius=1.6))
        mask4 = mask4.point(lambda p: 255 if p >= 128 else 0)

        color4 = rgb.resize(size4, Image.Resampling.LANCZOS)

        result = Image.composite(color4, Image.new("RGB", size4, "white"), mask4)
        result = result.filter(ImageFilter.GaussianBlur(radius=0.35))

        dst.parent.mkdir(parents=True, exist_ok=True)
        result.save(dst, "PNG", compress_level=1)


def main():
    args = [Path(x) for x in sys.argv[1:]]

    if len(args) == 2 and args[0].is_dir():
        inp, out = args
        files = sorted(inp.glob("*.png"))
        if not files:
            raise SystemExit("No PNG files found.")
        for src in files:
            dst = out / f"{src.stem}_TRACE_V3_4X.png"
            process_image(src, dst)
            print(dst)
        return

    if not args:
        raise SystemExit("Pass PNG files, or input_folder output_folder.")

    for src in args:
        if not src.is_file():
            print(f"Skipping missing file: {src}")
            continue
        dst = src.with_name(f"{src.stem}_TRACE_V3_4X.png")
        process_image(src, dst)
        print(dst)


if __name__ == "__main__":
    main()
