import React from 'react';
import UpcomingJobsContainer from '../containers/UpcomingJobsContainer';


const HomePage = ( {user, jobs, loadData}) => {

    return (
        <div className="homepage">
            <div className="columns">
                <div className="column home-left">
                    <div className="box">
                        <h1 className="big-headline">Welcome, {user.name.split(" ")[0]}!</h1>
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
                            lobortis eu, ultrices sodales arcu. Quisque rutrum nec augue eu iaculis. Maecenas efficitur turpis orci, 
                            laoreet tempus elit gravida ac. Sed sed bibendum eros. Fusce in turpis lacus. Praesent ullamcorper vestibulum 
                            sollicitudin. Morbi tempus massa vitae nisi pharetra, in cursus risus feugiat. Duis luctus a dui at aliquet. 
                            Phasellus ac elit ut tellus convallis elementum in at nulla.</p>
                    </div>
                </div>
                <div className="column">
                    <UpcomingJobsContainer user={user} jobs={jobs} loadData={loadData}/>
                </div>
            </div>
        </div>
    )
}
export default HomePage;