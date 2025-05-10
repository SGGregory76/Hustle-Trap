// npc-data.js
// Defines NPC traits and global game systems (trading, pricing, relationships)

// scripts/npc-data.js

export const NPCData = {
  blaze: {
    displayName: 'Blaze',
    icon: '🔥',
    avatarUrl: 'https://via.placeholder.com/48',  // or your real URL
    drugOfChoice: { icon: '❄️', name: 'Cocaine' },
  },
  maya: {
    displayName: 'Maya',
    icon: '🌸',
    avatarUrl: 'https://…',
    drugOfChoice: { icon: '💊', name: 'Xanax' },
  },
  rico: {
    displayName: 'Rico',
    icon: '💼',
    avatarUrl: 'https://…',
    drugOfChoice: { icon: '🍄', name: 'MDMA' },
  },
  skye: {
    displayName: 'Skye',
    icon: '🎤',
    avatarUrl: 'https://…',
    drugOfChoice: { icon: '🍄', name: 'LSD' },
  },
  jax: {
    displayName: 'Jax',
    icon: '🔫',
    avatarUrl: 'https://…',
    drugOfChoice: { icon: '💊', name: 'Adderall' },
  },
  diesel: {
    displayName: 'Diesel',
    icon: '🚚',
    avatarUrl: 'https://…',
    drugOfChoice: { icon: '❤️', name: 'Oxytocin' },
  },
};

// If you need a getter API:
window.NPCData = {
  get: id => NPCData[id],
  // optionally: all: () => NPCData
};


// Global dynamic pricing model
globalThis.PriceEngine = {
  basePrices: {
    starter_weed: 100,
    weed_oil: 150,
    joint_pack: 250,
    hash: 500,
    acid_tabs: 400,
    psychedelic_blend: 600
  },
  volatility: 0.1, // max ±10% change
  getPrice(item) {
    const base = this.basePrices[item] || 0;
    const drift = 1 + (Math.random() * 2 - 1) * this.volatility;
    return Math.round(base * drift);
  }
};

// Trust and Reputation Tiers
globalThis.RelationshipEngine = {
  // Increase trust and adjust tier
  incrementTrust(npcTag, amount) {
    const npc = Object.values(NPCData).find(n => n.tag === npcTag);
    if (!npc) return;
    npc.traits.trust = Math.min(100, npc.traits.trust + amount);
    // store in localStorage
    localStorage.setItem(`trust_${npcTag}`, npc.traits.trust);
  },
  getTrust(npcTag) {
    return parseInt(localStorage.getItem(`trust_${npcTag}`)) || NPCData[npcTag]?.traits.trust || 0;
  },
  getRepTier(rep) {
    if (rep >= 50) return 'Elite';
    if (rep >= 20) return 'Veteran';
    if (rep >= 10) return 'Rising';
    return 'Rookie';
  }
};

// Heat reduction via Safehouse visits
globalThis.Safehouse = {
  cooldown: 24 * 3600 * 1000, // 24h
  lastVisitKey: 'lastSafehouseVisit',
  visit() {
    const now = Date.now();
    localStorage.setItem(this.lastVisitKey, now);
    const stats = StatsEngine.get();
    stats.heat = Math.max(0, stats.heat - 5);
    StatsEngine.set(stats);
    LogManager.add('🏠 Rested at Safehouse. Heat -5');
  },
  canVisit() {
    const last = parseInt(localStorage.getItem(this.lastVisitKey)) || 0;
    return Date.now() - last >= this.cooldown;
  }
};

// Export for CommonJS or global
if (typeof module !== 'undefined') module.exports = { NPCData, PriceEngine, RelationshipEngine, Safehouse };
