type Options = {
  canvas: string[]
}

export type ContrastRequirement = [
  number, // minimumContrast
  string, // foregroundColor
  string, // backgroundColor
  Options?,
]
// basically for all non high contrast modes
const baseRequirements: ContrastRequirement[] = [
  // neutral text colors
  [4.5, 'fg.default', 'canvas.default'],
  [4.5, 'fg.muted', 'canvas.default'],
  [4.5, 'fg.subtle', 'canvas.default'],
  [4.5, 'fg.default', 'canvas.subtle'],
  [4.5, 'fg.muted', 'canvas.subtle'],
  [4.5, 'fg.default', 'canvas.inset'],
  [4.5, 'fg.muted', 'canvas.inset'],
  // default text vs link
  [3, 'fg.default', 'accent.fg'],
  [3, 'fg.default', 'fg.muted'],
  // default text on role bg
  // TODO: contrast does not work with semi-transparent colors
  [4.5, 'fg.default', 'accent.subtle'],
  [4.5, 'fg.default', 'success.subtle'],
  [4.5, 'fg.default', 'open.subtle'],
  [4.5, 'fg.default', 'danger.subtle'],
  [4.5, 'fg.default', 'closed.subtle'],
  [4.5, 'fg.default', 'attention.subtle'],
  [4.5, 'fg.default', 'severe.subtle'],
  [4.5, 'fg.default', 'done.subtle'],
  [4.5, 'fg.default', 'sponsors.subtle'],
  // role
  [4.5, 'accent.fg', 'canvas.default'],
  [4.5, 'accent.fg', 'canvas.subtle'],
  [4.5, 'accent.fg', 'canvas.inset'],
  [4.5, 'success.fg', 'canvas.default'],
  [4.5, 'success.fg', 'canvas.subtle'],
  [4.5, 'success.fg', 'canvas.inset'],
  [4.5, 'open.fg', 'canvas.default'],
  [4.5, 'open.fg', 'canvas.subtle'],
  [4.5, 'open.fg', 'canvas.inset'],
  [4.5, 'danger.fg', 'canvas.default'],
  [4.5, 'danger.fg', 'canvas.subtle'],
  [4.5, 'danger.fg', 'canvas.inset'],
  [4.5, 'closed.fg', 'canvas.default'],
  [4.5, 'closed.fg', 'canvas.subtle'],
  [4.5, 'closed.fg', 'canvas.inset'],
  [4.5, 'attention.fg', 'canvas.default'],
  [4.5, 'attention.fg', 'canvas.subtle'],
  [4.5, 'attention.fg', 'canvas.inset'],
  [4.5, 'severe.fg', 'canvas.default'],
  [4.5, 'severe.fg', 'canvas.subtle'],
  [4.5, 'severe.fg', 'canvas.inset'],
  [4.5, 'done.fg', 'canvas.default'],
  [4.5, 'done.fg', 'canvas.subtle'],
  [4.5, 'done.fg', 'canvas.inset'],
  [4.5, 'sponsors.fg', 'canvas.default'],
  [4.5, 'sponsors.fg', 'canvas.subtle'],
  [4.5, 'sponsors.fg', 'canvas.inset'],
  // role text on role bg
  [4.5, 'accent.fg', 'accent.subtle'],
  [4.5, 'success.fg', 'success.subtle'],
  [4.5, 'open.fg', 'open.subtle'],
  [4.5, 'danger.fg', 'danger.subtle'],
  [4.5, 'closed.fg', 'closed.subtle'],
  [4.5, 'attention.fg', 'attention.subtle'],
  [4.5, 'severe.fg', 'severe.subtle'],
  [4.5, 'done.fg', 'done.subtle'],
  [4.5, 'sponsors.fg', 'sponsors.subtle'],
  // role text to default text
  [3, 'accent.fg', 'fg.default'],
  [3, 'success.fg', 'fg.default'],
  [3, 'open.fg', 'fg.default'],
  [3, 'danger.fg', 'fg.default'],
  [3, 'closed.fg', 'fg.default'],
  [3, 'attention.fg', 'fg.default'],
  [3, 'severe.fg', 'fg.default'],
  [3, 'done.fg', 'fg.default'],
  [3, 'sponsors.fg', 'fg.default'],
  // fg.onEmphasis
  [4.5, 'fg.onEmphasis', 'neutral.emphasis'],
  [4.5, 'fg.onEmphasis', 'neutral.emphasisPlus'],
  [4.5, 'fg.onEmphasis', 'accent.emphasis'],
  [4.5, 'fg.onEmphasis', 'success.emphasis'],
  [4.5, 'fg.onEmphasis', 'open.emphasis'],
  [4.5, 'fg.onEmphasis', 'danger.emphasis'],
  [4.5, 'fg.onEmphasis', 'closed.emphasis'],
  [4.5, 'fg.onEmphasis', 'attention.emphasis'],
  [4.5, 'fg.onEmphasis', 'severe.emphasis'],
  [4.5, 'fg.onEmphasis', 'done.emphasis'],
  [4.5, 'fg.onEmphasis', 'sponsors.emphasis'],
  // borders
  [3, 'border.default', 'canvas.default'],
  [3, 'border.default', 'canvas.subtle'],
  [3, 'control.borderColor.emphasis', 'canvas.default'],
  [3, 'control.borderColor.emphasis', 'canvas.subtle'],
  // TODO: there are no specific border colors for roles
]

