export default {
    name: 'request',
    title: 'Request',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'locations',
            title: 'Locations',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
};