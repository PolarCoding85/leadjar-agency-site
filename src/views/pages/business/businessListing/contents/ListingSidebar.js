import React from 'react'

import WorkingHours from './sidebar/WorkingHours'
import BookTable from './sidebar/BookTable'
import LocationContact from './sidebar/LocationContact'
import PriceRange from './sidebar/PriceRange'
import HostedBy from './sidebar/HostedBy'
import SimilarListings from './sidebar/SimilarListings'
import Tag from './sidebar/Tags'

export default function ListingSidebar() {
    
    return (
        <>
            <WorkingHours />
            <BookTable />
            <LocationContact />
            <PriceRange />
            <HostedBy />
            <SimilarListings />
            <Tag />
        </>
    );
}