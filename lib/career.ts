import { evidence, skills, entries, type SkillKey } from '@/data/mock';
export const roleNames = ['GTM','PMM','International Growth','AI Product Ops'] as const;
export type RoleName = typeof roleNames[number];
export function targetFor(skill: typeof skills[number], role: RoleName){return skill.target[role]}
export function gapsFor(role: RoleName){return skills.map(s=>({...s,gap:targetFor(s,role)-s.current})).sort((a,b)=>b.gap-a.gap)}
export function evidenceForSkill(id: SkillKey){return evidence.filter(e=>e.skill===id).map(e=>({...e,entry:entries.find(x=>x.id===e.entryId)}))}
export interface CareerRepository { getEntries(): Promise<typeof entries>; getEvidence(): Promise<typeof evidence>; }
export const localCareerRepository: CareerRepository = { async getEntries(){return entries}, async getEvidence(){return evidence} };
// Future adapter seam: implement this interface with Supabase without changing UI components.
