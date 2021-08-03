import React, { useState } from 'react';
import UpcomingJobsContainer from '../containers/UpcomingJobsContainer';


const HomePage = ( {user, jobs, loadData}) => {

    const [ phoneNumber, setPhoneNumber ] = useState("");

    let usersName = user.name;

    if (user.name) {
        usersName = user.name.split(" ")[0];
    }

    function handlePhoneSubmit(e) {
        e.preventDefault();
        console.log(phoneNumber);
        // debug
        const foo = JSON.stringify({ phone_number: phoneNumber });
        console.log('payload:', foo)
        fetch('/'+user.status+"s/"+user.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: user.name,
                phone_number: phoneNumber
            })
        })
        .then((resp) => resp.json())
        .then(data => {
            console.log(data)
            if (data.hasOwnProperty('errors')) {
                console.log(data.errors)
            } else {
                loadData();
                console.log(data)
            }
        })

    }

    function displayPhoneQuestion() {
        return (
            <div className="message is-medium is-info phone-question">
                <div className="message-header">
                    <p>Do you want to receive text alerts from ImAway?</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    <p>Add your phone number to your profile and recieve messages when {user.status === "caregiver" ? "you are accepted or rejected from a job!" : "someone expresses interest in one of your postings!"}</p>
                    <form onSubmit={handlePhoneSubmit}>
                        <input 
                            className="input is-info is-medium is-focused phone-input" 
                            type="text" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="+1XXXXXXXXXX">
                        </input>
                        <input type="submit" className="button is-medium is-success is-light is-outlined phone-input" value="Go!"></input>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="homepage">
            <div className="columns">
                <div className="column home-left">
                    <div className="box">
                        <h1 className="home-headline">Welcome, {usersName}!</h1>
                    </div>
                    <div className="box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sagittis ante. Cras convallis 
                            tempor ornare. Sed tempus malesuada risus et aliquam. Vivamus sed dolor at justo vestibulum ullamcorper. 
                            Aenean nec risus a urna pharetra vestibulum. Vestibulum purus massa, suscipit ac nisl vitae, fermentum 
                            consectetur elit. Vivamus vitae lacus in urna porta aliquam non ut nisi. Aliquam erat volutpat. Nam eget 
                            auctor est, gravida facilisis enim. Etiam ac lacus viverra, imperdiet odio ac, auctor tortor. 
                            Integer fringilla justo lorem, nec dapibus ante bibendum sed. Pellentesque habitant morbi tristique 
                            senectus et netus et malesuada fames ac turpis egestas. Mauris nec suscipit elit, nec sodales orci. 
                            Vestibulum in enim ut nibh scelerisque aliquet sit amet non nisl. Suspendisse urna metus, ornare ut 
                            lobortis eu, ultrices sodales arcu.</p>
                    </div>
                   {!user.phone_number ? displayPhoneQuestion() : null} 
                </div>
                <div className="column">
                    <UpcomingJobsContainer user={user} jobs={jobs} loadData={loadData}/>
                    
                </div>
            </div>
            
        </div>
    )
}
export default HomePage;