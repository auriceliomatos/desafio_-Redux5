import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin-bottom: 20px;
    max-width: 500px; /* Limitar largura máxima */
    margin: 0 auto; /* Centralizar */
    text-align: center;
`;

const Input = styled.input`
    display: block;
    margin: 5px 0;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
`;

const Select = styled.select`
    display: block;
    margin: 5px 0;
    padding: 10px;
    width: 40%; /* Ajustar largura para 100% */
`;

const AddButton = styled.button`
    background-color: #007bff; /* Azul */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3; /* Azul mais escuro ao passar o mouse */
    }
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('Amigo');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id: Date.now(), name, phone, email, category }));
        setName('');
        setPhone('');
        setEmail('');
        setCategory('Amigo');
    };

    return (
        <FormContainer>
            <h2>Novo Contato</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    type="number" // Alterar para "text" para aceitar caracteres
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Amigo">Amigo</option>
                    <option value="Família">Família</option>
                    <option value="Trabalho">Trabalho</option>
                </Select>
                <AddButton type="submit">Adicionar</AddButton>
            </form>
        </FormContainer>
    );
};

export default ContactForm;