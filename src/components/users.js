import React, { useState } from 'react';
import "../App.css"

const User = (props) => {
    const [infoReveal, setReveal] = useState(false)
    const [moreBtn, setBtnTxt] = useState("More Info")

    const showInfo = () => {
        if (infoReveal) {
            setReveal(false)
            setBtnTxt("More Info")
        } else {
            setReveal(true)
            setBtnTxt("Hide Info")
        }
    }

    const { user } = props;
  
    return (
        <div className="address-card">
            <img className="img" src={user.picture.large} alt={user.name.first}/>           
                <h3 className="title">{`${user.name.first} ${user.name.last}`}</h3>
                {infoReveal ? <ExpandInfo user={user} /> : ''}
                <button className="more_btn" onClick={showInfo}>{moreBtn}</button>
        </div>
  )
}

const ExpandInfo = (props) => {
  const { user } = props;
  return (
    <p>
        <h5>Email:</h5>{` ${user.email}`}<br />
        <h5>Address</h5> <br />
        {`${user.location.street.number} 
        ${user.location.street.name}`}
        <br />
        {`${user.location.city}, 
        ${user.location.state}, 
        ${user.location.street.postcode}`}<br />
        <h5>Phone:</h5><br />
        {` ${user.phone}`}<br />
    </p>
  )
}

export default User