import Unauthorized from "./Unauthorized";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Unauthorized />
    }

    return element;
}

export default PrivateRoute;