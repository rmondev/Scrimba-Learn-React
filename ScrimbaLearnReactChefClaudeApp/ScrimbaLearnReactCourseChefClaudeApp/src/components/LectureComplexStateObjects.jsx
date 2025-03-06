import React from 'react'
import avatar from "../assets/user.png"
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"
import { WiDaySleetStorm } from 'react-icons/wi'

const LectureComplexStateObjects = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }



    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        className="favorite-button"
                    >
                    
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? 'filled star icon' : 'empty star icon'}
                            className="favorite"
                        />
                        
                        
                    </button>
                    <h2 className="name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

export default LectureComplexStateObjects
