/* eslint-disable react/prop-types */
import './styles/Section.css'

// ICONS IMPORT
import presentationIcon from './assets/icons8-presentation-48.png'
import aboutMeIcon from './assets/icons8-user-60.png'
import studiesIcon from './assets/icons8-book-50.png'
import skillsIcon from './assets/icons8-mechanic-50.png'
import projectsIcon from './assets/icons8-pc-48.png'
import contactIcon from './assets/icons8-phone-50.png'
import codeIcon from './assets/icons8-code-48.png'

const iconMap = {
    presentationIcon,
    aboutMeIcon,
    studiesIcon,
    skillsIcon,
    projectsIcon,
    contactIcon,
    codeIcon
};

const Section = ({ idSection, title, children, iconRoute }) => {
    const iconPath = iconMap[iconRoute];

    return (
        <>
            <section id={idSection}>
                <div className='title-icon'>
                    {iconPath && <img src={iconPath} alt={`${idSection} icon`} />}
                    <h2>{title}</h2>
                </div>
                <div className='children'>{children}</div>
            </section>
        </>
    );
};

export default Section;
