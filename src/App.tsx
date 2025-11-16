import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SidebarProvider } from './context/SidebarContext';
import { DashboardProvider } from './context/DashboardContext';
import { ToastProvider } from './components/common/ToastProvider';
import { router } from './router';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <SidebarProvider>
          <DashboardProvider>
            <RouterProvider router={router} />
          </DashboardProvider>
        </SidebarProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
