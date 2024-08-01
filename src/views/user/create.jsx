import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function UserCreate() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');

    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const storeUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('level', level);

        await api.post('/api/users/', formData).then(() => {
            navigate('/users');
        })
            .catch(errors => {
                setErrors(errors.response.data);
            })
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={storeUser}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Username</label>
                                    <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                    {
                                        errors.username && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.username[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    {
                                        errors.email && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.email[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    {
                                        errors.password && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.password[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Level</label>
                                    <input type="text" className="form-control" onChange={(e) => setLevel(e.target.value)} placeholder="Level" />
                                    {
                                        errors.level && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.level[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}