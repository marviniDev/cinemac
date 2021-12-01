import React from "react";

function FormRegister({active, handleInputChange}) {
    return (
    <>
        <div className="form-cadastro">
            <div className="form-group">
                <form id="form-register">
                    <label>
                        text of guests:
                        <input
                            name="1"
                            type="text"
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        text of guests:
                        <input
                            name="2"
                            type="text"
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        text of guests:
                        <input
                            name="3"
                            type="text"
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        text of guests:
                        <input
                            name="4"
                            type="text"
                            onChange={handleInputChange} />
                    </label>
                </form>
            </div>
        </div>
    </>
    )
}

export default FormRegister;