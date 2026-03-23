import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "pulse-bookmarks";

function getStored(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

// Simple global listener pattern so all consumers stay in sync
const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((fn) => fn());
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>(getStored);

  useEffect(() => {
    const sync = () => setIds(getStored());
    listeners.add(sync);
    return () => { listeners.delete(sync); };
  }, []);

  const toggle = useCallback((id: string) => {
    const current = getStored();
    const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setIds(next);
    notify();
  }, []);

  const isBookmarked = useCallback((id: string) => ids.includes(id), [ids]);

  return { bookmarkedIds: ids, toggle, isBookmarked };
}
