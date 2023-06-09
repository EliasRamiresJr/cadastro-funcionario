import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function FooterScreen() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    {/* <svg className="bi" width="30" height="24"><use a href="#bootstrap"></use></svg> */}
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Mamaco's, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use a href="#twitter"></use></svg></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use a href="#instagram"></use></svg></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use a href="#facebook"></use></svg></a></li> */}
            </ul>
        </footer>
    )
}

export default FooterScreen


