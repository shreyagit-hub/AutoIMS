import React, { createContext, useContext, useState } from 'react';

const PopupTriggerContext = createContext();

export function usePopupTrigger() {
  return useContext(PopupTriggerContext);
}

export function PopupTriggerProvider({ children }) {
  // Each key is a section, value is a number (increment to trigger)
  const [triggers, setTriggers] = useState({
    employee: 0,
    inventory: 0,
    serviceRequest: 0,
    billing: 0,
  });

  const triggerPopup = (section) => {
    setTriggers((prev) => ({ ...prev, [section]: prev[section] + 1 }));
  };

  return (
    <PopupTriggerContext.Provider value={{ triggers, triggerPopup }}>
      {children}
    </PopupTriggerContext.Provider>
  );
}
