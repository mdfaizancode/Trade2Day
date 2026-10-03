import React, { useState } from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';

function Support() {
    const [search, setSearch] = useState('');
    return(
        <>
            <Hero search={search} onSearchChange={setSearch} />
            <CreateTicket search={search} onSearchChange={setSearch} />
        </>
    );
}

export default Support;