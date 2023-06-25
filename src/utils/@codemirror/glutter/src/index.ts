import { gutter, GutterMarker } from "@codemirror/view"
import { Extension } from '@codemirror/state';

function addPlusGutter() {
  const plusMarker = new class extends GutterMarker {
    toDOM() { return document.createTextNode('\u{2795}') }
  }
  return gutter({
    lineMarker(view, line) {
      return plusMarker
    },
    initialSpacer: () => plusMarker
  })
}

export const linesAddPlusGutter: Extension = [addPlusGutter()];