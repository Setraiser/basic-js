const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
      if (value === 'undefined') value = '';
      this.chainArr.push(`( ${value} )`);
      return this;
      
  },

  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position < this.getLength()) {
      this.chainArr.splice(position-1, 1);
    } else {
      this.chainArr = [];
      throw new Error('wrong position link!!!');
      
    }
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let chainStr = this.chainArr;
    this.chainArr = [];
    return chainStr.join('~~');
    
  }
};

module.exports = chainMaker;
