
import './events-card.css'


function EventsCard(props) {


    return (




        <div className="events-card">

            <div>

                <div className="events-card-top">
                    <h2> {props.title}</h2>
                    <div>RSVP</div>
                </div>


                <p> {props.date}</p>
                <p>{props.hour}</p>
                <p>{props.location}</p>
                <p>{props.participants} participants</p>
                <p>{props.subject}</p>

            </div>

            <p>Ressources</p>

            <div></div>


        </div>


    );

}
export default EventsCard;