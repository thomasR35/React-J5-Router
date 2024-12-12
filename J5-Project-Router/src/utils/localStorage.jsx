export const getContactsFromStorage = () => {
  const storedContacts = localStorage.getItem("contacts");
  return storedContacts ? JSON.parse(storedContacts) : [];
};

export const saveContactsToStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
