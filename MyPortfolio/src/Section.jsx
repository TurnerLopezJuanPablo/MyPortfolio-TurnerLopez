/* eslint-disable react/prop-types */
import './styles/Section.css'

const Section = ({ idSection, title, children }) => {
    return (
        <>
            <section id={idSection}>
                <h2 className='title'>{title}</h2>
                <div className='children'>{children}</div>
            </section>
        </>
    );
};

export default Section;
