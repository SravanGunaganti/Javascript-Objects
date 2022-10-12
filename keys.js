function keys(obj) {
    let keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  }

module.exports=keys;