import { useAppContext } from "../../contexts/app/app-context";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const { showSidebar } = useAppContext();
    const { t } = useTranslation();
    return (
        <nav className={`sidebar ${!showSidebar ? "collapsed" : ""}`}>
            <div className="sidebar-content">
                <a className="sidebar-brand d-flex flex-column align-items-center pt-0 mb-0 mt-3">
                    <p className="mb-0">{t("mainLayout.sidebar.subtitle")}</p>
                </a>

                <ul className="sidebar-nav pe-0">
                    <li className="sidebar-header fw-bolder fs-lg">
                        {t("mainLayout.sidebar.courseManagement")}
                    </li>
                    <li className="sidebar-item">
                        <NavLink className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        } to={"/"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-video align-middle me-2"
                            >
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect
                                    x="1"
                                    y="5"
                                    width="15"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                ></rect>
                            </svg>

                            <span className="align-middle me-2">
                                {t("mainLayout.sidebar.allCourses")}
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar-link active"
                                    : "sidebar-link"
                            }
                            to={"/course-categories"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-video align-middle me-2"
                            >
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect
                                    x="1"
                                    y="5"
                                    width="15"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                ></rect>
                            </svg>

                            <span className="align-middle me-2">
                                {t("mainLayout.sidebar.coursesCategory")}
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
