import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/utils";
import '../css/Dashboard.css';

const Dashboard = ({ username }) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!username) navigate(routes.base);
    }, []);

    return (
        <div className="dashboard__container">
            <div className="dashboard__content">
                {username}
            </div>
        </div>
    )
}

export default Dashboard;
