export const generate_slug = (input) => {
  const hyphenatedString = input.replace(/\s+/g, "-");
  return hyphenatedString;
};
