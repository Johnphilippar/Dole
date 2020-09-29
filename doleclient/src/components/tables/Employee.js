import React from 'react'
import './Employee.css';

const Employee = () => {
    return (
        <section>
            <div className="employee_mngt_main">
                {/* <div className="employee_mngt_add">
                    <div>
                        <button className="btn btn-success">Add Access</button>
                    </div>
                </div> */}
                <div className="employee_mngt_table">
                    {/* <div className="employee_name">
                        <h5>Full Name</h5>
                        <p>Employee Full Name</p>
                    </div> */}
                    <div className="employee_add_access">
                        <div className="employee_add_title">
                            <p>Add Employee</p>
                        </div>
                        <form className="employee_add_form">
                            <div className="employee_data">
                                <p>Last Name</p>
                                <input className="form-control"></input>
                                <p>First Name</p>
                                <input className="form-control"></input>
                                <p>Middle Name</p>
                                <input className="form-control"></input>
                            </div>
                            <div className="employee_data">
                                <p>Position</p>
                                <input className="form-control"></input>
                                <p>Division</p>
                                <input className="form-control"></input>
                                <p>Unit</p>
                                <input className="form-control"></input>
                            </div>
                            <div className="employee_data">
                                <p>Email</p>
                                <input className="form-control"></input>
                                <p>Sex</p>
                                <input className="form-control"></input>
                                <p>Role</p>
                                <input className="form-control"></input>
                            </div>
                            <div className="employee_add_button">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="employee_table_access">

                        <div className="employee_name">
                            <h5>Full Name</h5>
                            <p>John Philip Par</p>
                        </div>

                        <div className="employee_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="table_th">Last Name</th>
                                        <th className="table_th_role_desc">First Name</th>
                                        <th>Middle Name</th>
                                        <th className="table_th_url">Position</th>
                                        <th>Division</th>
                                        <th>Unit</th>
                                        <th>Sex</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th className="table_th2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value="Par"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_role_desc" type="text" value="John Philip"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Rodriguez"></input>
                                        </td>
                                        <td>
                                            <input className="table_td_url" type="text" value="Web Developer"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Badminton Division"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="One Piece unit"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Male"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Jpparhehe@gmail.com"></input>
                                        </td>
                                        <td>
                                            <input type="text" value="Developer"></input>
                                        </td>
                                        <td>
                                            <button className="btn btn-success">
                                                Edit
                                        </button>
                                            <button className="btn btn-danger">
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Employee;
