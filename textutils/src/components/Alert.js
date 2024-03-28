import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        // to capitalize 1st character of props.alert.type
    }
    return (
        <>
            <div style={{height: '50px'}}> 
            {/* give height to correct the layout shift error when the alet occurs */}

                {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {/* props.alert && done so that to avoid the null error as initially props.alert will be Null */}
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>)}
            </div>

        </>
    )
}
