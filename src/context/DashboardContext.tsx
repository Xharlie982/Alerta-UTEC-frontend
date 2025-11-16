import { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
  showHistorial: boolean;
  setShowHistorial: (show: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [showHistorial, setShowHistorial] = useState(false);

  return (
    <DashboardContext.Provider value={{ showHistorial, setShowHistorial }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}

