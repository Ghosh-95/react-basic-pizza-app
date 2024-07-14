import "./profile-card.css";

function SkillPill({ skill, background }) {
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
                <SkillPill skill="HTML + CSS" background="#0066cc" />
                <SkillPill skill="JavaScript" background="#ffcc00" />
                <SkillPill skill="React" background="#0099ff" />
                <SkillPill skill="Redux" background="#4d4dff" />
                <SkillPill skill="Tailwind" background="lightblue" />
                <SkillPill skill="Git & GitHub" background="#ff1a75" />
            </div>
        </section>
    );
};