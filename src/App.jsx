import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const savedContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2e", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-2er", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-22", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [contacts, setContacts] = useState(savedContacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleContactSubmit = (values, actions) => {
    // contacts.push({ ...values, id: uuidv4() });
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: uuidv4() },
    ]);
    actions.resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submitHandler={handleContactSubmit} />
      <SearchBox
        searchRequest={searchRequest}
        handleChange={handleSearchRequest}
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
