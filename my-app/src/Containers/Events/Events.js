
import './events.css'


import EventsCard from "../../Components/Events-card/Events-card";


function Events() {


    return (

        <div className="events">

            <div className='events-top'>


                <h2>Events</h2>
                <div>Create Event</div>


            </div>



            <div className='events-display'>



                <EventsCard title="Team Building Workshop" date="24-12-15" hour="14.00 - 17.00" location="Conference Room A" participants="22/30" />
                <EventsCard title="Project Review Meeting" date="24-12-10" hour="10.00 - 11.30" location="https://meet.company.com/review" participants="8/15" />


            </div>






        </div>


    );

}
export default Events;
