window.InventoryManager = {
  _key: i => `ht_inv_${i}`,
  add: function(item, qty=1) {
    const curr = JSON.parse(localStorage.getItem(this._key(item))) || 0;
    localStorage.setItem(this._key(item), JSON.stringify(curr + qty));
  },
  get: function(item) {
    return JSON.parse(localStorage.getItem(this._key(item))) || 0;
  }
};
