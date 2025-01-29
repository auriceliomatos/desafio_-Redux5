
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../redux/actions';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin-bottom: 20px;
`;

const EditContactForm = () => {
    const { id } = useParams();
    
    // Obtém o contato pelo ID
    const contact = useSelector((state) => 
        state.contacts.find(contact => contact.id === parseInt(id))
    );

    const [name, setName] = useState(contact ? contact.name : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');
    const [email, setEmail] = useState(contact ? contact.email : '');
    const [category, setCategory] = useState(contact ? contact.category : 'Amigo');

    const dispatch = useDispatch();

    // Atualiza os estados quando o contato muda
    useEffect(() => {
        if (contact) {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
            setCategory(contact.category);
        }
    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editContact({ id: contact.id, name, phone, email, category }));
        // Redirecionar ou limpar o formulário se necessário
    };

    if (!contact) {
        return <div>Contato não encontrado.</div>; // Mensagem caso o contato não exista
    }

    return (
        <FormContainer>
            <h2>Editar Contato</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Amigo">Amigo</option>
                    <option value="Família">Família</option>
                    <option value="Trabalho">Trabalho</option>
                </select>
                <button type="submit">Salvar</button>
            </form>
        </FormContainer>
    );
};

export default EditContactForm;