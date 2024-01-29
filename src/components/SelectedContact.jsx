import React, { useState, useEffect } from 'react';

const BaseUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function getContact() {
            try {
                const response = await fetch(`${BaseUrl}/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
                setContact(result);
            } catch (err) {
                console.error(err);
            }
        }

        if (selectedContactId) {
            getContact();
        }
    }, [selectedContactId]);

    return (
        <>
            <div>
                {contact ? (
                    <>
                        <ul>Name: {contact.name || 'N/A'}</ul>
                        <ul>Username: {contact.username || 'N/A'}</ul>
                        <ul>Website: {contact.website || 'N/A'}</ul>
                        <ul>Phone Number: {contact.phone || 'N/A'}</ul>
                        <ul>Email Address: {contact.email || 'N/A'}</ul>
                        <button onClick={() => setSelectedContactId(null)}>Return to Contact List</button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

/*
import React, { useState, useEffect } from 'react';

const BaseUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function getContact() {
            try {
                const response = await fetch(`${BaseUrl}/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
                setContact(result);
            } catch (err) {
                console.error(err);
            }
        } getContact();
    }, [selectedContactId]);

    return (
        <>
        <div>
            <ul>Name: {contact.name}</ul>
            <ul>Username: {contact.username}</ul>
            <ul>Website: {contact.website}</ul>
            <ul>Phone Number: {contact.phone}</ul>
            <ul>Email Address: {contact.phone}</ul>
            <button onClick={() =>
                setSelectedContactId(null)}>Return to Contact List</button>
        </div>
        </>
    )

}
*/    
