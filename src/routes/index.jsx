//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
import Home from '../views/home.jsx';

//import view user index
import UserIndex from '../views/user/index.jsx';

//import view user create
import UserCreate from '../views/user/create.jsx';

//import view post edit
import UserEdit from '../views/user/edit.jsx';

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/users" */}
            <Route path="/users" element={<UserIndex />} />

            {/* route "/users/create" */}
            <Route path="/users/create" element={<UserCreate />} />

            {/* route "/users/edit/:id" */}
            <Route path="/users/edit/:id" element={<UserEdit />} />

        </Routes>
    )
}

export default RoutesIndex