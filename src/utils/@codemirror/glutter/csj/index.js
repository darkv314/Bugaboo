"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineNumbersRelative = void 0;
var _view = require("@codemirror/view");
function formatNumber() {
  return (0, _view.lineNumbers)({
    formatNumber: function formatNumber(lineNo, state) {
      if (lineNo > state.doc.lines) {
        return '0';
      }
      var cursorLine = state.doc.lineAt(state.selection.asSingle().ranges[0].to).number;
      if (lineNo === cursorLine) {
        return '0';
      } else {
        return Math.abs(cursorLine - lineNo).toString();
      }
    }
  });
}
var lineNumbersRelative = [formatNumber()];
exports.lineNumbersRelative = lineNumbersRelative;