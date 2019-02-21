import React from 'react';
import hotel from '../assets/img/hotelexterior.jpg';
import righticon from '../assets/img/right-icon.png';

class HotelDetailsComponent extends React.Component {
    render() {
        return (
            <div style={{maxwidth:'50%'}}>
                <div className='banner-imgmain'>
                    <div className='boder5'>
                        <img alt='' src={hotel} />
                    </div>
                </div>
                <div className="address">
                    <h2>Hilton Chicago</h2>
                    <p>720 South Michigan Avenue</p>
                    <p>Chicago, Illinois, 60605</p>
                    <a href="tel:1-312-922-4400">1-312-922-4400</a>
                </div>
                <div class="linktoother">
                    <a href="#">Map <span><img src={righticon} /></span></a>
                    <a href="#">Photo gallery <span><img src={righticon} /></span></a>
                    <a href="#">Amenities <span><img src={righticon} /></span></a>
                </div>
            </div>
        );
    }
};

export default HotelDetailsComponent;