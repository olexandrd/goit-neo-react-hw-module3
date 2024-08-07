import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const contacts = [
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

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
        
         */}
      <SearchBox
        searchRequest={searchRequest}
        handleChange={handleSearchRequest}
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
