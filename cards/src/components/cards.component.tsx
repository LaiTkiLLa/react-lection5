import React from "react";

export const Cards = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    {children}
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}