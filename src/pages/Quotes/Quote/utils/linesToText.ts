import { Line } from "../../../CreateQuote/CreateQuoteForm/CreateQuoteForm"

export function linesToText(lines: Line[]) {
  const text = lines.reduce((allText, line, idx) => {
    let newLine
    if (idx === lines.length - 1) {
      newLine = `${line.character}: ${line.line}`
    } else {
      newLine = `${line.character}: ${line.line}\n`
    }
    return allText + newLine
  }, "")
  return text
}
