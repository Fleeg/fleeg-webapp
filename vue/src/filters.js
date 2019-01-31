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

export function typeIcon (value) {
  const prefix = 'file-'
  let type = 'alt'

  if (value === 'pdf') {
    type = 'pdf'
  } else if (value === 'doc') {
    type = 'word'
  } else if (value === 'ppt') {
    type = 'powerpoint'
  }

  return prefix + type
}

export function dateMMYYYY (value) {
  const formatter = new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric', year: 'numeric' })
  return formatter.format(value)
}

export function dateMMDD (value) {
  const formatter = new Intl.DateTimeFormat('en-us', { month: 'short', day: 'numeric' })
  return formatter.format(value)
}
