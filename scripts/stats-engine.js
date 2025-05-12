const StatsEngine = {
  _key: 'playerStats',
  init() {
    const base = { xp: 0, rep: 0, rp: 0, heat: 0, cash: 0 };
    const stats = Object.assign(base, JSON.parse(localStorage.getItem(this._key) || '{}'));
    localStorage.setItem(this._key, JSON.stringify(stats));
    return stats;
  },
  get() {
    return JSON.parse(localStorage.getItem(this._key) || '{}');
  },
  set(stats) {
    localStorage.setItem(this._key, JSON.stringify(stats));
  },
  gain(updates) {
    const stats = this.get();
    for (let key in updates) {
      stats[key] = (stats[key] || 0) + updates[key];
    }
    this.set(stats);
  },
  reset() {
    localStorage.removeItem(this._key);
  }
};
window.StatsEngine = {
  _key: s => `ht_stat_${s}`,
  add: function(stat, amount) {
    const curr = JSON.parse(localStorage.getItem(this._key(stat))) || 0;
    localStorage.setItem(this._key(stat), JSON.stringify(curr + amount));
  },
  get: function(stat) {
    return JSON.parse(localStorage.getItem(this._key(stat))) || 0;
  }
};
