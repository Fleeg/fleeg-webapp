export function shortNumber (value) {
  let valueStr = value.toString()
  const valueSize = valueStr.length

  if (valueSize > 4) {
    valueStr = `${valueStr.slice(0, -3)}k`
  } else if (valueSize > 3) {
    valueStr = `${valueStr[0]}.${valueStr[1]}k`
  }

  return valueStr
}

export function dateMMYYYY (value) {
  const formatter = new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric', year: 'numeric' })
  return formatter.format(value)
}

export function dateMMDD (value) {
  const formatter = new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' })
  return formatter.format(value)
}
