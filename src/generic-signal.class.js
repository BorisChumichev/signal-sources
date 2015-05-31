class GenericSignal {
  generate(times) {
    return times.map(time => this.resolve(time))
  }
}

module.exports = GenericSignal