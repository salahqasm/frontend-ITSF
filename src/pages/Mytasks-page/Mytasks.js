import React from "react";
import { useCookies } from "react-cookie";
import CompanyTasks from "./Company/CompanyTasks";
import StudentTasks from "./Student/StudentTasks";

function Mytasks() {
    const [cookie] = useCookies();

    return <>
        {cookie.user.userType === 'company' ? <CompanyTasks /> : <StudentTasks />}
    </>
}
export default Mytasks;