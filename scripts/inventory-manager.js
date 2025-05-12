// inventory-manager.js
// Manages inventory items with individual quality values

const STORAGE_KEY = 'ht_inv_list';

/**
 * Get all inventory items as an array of { id: string, quality: number }
 */
export function getAllItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

/**
 * Add a new item with specified quality to inventory
 * @param {string} itemId - identifier of the item
 * @param {number} quality - quality value (0-100)
 */
export function addItem(itemId, quality = 0) {
  const inv = getAllItems();
  inv.push({ id: itemId, quality: Math.max(0, Math.min(100, Math.round(quality))) });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inv));
}

/**
 * Remove a specific quantity of items (oldest first) by itemId
 * @param {string} itemId - identifier of the item
 * @param {number} qty - number of items to remove
 */
export function removeItems(itemId, qty) {
  let inv = getAllItems();
  let removed = 0;
  inv = inv.filter(entry => {
    if (entry.id === itemId && removed < qty) {
      removed++;
      return false;
    }
    return true;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inv));
}

/**
 * Clear entire inventory
 */
export function reset() {
  localStorage.removeItem(STORAGE_KEY);
}

// Legacy support: default export
export default {
  getAllItems,
  addItem,
  removeItems,
  reset
};
