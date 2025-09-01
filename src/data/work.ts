import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Cloud System Engineer",
    company: "CompuTech Informatik AG",
    region: "Switzerland",
    description:
      "Managing the access and security infrastructure of the Private & Public Cloud. Implementing Microsoft 365 solutions tailored to individual customer needs. Administration and management of the web server infrastructure. Implementation and monitoring of backup solutions. Monitoring of network infrastructures. Providing support and customer service.",
    technologies: [
      "Microsoft 365",
      "Azure",
      "PowerShell",
      "Windows Server",
      "Hyper-V, SCVMM & SCCM",
      "Unix, Linux",
      "Plesk Obsidian",
      "Barracuda",
      "Hornetsecurity",
      "SkyKick",
      "Redstor",
      "MSP360",
    ],
  },
  {
    title: "IT Specialist Trainee – Platform Development",
    company: "CompuTech Informatik AG",
    region: "Switzerland",
    description:
      "Managing the access and security infrastructure of the Private & Public Cloud. Implementing Microsoft 365 solutions tailored to individual customer needs. Administration and management of the web server infrastructure. Implementation and monitoring of backup solutions. Monitoring of network infrastructures. Providing support and customer service.",
    technologies: [
      "Microsoft 365",
      "Azure",
      "PowerShell",
      "Windows Server",
      "Hyper-V, SCVMM & SCCM",
      "Unix, Linux",
      "Plesk Obsidian",
      "Barracuda",
      "Hornetsecurity",
      "SkyKick",
      "Redstor",
      "MSP360",
    ],
  },
];

export type WorkItem = (typeof work)[number];

