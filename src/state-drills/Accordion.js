import React from 'react';

class Accordion extends React.Component{
    static defaultProps = {
        sections: [],
    };
    state = {
        currentSectionIndex: null,
    };

    handleSelectSection = (sectionIndex) => {
        this.setState({ currentSectionIndex: sectionIndex})
    }

    renderSections(section, idx, currentSectionIndex) {
        return (
            <li key={idx}>
                <button type='button' onClick={ () => this.handleSelectSection(idx)}>
                    {section.title}
                </button>
                {(currentSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        )
    }

    render(){
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul>
                {sections.map((section, idx) =>
                this.renderSections(section, idx, currentSectionIndex)
                )}
            </ul>
        )
    }

}

export default Accordion;