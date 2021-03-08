export const testDetailsCalculator = (originalValue, typedValue) => {
  const mistakes = typedValue.split(' ').reduce((acc, typedChar, index) => {
    return typedChar !== originalValue.split(' ')[index] ? acc + 1 : acc
  }, 0)

  const correctWord = typedValue.split(' ').reduce((acc, typedChar, index) => {
    return typedChar === originalValue.split(' ')[index] ? acc + 1 : acc
  }, 0)

  const points = (correctWord * 10) - (mistakes * 5);
  const words = typedValue.split(' ').length;

  return { words, mistakes, points }
}