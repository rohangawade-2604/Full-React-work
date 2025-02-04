import React from 'react';
import "./personal.css";

function Person() {
    const Items = [
        'Weight Loss/ Management',
        'Toning & Sculpting',
        'Resistance Training',
        'Muscle Building',
        'Mobility / Flexibility',
        'Speed, Strength, Power Development',
        'Nutritional Advice'
    ];

    return (
        <div className="personalize" style={{marginTop: "2rem"}}>
            <section className="Personal"><br />
                <h1 className='head1'>Personal Training</h1><br />
                <p>
                    A personal coach focuses more on performance goals like building strength, speed, agility, power, etc.
                    Personal trainers may also work with those who need help recovering from an injury and help you become
                    the best version of yourself.
                </p>
            </section>

            <section className="map-personalize" style={{marginTop: "2rem"}}>
                <ul>
                    {Items.map((item, index) => (
                        <li key={index} className="training-item" >
                            <i class="fa-solid fa-angle-right"></i>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Person;
