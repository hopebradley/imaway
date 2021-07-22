import React from 'react';
import ContactsContainer from '../containers/ContactsContainer';
import ProfileInfo from '../components/ProfileInfo';

const ProfilePage = ( { user }) => {

    return (
        <div>
            <ProfileInfo user={user}/>
            <ContactsContainer />
        </div>
        )
}
export default ProfilePage;