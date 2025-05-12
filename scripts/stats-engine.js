// scripts/stats-engine.js
window.StatsEngine = {
  _key: s => `ht_stat_${s}`,
  add(stat, amount) {
    const curr = JSON.parse(localStorage.getItem(this._key(stat))) || 0;
    localStorage.setItem(this._key(stat), JSON.stringify(curr + amount));
  },
  get(stat) {
    return JSON.parse(localStorage.getItem(this._key(stat))) || 0;
  },
  getAll() {
    const out = {};
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('ht_stat_')) {
        const key = k.replace('ht_stat_', '');
        out[key] = JSON.parse(localStorage.getItem(k)) || 0;
      }
    });
    return out;
  },
  reset() {
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('ht_stat_')) localStorage.removeItem(k);
    });
  }
};
