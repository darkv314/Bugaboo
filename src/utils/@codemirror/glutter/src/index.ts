import { EditorView, gutter, GutterMarker } from "@codemirror/view"
import { Extension } from '@codemirror/state';
import { StateField, StateEffect, RangeSet } from "@codemirror/state"

function addPlusGutter() {
  const pluspointMarker = new class extends GutterMarker {
    toDOM() { return document.createTextNode("\u{2795}") }
  }


  const breakpointGutter = [
    gutter({
      lineMarker: () => pluspointMarker,
      initialSpacer: () => pluspointMarker,
      domEventHandlers: {
        mousedown(view, line, event) {
          console.log("mousedown", view)
          return true
        }
      }
    }),
  ]

  return breakpointGutter;
}

export const linesAddPlusGutter: Extension = [addPlusGutter()];