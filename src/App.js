
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
`;

const MainContent = styled.div`
    flex-grow: 1;
    padding: 20px;
     text-align: center;
`;

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <Sidebar />
                <MainContent>
                    <h1> Agenda de Contatos 📞 </h1>
                    <ContactForm />
                    <ContactList />
                </MainContent>
            </AppContainer>
        </Provider>
    );
};

export default App;