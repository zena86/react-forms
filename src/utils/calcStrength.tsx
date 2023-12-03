export const calcStrength = (password: string) => {
  let val = 0;
  if (password.match(/[a-z]/)) {
    val += 25;
  }
  if (password.match(/[A-Z]/)) {
    val += 25;
  }
  if (password.match(/[@$!%*#?&]+/)) {
    val += 25;
  }
  if (password.match(/\d+/)) {
    val += 25;
  }
  return val;
};
