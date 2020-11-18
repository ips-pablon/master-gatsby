import { MdPerson as icon } from 'react-icons/md';
import toppings from './topping';
export default {
    // Computer Name
    name: 'person',
    // Visible Title
    title: 'Slicemasters',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Tell us a bit about this person',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
};