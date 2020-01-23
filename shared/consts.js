export class IllegalArgumentError extends Error {
  constructor(illegalArgument, expectedType) {
    super();
    this.message = `Illegal argument ${illegalArgument} given. ${expectedType} expected`;
    this.name = "IllegalArgumentError";
  }
}

export class RequiredArgumentNotGivenError extends Error {
  constructor(requiredArgument) {
    super();
    this.message = `Required argument ${requiredArgument} not given`;
    this.name = "RequiredArgumentNotGivenError";
  }
}

export class ArrayDoesNotHaveRequiredPropertyError extends Error {
  constructor(requiredArgument, requiredProperties) {
    super();
    this.message = `Given array ${requiredArgument} does not have required propert${requiredProperties.length === 1 ? 'y' : 'ies'} ${requiredProperties.join(',')}`;
    this.name = "ArrayDoesNotHaveRequiredPropertyError";
  }
}