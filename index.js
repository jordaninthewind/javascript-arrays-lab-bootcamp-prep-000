const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name) {
  kittens = [name, ...kittens];
  return kittens;
}

function removeLastKitten() {
  kittens = kittens.slice(1, kittens.length - 1);
  return kittens;
}

function removeFirstKitten() {
  kittens = kittens.slice(1);
  return kittens;
}
