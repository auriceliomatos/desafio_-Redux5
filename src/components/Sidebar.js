
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 150px;
    padding: 10px;
    background-color: #f0f0f0;
    border-right: 1px solid #ccc;
    height: 100vh;
`;

const CountContainer = styled.div`
    border: 2px solid #007bff;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    background-color: #ecf0f1;
`;

const Sidebar = () => {
    const contacts = useSelector((state) => state.contacts);

    const totalFriends = contacts.filter(contact => contact.category === 'Amigo').length;
    const totalFamily = contacts.filter(contact => contact.category === 'Família').length;
    const totalWork = contacts.filter(contact => contact.category === 'Trabalho').length;

    return (
        <SidebarContainer>
            <h2>Contatos</h2>
            <CountContainer>
                <p>Quantidade de Contatos:</p>
                <h3>{contacts.length}</h3>
            </CountContainer>
            <CountContainer>
                <p>Amigos:</p>
                <h3>{totalFriends}</h3>
            </CountContainer>
            <CountContainer>
                <p>Família:</p>
                <h3>{totalFamily}</h3>
            </CountContainer>
            <CountContainer>
                <p>Trabalho:</p>
                <h3>{totalWork}</h3>
            </CountContainer>
        </SidebarContainer>
    );
};

export default Sidebar;