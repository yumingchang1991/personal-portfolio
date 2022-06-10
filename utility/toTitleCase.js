export default function toTitleCase(oneString) {
  const letters = [...oneString.trim().toLowerCase()]
  letters[0] = letters[0].toUpperCase()
  return letters.join('')
}