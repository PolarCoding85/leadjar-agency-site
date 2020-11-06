import React from 'react'

import Testimonilas from '../../../../ui-elements/cards/TestimonialCard'

import avatar from '../../../../../assets/images/avatar/1.jpg'

const testimonilas = [
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Andy Dimasky',
        job: 'Restaurant Owner',
        social: 'Facebook'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Frank Dellov',
        job: 'Hotel Owner',
        social: 'Twitter'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Centa Simpson',
        job: 'Restaurant Owner',
        social: 'Facebook'
    },
    {
        avatar: avatar, 
        description: '"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "',
        postAuthor: 'Linda Svensky',
        job: 'Shop Owner',
        social: 'Instagram'
    },
]

export default function TestimonilasSection(props) {
    
    return (
        <Testimonilas testimonilas={testimonilas}/>
    );
}