import { type SchemaTypeDefinition } from 'sanity'
import { petsType } from '../schema/pets'
import { blogType } from '../schema/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petsType, blogType],
}
