import { getCollection, type CollectionEntry } from "astro:content";
import { areas } from "../data/areas";
import { navigation } from "../data/navigation";

export async function getStudies() {
  const entries = await getCollection("studies");
  return entries.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedStudies() {
  const entries = await getStudies();
  return entries.filter((entry) => entry.data.featured);
}

export async function getStudyBySlug(slug: string) {
  const entries = await getStudies();
  return entries.find((entry) => entry.data.slug === slug);
}

export async function getStudiesByArea(areaSlug: string) {
  const entries = await getStudies();
  return entries.filter((entry) => entry.data.areaSlug === areaSlug);
}

export async function getStudiesByCategory(areaSlug: string, categorySlug: string) {
  const entries = await getStudies();
  return entries.filter((entry) => entry.data.areaSlug === areaSlug && entry.data.categorySlug === categorySlug);
}

export function getArea(areaSlug: string) {
  return areas.find((area) => area.slug === areaSlug);
}

export function getCategory(areaSlug: string, categorySlug: string) {
  const area = navigation.find((item) => item.slug === areaSlug);
  return area?.categories.find((category) => category.slug === categorySlug);
}

export function relatedEntries(current: CollectionEntry<"studies">, all: CollectionEntry<"studies">[]) {
  return all
    .filter((entry) => entry.id !== current.id && (entry.data.categorySlug === current.data.categorySlug || entry.data.areaSlug === current.data.areaSlug))
    .sort((a, b) => {
      const aSameCategory = a.data.categorySlug === current.data.categorySlug ? 0 : 1;
      const bSameCategory = b.data.categorySlug === current.data.categorySlug ? 0 : 1;
      return aSameCategory - bSameCategory || a.data.order - b.data.order;
    })
    .slice(0, 2);
}
