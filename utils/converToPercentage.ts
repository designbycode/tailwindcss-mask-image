export default function convertToPercentage(value: number): string {
  value = value / 100
  return Math.abs(Math.min(value, 1)).toString()
}
