
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/actions';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f8f9fa;
    padding: 10px;
    margin: 5px 0;
`;

const Button = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    cursor: pointer;
`;

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        const name = prompt("Novo Nome:", contact.name);
        const email = prompt("Novo E-mail:", contact.email);
        const phone = prompt("Novo Telefone:", contact.phone);
        if (name && email && phone) {
            dispatch(editContact({ ...contact, name, email, phone }));
        }
    };

    return (
        <Item>
            <div>
                <strong>{contact.name}</strong> <br />
                {contact.email} <br />
                {contact.phone}
            </div>
            <div>
                <Button onClick={handleEdit}>✏️ Editar</Button>
                <Button onClick={() => dispatch(removeContact(contact.id))}>🗑️ Remover</Button>
            </div>
        </Item>
    );
};

export default ContactItem;