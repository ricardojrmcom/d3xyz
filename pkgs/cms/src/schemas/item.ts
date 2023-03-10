import { defineField, defineType } from 'sanity';

export const item = defineType({
  name: 'item',
  type: 'document',
  title: 'Item',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'link',
      title: 'Internal Link',
      type: 'string',
    }),
    defineField({
      name: 'external',
      title: 'External Link',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    }),
    defineField({
      name: 'premium',
      type: 'boolean',
      title: 'Premium',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // slug: 'slug',
      description: 'description',
      tags: 'tags',
      body: 'body',
      media: 'image',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
