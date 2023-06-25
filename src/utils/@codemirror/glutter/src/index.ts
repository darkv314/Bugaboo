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
          // console.log(view.state.sliceDoc(line.from, line.to)) // !INFO: get line text

          console.log(view.state.doc.lineAt(line.from))// !INFO: get line text and position

          return true
        }
      }
    }),
  ]

  return breakpointGutter;
}

export const linesAddPlusGutter: Extension = [addPlusGutter()];