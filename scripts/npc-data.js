// scripts/npc-data.js
;(function(){
  const data = {
    blaze: {
      displayName: 'Blaze',
      icon: '🔥',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '❄️', name: 'Meth' },
      // Dummy link — replace with actual profile URL
      profileUrl: 'https://hustle-trap.blogspot.com/2025/05/blaze-prologue-mission-html-body-margin.html?m=1'
    },
    maya: {
      displayName: 'Maya',
      icon: '🥊',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'Oxytocin'},
      profileUrl: 'https://hustle-trap.blogspot.com/2025/05/npc-maya.html?m=1'
    },
    rico: {
      displayName: 'Rico',
      icon: '💼',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🍚', name: 'Cocaine'},
      profileUrl: 'https://example.com/profiles/rico.html'
    },
    skye: {
      displayName: 'Skye',
      icon: '🎤',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🌈', name: 'LSD' },
      profileUrl: 'https://example.com/profiles/skye.html'
    },
    jax: {
      displayName: 'Jax',
      icon: '🛞',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🍯', name: 'Dabs' },
      profileUrl: 'https://example.com/profiles/jax.html'
    },
    diesel: {
      displayName: 'Diesel',
      icon: '🥋',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🪨', name: 'Crack' },
      profileUrl: 'https://example.com/profiles/diesel.html'
    }
  };

  // Expose a global getter for NPC metadata
  window.NPCData = {
    get: npcId => data[npcId] || {}
  };
})();
