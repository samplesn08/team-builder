import React, { useState } from 'react';

function Form(props) {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
      });
    const handleInputChange = event => {
    setMember({
        ...member,
        [event.target.name]: event.target.value,
    })
}
    const handleSubmit = event => {
        event.preventDefault();
        props.addMember(member)
    }
    return (
        <div className='Form'>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input name='name' type='text' onChange={handleInputChange}/>
                </label>
                <br></br>
                <label>
                    E-mail:
                    <input name='email' type='text' onChange={handleInputChange}/>
                </label>
                <br></br>
                <label>
                    Role:
                    <input name='role' type='text' onChange={handleInputChange}/>
                </label>
                <br></br>
                <button>Add Member</button>
            </form>
        </div>
    )
}

export default Form;