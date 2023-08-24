module.exports = class math {
  constructor(...value) {
    this.value = value;
  }

  sum() {
    return this.value.reduce((total, value) => total + value, 0);
  }
};
