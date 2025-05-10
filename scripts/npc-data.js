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
      icon: '🌸',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'Xanax' }
    },
    rico: {
      displayName: 'Rico',
      icon: '💼',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'MDMA' }
    },
    skye: {
      displayName: 'Skye',
      icon: '🎤',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '🌈', name: 'LSD' }
    },
    jax: {
      displayName: 'Jax',
      icon: '🔫',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '💊', name: 'Adderall' }
    },
    diesel: {
      displayName: 'Diesel',
      icon: '🚚',
      avatarUrl: 'https://via.placeholder.com/48',
      drugOfChoice: { icon: '❤️', name: 'Oxytocin' }
    }
  };

  // Expose a global getter for NPC metadata
  window.NPCData = {
    get: npcId => data[npcId] || {}
  };
})();
