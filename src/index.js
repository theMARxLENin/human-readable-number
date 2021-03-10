module.exports = function toReadable (number) {
    if (number === 0) {
        return "zero"
    }
    var bigNums = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion']
    var digits = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine"]
    var tens = [" ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"]
    var moreTens = [" twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety"]
    
    var groups = []
    while (number >= 1) {
      groups.push(number%1000)
      number = Math.floor(number / 1000)
    }
    
    var res = ""
    for (let i=0; i<groups.length; i++) {
      let temp = ""
      let hundred = Math.floor(groups[i] / 100)
      if (hundred > 0) {
        temp = temp + digits[hundred] + " hundred"
      }
      let unitTen = Math.floor(groups[i] % 100 / 10)
      let unit = groups[i] % 10
      if (unitTen == 1) {
        temp = temp + tens[unit]
      } else if (unitTen > 1) {
        temp = temp + moreTens[unitTen-2]
        temp = temp + digits[unit]
      } else {
        temp = temp + digits[unit]
      }
      res = temp + bigNums[i] + res
    }
    return res.slice(1)
}
