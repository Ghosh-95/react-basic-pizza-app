import { profileData } from "../../data";
import "./profile-card.css";

function SkillPill({ data: { skill, background } }) {

    return (
        <span className="skill-pill" style={{ background: background }}>{skill}</span>
    );
};



export default function ProfileCard() {
    return (
        <section>
            <figure>
                <img src="3.jpg" alt="sushovan profile image" />
            </figure>
            <p className="my-desc">Hey, I'm Sushovan Ghosh. I am a Frondend Developer specialized in React.js. I am currently gaining skills in React. I will work as a developer in any organization very soon</p>

            <div className="skill-container">
                {profileData.map(profile => (
                    <SkillPill key={profile.skill} data={profile} />
                ))}
            </div>
        </section>
    );
};