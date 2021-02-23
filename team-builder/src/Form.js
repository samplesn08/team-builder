import React, { useState } from 'react';
    
const teamList = []
    
const initialValues = {
    name: '',
    email: '',
    role: ''
}

function Form() {
    const [team, setTeam] = useState(teamList)
    const [member, setMember] = useState(initialValues);

    const handleInputChange = event => {
    setMember({
        ...member,
        [event.target.name]: event.target.value,
    })
}
    const handleSubmit = event => {
        event.preventDefault();
        const newMember = {
            name: member.name,
            email: member.email,
            role: member.role
        }
        setTeam(team.concat(newMember))
        setMember(initialValues)
    }
    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name='name' type='text' onChange={handleInputChange} value={member.name}/>
                </label>
                <br></br>
                <label>
                    E-mail:
                    <input name='email' type='text' onChange={handleInputChange} value={member.email}/>
                </label>
                <br></br>
                <label>
                    Role:
                    <select name='role' onChange={handleInputChange} value={member.role}>
                        <option value=''>--select role--</option>
                        <option value='Designer'>Designer</option>
                        <option value='Back-End Developer'>Back-end Developer</option>
                        <option value='Front-End Developer'>Front-end Developer</option>
                        <option value='Team Lead'>Team Lead</option>
                    </select>
                </label>
                <br></br>
                <button>Add Member</button>
            </form>
            <div>
                <h2>Current Team:</h2>
                {team.map((newPerson, index) => {
                    return <div key={index}>
                        Name: {newPerson.name}<br></br>
                        E-mail: {newPerson.email}<br></br>
                        Role: {newPerson.role}<br></br>
                        <br></br>
                    </div>
                })}
            </div>
        </div>
        
    )
}

export default Form;