import {defineField, defineType} from 'sanity'

export const petsType = defineType({
    name: 'pets',
    title: 'Pets',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
      }),
    ],
  })