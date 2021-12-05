import { Component } from 'react';
import SearchInput from './input';
import styled from 'styled-components';
import { searchMach } from "../search engine/service calls";

const Section = styled.section`
    height: 10%;
    width: 100vw;
    display: flex;
    border-bottom: 1px solid var(--bg-color-3);
    ${props => {
        if (props.blur === true) {
            return "filter: blur(10px) brightness(0.6)"
        }
    }};
`;

class SeachSection extends Component {
    render () {
        return (
            <Section blur={this.props.blur}>
                <SearchInput 
                    search={this.props.search}
                    searchMach={searchMach}/>
            </Section>
        );
    }
}

export default SeachSection;