import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Alle inhoud staat per taal in src/content/<taal>/… De collecties heten `<naam>_<taal>`. */
const LANGS = ['sv', 'en'] as const;
const img = z.string();
const link = z.object({ label: z.string(), href: z.string() });
/** Markering voor teksten die nog door een moedertaalspreker nagekeken moeten worden. */
const review = z.string().optional();

function forLang(lang: string) {
  const dir = (name: string) => `./src/content/${lang}/${name}`;
  return {
    [`settings_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.json', base: dir('settings') }),
      schema: z.object({
        review,
        siteName: z.string(),
        logoSubtitle: z.string().optional(),
        tagline: z.string().optional(),
        seoTitle: z.string(),
        seoDescription: z.string(),
        logo: img,
        logoIcon: img.optional(),
        logoDark: img.optional(),
        ogImage: img.optional(),
        phone: z.string(),
        phoneLink: z.string().optional(),
        email: z.string(),
        addressLine1: z.string(),
        addressLine2: z.string(),
        openingHours: z.string(),
        legalName: z.string().optional(),
        orgNumber: z.string().optional(),
        vatNumber: z.string().optional(),
        fSkatt: z.string().optional(),
        formEmail: z.string().optional(),
        formKey: z.string().optional(),
        formBlacklist: z.string().optional(),
        ctaLabel: z.string(),
        ctaLink: z.string(),
        serviceArea: z.string().optional(),
        parentCompany: z.string().optional(),
        contactPerson: z.object({
          heading: z.string(), name: z.string(), role: z.string().optional(), text: z.string().optional(),
          photo: img.optional(), photoAlt: z.string().optional(), phone: z.string().optional(), email: z.string().optional(),
        }).optional(),
        socials: z.array(z.object({ platform: z.string(), url: z.string() })).default([]),
        nav: z.array(link),
        footerCompany: z.array(link),
        footerServices: z.array(link),
        footerLegal: z.array(link),
        footerBottom: z.array(link),
        copyright: z.string(),
        benefitsTitle: z.string(),
        benefits: z.array(z.object({ label: z.string(), icon: z.string() })),
        planTitle: z.string(),
        plan: z.array(z.object({ title: z.string(), text: z.string() })),
      }),
    }),
    [`pages_${lang}`]: defineCollection({ loader: glob({ pattern: '*.json', base: dir('pages') }), schema: z.any() }),
    [`services_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.md', base: dir('services') }),
      schema: z.object({
        review,
        title: z.string(),
        titleHtml: z.string().optional(),
        h1: z.string().optional(),
        tagline: z.string(),
        short: z.string(),
        icon: z.string(),
        image: img.optional(),
        imageAlt: z.string().optional(),
        order: z.number().default(0),
        slug: z.string().optional(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        relatedCases: z.array(z.string()).optional(),
        faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
        ctaTitle: z.string().optional(),
        ctaText: z.string().optional(),
      }),
    }),
    [`cases_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.md', base: dir('cases') }),
      schema: z.object({
        review,
        title: z.string(),
        slug: z.string(),
        subtitle: z.string(),
        intro: z.string(),
        summary: z.string(),
        image: img.optional(),
        imageAlt: z.string().optional(),
        imageIsLogo: z.boolean().default(false),
        stats: z.array(z.object({ value: z.string(), label: z.string(), icon: z.string() })).max(3).default([]),
        challenge: z.string(),
        approach: z.string(),
        results: z.array(z.string()).default([]),
        closing: z.string().optional(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        order: z.number().default(0),
        published: z.boolean().default(false),
      }),
    }),
    [`regions_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.md', base: dir('regions') }),
      schema: z.object({
        review,
        title: z.string(),
        slug: z.string(),
        name: z.string(),
        h1: z.string().optional(),
        intro: z.string(),
        places: z.string().optional(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        order: z.number().default(0),
      }),
    }),
    [`team_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.json', base: dir('team') }),
      schema: z.object({ review, name: z.string(), role: z.string(), photo: img.optional(), order: z.number().default(0), group: z.string().optional() }),
    }),
    [`faq_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.md', base: dir('faq') }),
      schema: z.object({ review, question: z.string(), order: z.number().default(0) }),
    }),
    [`legal_${lang}`]: defineCollection({
      loader: glob({ pattern: '*.md', base: dir('legal') }),
      schema: z.object({
        review,
        title: z.string(),
        subtitle: z.string().optional(),
        intro: z.string().optional(),
        seoDescription: z.string().optional(),
      }),
    }),
  };
}

export const collections = Object.assign({}, ...LANGS.map(forLang));
