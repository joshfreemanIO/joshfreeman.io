import {types, getRoot} from 'mobx-state-tree'
import TaxesOwed from '../utils/TaxesOwed'

const Taxes = types
  .model()
  .views(self => ({
    get taxableIncome() {
      return 100000
    },
    get incomeTaxOwed() {

    },
    taxForBracket(rate, min, max) {
      if (self.taxableIncome > max) {
        return rate * max
      } else if (self.taxableIncome > min) {
        return rate * (self.taxableIncome - min)
      } else {
        return 0
      }
    }
  }))

export default Taxes