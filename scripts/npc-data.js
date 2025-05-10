// scripts/npc-data.js
console.log('🐲 npc-data.js executing from URL:', document.currentScript && document.currentScript.src);

;(function(){
  const data = {
    blaze: { /*…*/ },
    maya: {
      displayName: 'Maya',
      icon: '🌸',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'Xanax' }
    },
    /* other NPCs… */
  };
  console.log('🐲 npc-data.js data object:', data);

  window.NPCData = {
    get: npcId => data[npcId] || {}
  };
})();


// scripts/npc-data.js
;(function(){
  const data = {
    blaze: {
      displayName: 'Blaze',
      icon: '🔥',
      avatarUrl: 'https://via.placeholder.com/48',  // replace with your real URL
      drugOfChoice: { icon: '❄️', name: 'Cocaine' }
    },
    maya: {
      displayName: 'Maya',
      icon: '💊',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'Xanax' }
    },
    rico: {
      displayName: 'Rico',
      icon: '💼',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🌿', name: 'Marijuana'}
    },
    skye: {
      displayName: 'Skye',
      icon: '🎤',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🌈', name: 'LSD' }
    },
    jax: {
      displayName: 'Jax',
      icon: '🥊',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🍄', name: 'Shrooms' }
    },
    diesel: {
      displayName: 'Diesel',
      icon: '⛽️',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🪨', name: 'Meth' }
    }
  };

  // Expose a global getter for NPC metadata
  window.NPCData = {
    get: npcId => data[npcId] || {}
  };
})();
