import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Tickets from "./pages/tickets/Tickets";
import CreateTicket from "./pages/tickets/CreateTicket";
import Modules from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import UpdateTicket from "./pages/tickets/UpdateTicket";
import PrivateRoute from "./components/PrivateRoutes";
import Areas from "./pages/areas/Areas";
import UpdateArea from "./pages/areas/UpdateArea";
import CreateArea from "./pages/areas/CreateArea";
import Classroom from "./pages/areas/Classroom";
import ClassroomEquipment from "./pages/areas/ClassroomEquipment";
import Subnets from "./pages/subnets/Subnets";
import UpdateSubnets from "./pages/subnets/UpdateSubnets";
import CreateSubnets from "./pages/subnets/CreateSubnets";
import Users from "./pages/users/Users";
import UpdateUsers from "./pages/users/UpdateUser";
import CreateUsers from "./pages/users/CreateUser";
import Loans from "./pages/loans/Loans";
import CreateLoan from "./pages/loans/CreateLoan";
import UpdateLoan from "./pages/loans/UpdateLoan";
import Equipment from "./pages/equipment/Equipment";
import CreateEquipment from "./pages/equipment/CreateEquipment";
import UpdateEquipment from "./pages/equipment/UpdateEquipment";
import GlobalNotification from './components/ui/GlobalNotification.tsx';
import { WebSocketProvider } from './context/NotificationContext';

const App = () => {
  return (
    <Router>
      <WebSocketProvider>
        <AppRoutes />
      </WebSocketProvider>
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const showNotifications = location.pathname !== "/";

  return (
    <>
      {showNotifications && <GlobalNotification />}
      <Routes>
        {/* Tickets */}
        <Route path="/auth/ticket" element={<PrivateRoute element={<Tickets />} />} />
        <Route path="/auth/ticket/create" element={<PrivateRoute element={<CreateTicket />} />} />
        <Route path="/auth/ticket/update/:id" element={<PrivateRoute element={<UpdateTicket />} />} />

        {/* Areas */}
        <Route path="/auth/area" element={<PrivateRoute element={<Areas />} />} />
        <Route path="/auth/area/create" element={<PrivateRoute element={<CreateArea />} />} />
        <Route path="/auth/area/update/:id" element={<PrivateRoute element={<UpdateArea />} />} />
        <Route path="/auth/classroom" element={<PrivateRoute element={<Classroom />} />} />
        <Route path="/auth/classroom/equipment/:id" element={<PrivateRoute element={<ClassroomEquipment />} />} />

        {/* Dashboard */}
        <Route path="/auth/dashboard" element={<PrivateRoute element={<Modules />} />} />

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Loans */}
        <Route path="/auth/Loans" element={<PrivateRoute element={<Loans />} />} />
        <Route path="/auth/Loans/create" element={<PrivateRoute element={<CreateLoan />} />} />
        <Route path="/auth/loans/update/:id" element={<PrivateRoute element={<UpdateLoan />} />} />

        {/* Equipos */}
        <Route path="/auth/equipment" element={<PrivateRoute element={<Equipment />} />} />
        <Route path="/auth/equipment/create" element={<PrivateRoute element={<CreateEquipment />} />} />
        <Route path="/auth/equipment/update/:id" element={<PrivateRoute element={<UpdateEquipment />} />} />

        {/* Users */}
        <Route path="/auth/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/auth/users/create" element={<PrivateRoute element={<CreateUsers />} />} />
        <Route path="/auth/users/update/:id" element={<PrivateRoute element={<UpdateUsers />} />} />

        {/* Subnets */}
        <Route path="/auth/subnets" element={<PrivateRoute element={<Subnets />} />} />
        <Route path="/auth/subnets/create" element={<PrivateRoute element={<CreateSubnets />} />} />
        <Route path="/auth/subnets/update/:id" element={<PrivateRoute element={<UpdateSubnets />} />} />

        {/* Paginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
