
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
});

export const removeContact = (id) => ({
    type: 'REMOVE_CONTACT',
    payload: id,
});

export const editContact = (contact) => ({
    type: 'EDIT_CONTACT',
    payload: contact,
});