// Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			category: z.string(),
			image: image(),
			date: z.date(),
		}),
});

const worksCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			category: z.string(),
			subcategory: z.string().optional(),
			image: image(),
		}),
});

const authorsCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			fullname: z.string(),
			photoURL: image(),
			job: z.string(),
		}),
});

const quotesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		quote: z.string().max(500),
		author: reference('authors'),
	}),
});

const improvementsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		label: z.string(),
		description: z.string().max(300),
	}),
});

const partnersCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			link: z.string().url(),
			image: image(),
		}),
});

const factsCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			count: z.string().endsWith('+').or(z.number()),
			icon: image().optional(),
		}),
});

const skillsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		percent: z.number().gte(0).lte(100),
	}),
});

const awardsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		type: z.string(),
		items: z.array(
			z.object({
				name: z.string(),
				count: z.number().positive(),
			})
		),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
	posts: postsCollection,
	works: worksCollection,
	authors: authorsCollection,
	quotes: quotesCollection,
	improvements: improvementsCollection,
	facts: factsCollection,
	skills: skillsCollection,
	partners: partnersCollection,
	awards: awardsCollection,
};
