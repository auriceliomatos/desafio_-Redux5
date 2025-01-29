import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeContact, editContact } from '../redux/actions';

// Estilos
const ListContainer = styled.div`
    padding: 20px;
`;

const Header = styled.h2`
    margin: 10px 0 20px 0; /* Margens superiores e inferiores */
    text-align: left; /* Alinhamento à esquerda */
`;

const ContactCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    width: 250px; 
    margin: 5px; /* Espaço entre os blocos */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0; /* Margens verticais para os botões */
`;

const RemoveButton = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c82333;
    }
`;

const EditButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin: 5px 0;
`;

const Select = styled.select`
    width: 100%;
    padding: 5px;
    margin: 5px 0;
`;

// Componente Principal
const ContactList = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [editingContact, setEditingContact] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedPhone, setEditedPhone] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedCategory, setEditedCategory] = useState('Amigo');

    const handleEdit = (contact) => {
        setEditingContact(contact);
        setEditedName(contact.name);
        setEditedPhone(contact.phone);
        setEditedEmail(contact.email);
        setEditedCategory(contact.category);
    };

    const handleSave = () => {
        dispatch(editContact({ ...editingContact, name: editedName, phone: editedPhone, email: editedEmail, category: editedCategory }));
        setEditingContact(null);
    };

    const handleRemove = (id) => {
        dispatch(removeContact(id));
    };

    return (
        <ListContainer>
            <Header>Lista de Contatos 📞</Header>
            {contacts.map((contact) => (
                <ContactCard key={contact.id}>
                    {editingContact?.id === contact.id ? (
                        <>
                            <Input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                            <Input type="number" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
                            <Input type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                            <Select value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)}>
                                <option value="Amigo">Amigo</option>
                                <option value="Família">Família</option>
                                <option value="Trabalho">Trabalho</option>
                            </Select>
                            <ButtonContainer>
                                <button onClick={handleSave}>Salvar</button>
                            </ButtonContainer>
                        </>
                    ) : (
                        <>
                            <div><strong>Nome:</strong> {contact.name}</div>
                            <div><strong>Telefone:</strong> {contact.phone}</div>
                            <div><strong>E-mail:</strong> {contact.email}</div>
                            <div><strong>Categoria:</strong> {contact.category}</div>
                            <ButtonContainer>
                                <EditButton onClick={() => handleEdit(contact)}>Editar</EditButton>
                                <RemoveButton onClick={() => handleRemove(contact.id)}>Remover</RemoveButton>
                            </ButtonContainer>
                        </>
                    )}
                </ContactCard>
            ))}
        </ListContainer>
    );
};

export default ContactList;