const highContrast: ContrastRequirement[] = [
  // neutral text colors
  [7, 'fg.default', 'canvas.default'],
  [7, 'fg.muted', 'canvas.default'],
  [7, 'fg.subtle', 'canvas.default'],
  [7, 'fg.default', 'canvas.subtle'],
  [7, 'fg.muted', 'canvas.subtle'],
  [7, 'fg.default', 'canvas.inset'],
  [7, 'fg.muted', 'canvas.inset'],
  // default text vs link
  [4.5, 'fg.default', 'accent.fg'],
  [4.5, 'fg.default', 'fg.muted'],
  // default text on role bg
  // TODO: contrast does not work with semi-transparent colors
  [7, 'fg.default', 'accent.subtle'],
  [7, 'fg.default', 'success.subtle'],
  [7, 'fg.default', 'open.subtle'],
  [7, 'fg.default', 'danger.subtle'],
  [7, 'fg.default', 'closed.subtle'],
  [7, 'fg.default', 'attention.subtle'],
  [7, 'fg.default', 'severe.subtle'],
  [7, 'fg.default', 'done.subtle'],
  [7, 'fg.default', 'sponsors.subtle'],
  // role
  [7, 'accent.fg', 'canvas.default'],
  [7, 'accent.fg', 'canvas.subtle'],
  [7, 'accent.fg', 'canvas.inset'],
  [7, 'success.fg', 'canvas.default'],
  [7, 'success.fg', 'canvas.subtle'],
  [7, 'success.fg', 'canvas.inset'],
  [7, 'open.fg', 'canvas.default'],
  [7, 'open.fg', 'canvas.subtle'],
  [7, 'open.fg', 'canvas.inset'],
  [7, 'danger.fg', 'canvas.default'],
  [7, 'danger.fg', 'canvas.subtle'],
  [7, 'danger.fg', 'canvas.inset'],
  [7, 'closed.fg', 'canvas.default'],
  [7, 'closed.fg', 'canvas.subtle'],
  [7, 'closed.fg', 'canvas.inset'],
  [7, 'attention.fg', 'canvas.default'],
  [7, 'attention.fg', 'canvas.subtle'],
  [7, 'attention.fg', 'canvas.inset'],
  [7, 'severe.fg', 'canvas.default'],
  [7, 'severe.fg', 'canvas.subtle'],
  [7, 'severe.fg', 'canvas.inset'],
  [7, 'done.fg', 'canvas.default'],
  [7, 'done.fg', 'canvas.subtle'],
  [7, 'done.fg', 'canvas.inset'],
  [7, 'sponsors.fg', 'canvas.default'],
  [7, 'sponsors.fg', 'canvas.subtle'],
  [7, 'sponsors.fg', 'canvas.inset'],
  // role text on role bg
  [7, 'accent.fg', 'accent.subtle'],
  [7, 'success.fg', 'success.subtle'],
  [7, 'open.fg', 'open.subtle'],
  [7, 'danger.fg', 'danger.subtle'],
  [7, 'closed.fg', 'closed.subtle'],
  [7, 'attention.fg', 'attention.subtle'],
  [7, 'severe.fg', 'severe.subtle'],
  [7, 'done.fg', 'done.subtle'],
  [7, 'sponsors.fg', 'sponsors.subtle'],
  // fg.onEmphasis
  [7, 'fg.onEmphasis', 'neutral.emphasis'],
  [7, 'fg.onEmphasis', 'neutral.emphasisPlus'],
  [7, 'fg.onEmphasis', 'accent.emphasis'],
  [7, 'fg.onEmphasis', 'success.emphasis'],
  [7, 'fg.onEmphasis', 'open.emphasis'],
  [7, 'fg.onEmphasis', 'danger.emphasis'],
  [7, 'fg.onEmphasis', 'closed.emphasis'],
  [7, 'fg.onEmphasis', 'attention.emphasis'],
  [7, 'fg.onEmphasis', 'severe.emphasis'],
  [7, 'fg.onEmphasis', 'done.emphasis'],
  [7, 'fg.onEmphasis', 'sponsors.emphasis'],
  // borders
  [4.5, 'border.default', 'canvas.default'],
  [4.5, 'border.default', 'canvas.subtle'],
  [4.5, 'control.borderColor.emphasis', 'canvas.default'],
  [4.5, 'control.borderColor.emphasis', 'canvas.subtle'],
] as ContrastRequirement[]

export const canvasColors: string[] = ['canvas.default', 'canvas.subtle']

export const contrastRequirements: {[key: string]: ContrastRequirement[]} = {
  // default light mode
  light: baseRequirements,
  light_high_contrast: highContrast,
  light_colorblind: baseRequirements,
  light_tritanopia: baseRequirements,
  // default dark mode
  dark: baseRequirements,
  dark_dimmed: baseRequirements,
  dark_high_contrast: highContrast,
  dark_colorblind: baseRequirements,
  dark_tritanopia: baseRequirements,
}
