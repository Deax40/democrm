export const leads = [
  { id: 1,  name: 'Romain Chevalier', email: 'romain.c@startupX.io',        phone: '+33 6 11 22 33 44', company: 'StartupX',         source: 'Site web',     status: 'Nouveau',      value: '€ 15 000', date: '05/06/2025', avatar: 'RC', avatarColor: 'bg-blue-500' },
  { id: 2,  name: 'Lucie Peron',      email: 'lucie.p@datacorp.fr',          phone: '+33 7 22 33 44 55', company: 'DataCorp',         source: 'LinkedIn',     status: 'Contacté',     value: '€ 28 000', date: '04/06/2025', avatar: 'LP', avatarColor: 'bg-purple-500' },
  { id: 3,  name: 'Pierre Vidal',     email: 'p.vidal@openspace.com',        phone: '+33 6 33 44 55 66', company: 'OpenSpace Co',     source: 'Référence',    status: 'Qualifié',     value: '€ 42 000', date: '03/06/2025', avatar: 'PV', avatarColor: 'bg-green-500' },
  { id: 4,  name: 'Anais Laurent',    email: 'anais.l@bizflow.fr',           phone: '+33 7 44 55 66 77', company: 'BizFlow',          source: 'Email',        status: 'Proposition',  value: '€ 8 500',  date: '02/06/2025', avatar: 'AL', avatarColor: 'bg-amber-500' },
  { id: 5,  name: 'Guillaume Fort',   email: 'g.fort@stratexpert.com',       phone: '+33 6 55 66 77 88', company: 'StratExpert',      source: 'Salon pro',    status: 'Négociation',  value: '€ 65 000', date: '01/06/2025', avatar: 'GF', avatarColor: 'bg-red-500' },
  { id: 6,  name: 'Clara Muller',     email: 'c.muller@alphatech.de',        phone: '+49 151 234 567',   company: 'AlphaTech DE',     source: 'Partenaire',   status: 'Conclu',       value: '€ 91 200', date: '30/05/2025', avatar: 'CM', avatarColor: 'bg-teal-500' },
  { id: 7,  name: 'Florian Roy',      email: 'f.roy@nanobit.io',             phone: '+33 7 66 77 88 99', company: 'Nanobit',          source: 'Site web',     status: 'Perdu',        value: '€ 5 000',  date: '29/05/2025', avatar: 'FR', avatarColor: 'bg-gray-500' },
  { id: 8,  name: 'Émilie Renard',    email: 'emilie.r@softlab.fr',          phone: '+33 6 77 88 99 00', company: 'SoftLab',          source: 'LinkedIn',     status: 'Nouveau',      value: '€ 19 800', date: '28/05/2025', avatar: 'ER', avatarColor: 'bg-pink-500' },
]

export const statusColors = {
  'Nouveau':      'badge-primary',
  'Contacté':     'badge-info',
  'Qualifié':     'badge-purple',
  'Proposition':  'badge-warning',
  'Négociation':  'badge-secondary',
  'Conclu':       'badge-success',
  'Perdu':        'badge-danger',
}
