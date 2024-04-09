import React from 'react'
import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from 'react-icons/fa'


function HeroSection() {
    const details = [
        {
            id: 1,
            title: "1,23,441",
            subTitle: "Live Job",
            icon: <FaSuitcase />,
        },
        {
            id: 2,
            title: "91220",
            subTitle: "Companies",
            icon: <FaBuilding />,
        },
        {
            id: 3,
            title: "2,34,200",
            subTitle: "Job Seekers",
            icon: <FaUsers />,
        },
        {
            id: 4,
            title: "1,03,761",
            subTitle: "Employers",
            icon: <FaUserPlus />,
        },
    ];

    return (
        <div className='heroSection'>
            <div className='container'>
                <div className="title">
                    <h1>Find a Job that suits</h1>
                    <h1>your Interest and skills</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores amet itaque sit deleniti, impedit iure quaerat nihil corporis rerum neque autem.
                    </p>
                </div>
                <div className="image">
                    <img src="/hero.avif" alt="hero" />
                </div>
            </div>
            <div className="details">
                {
                    details.map(element => {
                        return (
                            <div className="card" key={element.id}>
                                <div className="icon">{element.icon}</div>
                                <div className="content">
                                    <p>{element.title}</p>
                                    <p>{element.subTitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HeroSection
