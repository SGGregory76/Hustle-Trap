// scripts/log-manager.js
window.LogManager = {
  _prefix: 'ht_log_',
  log(ctx, key, val) {
    const entry = { context:ctx, key, val, timestamp: Date.now(), message:`[${ctx}] ${key}: ${val}` };
    // store in array
    const arr = JSON.parse(localStorage.getItem(this._prefix+'all')) || [];
    arr.unshift(entry);
    localStorage.setItem(this._prefix+'all', JSON.stringify(arr));
  },
  getAll() {
    return JSON.parse(localStorage.getItem(this._prefix+'all')) || [];
  },
  reset() {
    localStorage.removeItem(this._prefix+'all');
  }
};
