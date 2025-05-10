// scripts/npc-header.js
// Web Component to standardize NPC header rendering across all profile pages

class NPCHeader extends HTMLElement {
  connectedCallback() {
    // Get the NPC ID from the attribute
    const npcId = this.getAttribute('npc-id');
    // Attempt to retrieve data from global NPCData
    const dataSrc = window.NPCData || window.npcData || window.NPC_DATA || {};
    const npc = typeof dataSrc.get === 'function'
      ? dataSrc.get(npcId) || {}
      : dataSrc[npcId] || {};

    // Prepare fallback values
    const icon = npc.icon || '';
    const displayName = npc.displayName || npcId;
    const doc = npc.drugOfChoice || { icon: '❓', name: 'Unknown' };
    const avatarUrl = npc.avatarUrl || 'https://via.placeholder.com/48';

    // Render the header markup
    this.innerHTML = `
      <div class="profile-header">
        <div class="avatar" style="background: #333 url('${avatarUrl}') center/cover no-repeat;"></div>
        <div class="profile-header-text">
          <div class="name">${icon} ${displayName}</div>
          <div class="doc">
            <span class="doc-label">DOC:</span>
            <span class="drug-icon">${doc.icon}</span>
            <span class="drug-name">${doc.name}</span>
          </div>
        </div>
      </div>
    `;
  }
}
// Define the custom element
customElements.define('npc-header', NPCHeader);

