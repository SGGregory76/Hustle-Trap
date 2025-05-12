// scripts/inventory-manager.js
window.InventoryManager = {
  _key: i => `ht_inv_${i}`,
  add(item, qty=1) {
    const curr = JSON.parse(localStorage.getItem(this._key(item))) || 0;
    localStorage.setItem(this._key(item), JSON.stringify(curr + qty));
  },
  get(item) {
    return JSON.parse(localStorage.getItem(this._key(item))) || 0;
  },
  getAll() {
    const out = {};
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('ht_inv_')) {
        const name = k.replace('ht_inv_', '');
        out[name] = JSON.parse(localStorage.getItem(k)) || 0;
      }
    });
    return out;
  },
  reset() {
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('ht_inv_')) localStorage.removeItem(k);
    });
  }
};
